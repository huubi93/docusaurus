/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createRequire} from 'module';
import importFresh from 'import-fresh';
import {
  DocusaurusPluginVersionInformation,
  ImportedPluginModule,
  LoadContext,
  PluginModule,
  PluginConfig,
  PluginOptions,
  InitializedPlugin,
  PluginType,
  PluginConfigs,
} from '@docusaurus/types';
import {DEFAULT_PLUGIN_ID} from '../../constants';
import {getPluginVersion} from '../versions';
import {ensureUniquePluginInstanceIds} from './pluginIds';
import {
  normalizePluginOptions,
  normalizeThemeConfig,
} from '@docusaurus/utils-validation';

type NormalizedPluginConfig = {
  resolvedPath?: string;
  plugin: PluginModule;
  options: PluginOptions;
  // Only available when a string is provided in config
  pluginModule?: {
    path: string;
    module: ImportedPluginModule;
  };
};

function resolvePluginModule(
  pluginModuleImport: string,
  pluginRequire: NodeRequire,
): string | undefined {
  try {
    return pluginRequire.resolve(pluginModuleImport);
  } catch (e) {
    return undefined;
  }
}

function importPluginModule(pluginPath: string): ImportedPluginModule {
  return importFresh<ImportedPluginModule>(pluginPath);
}

function resolvePluginModuleWithAliases(
  pluginModuleImport: string,
  pluginRequire: NodeRequire,
  pluginType: PluginType,
): string {
  const resolvedPluginModules = [
    `docusaurus-${pluginType}-${pluginModuleImport}`,
    `@docusaurus/${pluginType}-${pluginModuleImport}`,
    `@${pluginModuleImport}/docusaurus-${pluginType}`,
    pluginModuleImport,
  ]
    .map((pluginModuleImportAttempt) =>
      resolvePluginModule(pluginModuleImportAttempt, pluginRequire),
    )
    .filter((pluginModule) => pluginModule !== undefined) as string[];

  if (resolvedPluginModules.length === 0) {
    throw new Error(
      `Docusaurus was unable to resolve the ${pluginModuleImport} ${pluginType}. Make sure one of the following packages are installed:\n${resolvedPluginModules.map(
        (pluginModuleImportAttempt) => `* ${pluginModuleImportAttempt}\n`,
      )}`,
    );
  }

  return resolvedPluginModules[0];
}

function normalizePluginConfig(
  pluginConfig: PluginConfig,
  pluginRequire: NodeRequire,
  pluginType: PluginType,
): NormalizedPluginConfig {
  // plugins: ['./{plugin}']
  // plugins: ['docusaurus-plugin-{plugin}']
  // plugins: ['@docusaurus/plugin-{plugin}']
  // plugins: ['@{company}/docusaurus-plugin']
  if (typeof pluginConfig === 'string') {
    const pluginModuleImport = pluginConfig;
    const pluginModulePath = resolvePluginModuleWithAliases(
      pluginModuleImport,
      pluginRequire,
      pluginType,
    );
    const pluginModule = importPluginModule(pluginModulePath);
    return {
      resolvedPath: pluginModulePath,
      plugin: pluginModule?.default ?? pluginModule,
      options: {},
      pluginModule: {
        path: pluginModuleImport,
        module: pluginModule,
      },
    };
  }

  // plugins: [function plugin() { }]
  if (typeof pluginConfig === 'function') {
    return {
      plugin: pluginConfig,
      options: {},
    };
  }

  if (Array.isArray(pluginConfig)) {
    // plugins: [
    //   ['./plugin',options],
    // ]
    if (typeof pluginConfig[0] === 'string') {
      const pluginModuleImport = pluginConfig[0];
      const pluginModulePath = resolvePluginModuleWithAliases(
        pluginModuleImport,
        pluginRequire,
        pluginType,
      );
      const pluginModule = importPluginModule(pluginModulePath);
      return {
        plugin: pluginModule?.default ?? pluginModule,
        options: pluginConfig[1] ?? {},
        pluginModule: {
          path: pluginModuleImport,
          module: pluginModule,
        },
      };
    }
    // plugins: [
    //   [function plugin() { },options],
    // ]
    if (typeof pluginConfig[0] === 'function') {
      return {
        plugin: pluginConfig[0],
        options: pluginConfig[1] ?? {},
      };
    }
  }

  throw new Error(
    `Unexpected: can't load plugin for following plugin config.\n${JSON.stringify(
      pluginConfig,
    )}`,
  );
}

function getOptionValidationFunction(
  normalizedPluginConfig: NormalizedPluginConfig,
): PluginModule['validateOptions'] {
  if (normalizedPluginConfig.pluginModule) {
    // support both commonjs and ES modules
    return (
      normalizedPluginConfig.pluginModule.module?.default?.validateOptions ??
      normalizedPluginConfig.pluginModule.module?.validateOptions
    );
  } else {
    return normalizedPluginConfig.plugin.validateOptions;
  }
}

function getThemeValidationFunction(
  normalizedPluginConfig: NormalizedPluginConfig,
): PluginModule['validateThemeConfig'] {
  if (normalizedPluginConfig.pluginModule) {
    // support both commonjs and ES modules
    return (
      normalizedPluginConfig.pluginModule.module.default?.validateThemeConfig ??
      normalizedPluginConfig.pluginModule.module.validateThemeConfig
    );
  } else {
    return normalizedPluginConfig.plugin.validateThemeConfig;
  }
}

export default function initPlugins({
  pluginConfigs,
  context,
}: {
  pluginConfigs: PluginConfigs;
  context: LoadContext;
}): InitializedPlugin[] {
  // We need to resolve plugins from the perspective of the siteDir, since the siteDir's package.json
  // declares the dependency on these plugins.
  const pluginRequire = createRequire(context.siteConfigPath);

  function doGetPluginVersion(
    normalizedPluginConfig: NormalizedPluginConfig,
  ): DocusaurusPluginVersionInformation {
    // get plugin version
    if (normalizedPluginConfig.resolvedPath) {
      return getPluginVersion(
        normalizedPluginConfig.resolvedPath,
        context.siteDir,
      );
    } else {
      return {type: 'local'};
    }
  }

  function doValidateThemeConfig(
    normalizedPluginConfig: NormalizedPluginConfig,
  ) {
    const validateThemeConfig = getThemeValidationFunction(
      normalizedPluginConfig,
    );
    if (validateThemeConfig) {
      return validateThemeConfig({
        validate: normalizeThemeConfig,
        themeConfig: context.siteConfig.themeConfig,
      });
    } else {
      return context.siteConfig.themeConfig;
    }
  }

  function doValidatePluginOptions(
    normalizedPluginConfig: NormalizedPluginConfig,
  ) {
    const validateOptions = getOptionValidationFunction(normalizedPluginConfig);
    if (validateOptions) {
      return validateOptions({
        validate: normalizePluginOptions,
        options: normalizedPluginConfig.options,
      });
    } else {
      // Important to ensure all plugins have an id
      // as we don't go through the Joi schema that adds it
      return {
        ...normalizedPluginConfig.options,
        id: normalizedPluginConfig.options.id ?? DEFAULT_PLUGIN_ID,
      };
    }
  }

  const pluginTypes = ['theme', 'plugin'] as const;

  const plugins: InitializedPlugin[] = pluginTypes
    .flatMap((pluginType: PluginType) =>
      pluginConfigs[pluginType].map((pluginConfig) => {
        if (!pluginConfig) {
          return null;
        }
        const normalizedPluginConfig = normalizePluginConfig(
          pluginConfig,
          pluginRequire,
          pluginType,
        );
        const pluginVersion: DocusaurusPluginVersionInformation =
          doGetPluginVersion(normalizedPluginConfig);
        const pluginOptions = doValidatePluginOptions(normalizedPluginConfig);

        // Side-effect: merge the normalized theme config in the original one
        context.siteConfig.themeConfig = {
          ...context.siteConfig.themeConfig,
          ...doValidateThemeConfig(normalizedPluginConfig),
        };

        const pluginInstance = normalizedPluginConfig.plugin(
          context,
          pluginOptions,
        );

        return {
          ...pluginInstance,
          options: pluginOptions,
          version: pluginVersion,
        };
      }),
    )
    .filter(<T>(item: T): item is Exclude<T, null> => Boolean(item));

  ensureUniquePluginInstanceIds(plugins);

  return plugins;
}
