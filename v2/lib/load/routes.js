/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

async function genRoutesConfig({
  docsMetadatas = {},
  pagesMetadatas = [],
  blogMetadatas = [],
}) {
  function genDocsRoute(metadata) {
    const {permalink, source} = metadata;
    return `
      {
        path: '${permalink}',
        exact: true,
        component: Loadable({
          loader: () => import(/* webpackPrefetch: true */ '${source}'),
          loading: Loading,
          render(loaded, props) {
            let Content = loaded.default;
            return (
              <DocBody {...props} metadata={${JSON.stringify(metadata)}}>
                <Content />
              </DocBody>
            );
          }
        })
      }`;
  }

  const docsRoutes = `
  {
    path: '/docs',
    component: Doc,
    routes: [${Object.values(docsMetadatas)
      .map(genDocsRoute)
      .join(',')}],
  }`;

  function genPagesRoute(metadata) {
    const {permalink, source} = metadata;
    return `
  {
    path: '${permalink}',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackPrefetch: true */ '${source}'),
      loading: Loading,
      render(loaded, props) {
        let Content = loaded.default;
        return (
          <Pages {...props} metadata={${JSON.stringify(metadata)}}>
            <Content {...props} metadata={${JSON.stringify(metadata)}} />
          </Pages>
        );
      }
    })
  }`;
  }

  function genBlogRoute(metadata) {
    const {permalink, source} = metadata;
    if (metadata.isBlogPage) {
      const {posts} = metadata;
      return `
  {
    path: '${permalink}',
    exact: true,
    component: Loadable.Map({
      loader: {
        ${posts
          .map(
            (p, i) =>
              `post${i}: () => import(/* webpackPrefetch: true */ '${
                p.source
              }')`,
          )
          .join(',\n\t\t\t\t')}
      },
      loading: Loading,
      render(loaded, props) {
        ${posts
          .map((p, i) => `const Post${i} = loaded.post${i}.default;`)
          .join('\n\t\t\t\t')}
        return (
          <BlogPage {...props} metadata={${JSON.stringify(metadata)}} >
           ${posts.map((p, i) => `<Post${i} />`).join(' ')}
          </BlogPage>
        )
      }
    })
  }`;
    }

    return `
  {
    path: '${permalink}',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackPrefetch: true */ '${source}'),
      loading: Loading,
      render(loaded, props) {
        let MarkdownContent = loaded.default;
        return (
          <BlogPost {...props} metadata={${JSON.stringify(metadata)}}>
            <MarkdownContent />
          </BlogPost>
        );
      }
    })
  }`;
  }

  const notFoundRoute = `
  {
    path: '*',
    component: NotFound,
  }`;

  return (
    `import React from 'react';\n` +
    `import Loadable from 'react-loadable';\n` +
    `import Loading from '@theme/Loading';\n` +
    `import Doc from '@theme/Doc';\n` +
    `import DocBody from '@theme/DocBody';\n` +
    `import BlogPost from '@theme/BlogPost';\n` +
    `import BlogPage from '@theme/BlogPage';\n` +
    `import Pages from '@theme/Pages';\n` +
    `import NotFound from '@theme/NotFound';\n` +
    `const routes = [${docsRoutes},
      ${pagesMetadatas.map(genPagesRoute).join(',')},
      ${blogMetadatas.map(genBlogRoute).join(',')},
      ${notFoundRoute}\n];\n` +
    `export default routes;\n`
  );
}

module.exports = genRoutesConfig;
