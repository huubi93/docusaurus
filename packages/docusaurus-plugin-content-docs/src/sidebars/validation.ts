/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Joi, URISchema} from '@docusaurus/utils-validation';
import type {
  SidebarItemConfig,
  SidebarCategoriesShorthand,
  SidebarItemBase,
  SidebarItemAutogenerated,
  SidebarItemDoc,
  SidebarItemLink,
  SidebarItemCategoryConfig,
  SidebarsConfig,
} from './types';
import {isCategoriesShorthand} from './utils';

const sidebarItemBaseSchema = Joi.object<SidebarItemBase>({
  className: Joi.string(),
  customProps: Joi.object().unknown(),
});

const sidebarItemAutogeneratedSchema =
  sidebarItemBaseSchema.append<SidebarItemAutogenerated>({
    type: 'autogenerated',
    dirName: Joi.string()
      .required()
      .pattern(/^[^/](.*[^/])?$/)
      .message(
        '"dirName" must be a dir path relative to the docs folder root, and should not start or end with slash',
      ),
  });

const sidebarItemDocSchema = sidebarItemBaseSchema.append<SidebarItemDoc>({
  type: Joi.string().valid('doc', 'ref').required(),
  id: Joi.string().required(),
  label: Joi.string(),
});

const sidebarItemLinkSchema = sidebarItemBaseSchema.append<SidebarItemLink>({
  type: 'link',
  href: URISchema.required(),
  label: Joi.string()
    .required()
    .messages({'any.unknown': '"label" must be a string'}),
});

const sidebarItemCategorySchema =
  sidebarItemBaseSchema.append<SidebarItemCategoryConfig>({
    type: 'category',
    label: Joi.string()
      .required()
      .messages({'any.unknown': '"label" must be a string'}),
    // TODO: Joi doesn't allow mutual recursion. See https://github.com/sideway/joi/issues/2611
    items: Joi.array()
      .required()
      .messages({'any.unknown': '"items" must be an array'}), // .items(Joi.link('#sidebarItemSchema')),
    collapsed: Joi.boolean().messages({
      'any.unknown': '"collapsed" must be a boolean',
    }),
    collapsible: Joi.boolean().messages({
      'any.unknown': '"collapsible" must be a boolean',
    }),
  });

const sidebarItemSchema: Joi.Schema<SidebarItemConfig> = Joi.object()
  .when('.type', {
    switch: [
      {is: 'link', then: sidebarItemLinkSchema},
      {
        is: Joi.string().valid('doc', 'ref').required(),
        then: sidebarItemDocSchema,
      },
      {is: 'autogenerated', then: sidebarItemAutogeneratedSchema},
      {is: 'category', then: sidebarItemCategorySchema},
      {
        is: 'subcategory',
        then: Joi.forbidden().messages({
          'any.unknown':
            'Docusaurus v2: "subcategory" has been renamed as "category".',
        }),
      },
      {
        is: Joi.string().required(),
        then: Joi.forbidden().messages({
          'any.unknown': 'Unknown sidebar item type "{.type}".',
        }),
      },
    ],
  })
  .id('sidebarItemSchema');

function validateSidebarItem(item: unknown): asserts item is SidebarItemConfig {
  if (typeof item === 'string') {
    return;
  }
  // TODO: remove once with proper Joi support
  // Because we can't use Joi to validate nested items (see above), we do it manually
  if (isCategoriesShorthand(item as SidebarItemConfig)) {
    Object.values(item as SidebarCategoriesShorthand).forEach((category) =>
      category.forEach(validateSidebarItem),
    );
  } else {
    Joi.assert(item, sidebarItemSchema);
    if ((item as SidebarItemCategoryConfig).type === 'category') {
      (item as SidebarItemCategoryConfig).items.forEach(validateSidebarItem);
    }
  }
}

export function validateSidebars(
  sidebars: unknown,
): asserts sidebars is SidebarsConfig {
  Object.values(sidebars as SidebarsConfig).forEach((sidebar) => {
    if (Array.isArray(sidebar)) {
      sidebar.forEach(validateSidebarItem);
    } else {
      validateSidebarItem(sidebar);
    }
  });
}
