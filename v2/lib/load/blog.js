const globby = require('globby');
const path = require('path');
const fs = require('fs-extra');
const {parse, idx} = require('./utils');

function fileToUrl(fileName) {
  return fileName
    .replace('-', '/')
    .replace('-', '/')
    .replace('-', '/')
    .replace(/\.md$/, '');
}

async function loadBlog({blogDir, env, siteConfig}) {
  const blogFiles = await globby(['**/*.md'], {
    cwd: blogDir,
  });

  const {baseUrl} = siteConfig;

  /* Prepare metadata container */
  const blogMetadatas = [];

  /* the language for each blog page */
  const defaultLangTag = idx(env, ['translation', 'defaultLanguage', 'tag']);

  await Promise.all(
    blogFiles.map(async relativeSource => {
      const source = path.join(blogDir, relativeSource);

      const blogFileName = path.basename(relativeSource);
      // Extract, YYYY, MM, DD from the file name
      const filePathDateArr = blogFileName.split('-');
      const date = new Date(
        `${filePathDateArr[0]}-${filePathDateArr[1]}-${
          filePathDateArr[2]
        }T06:00:00.000Z`,
      );

      const fileString = await fs.readFile(source, 'utf-8');
      const {metadata: rawMetadata} = parse(fileString);
      const metadata = {
        permalink: path.join(baseUrl, `blog`, fileToUrl(blogFileName)),
        source,
        ...rawMetadata,
        date,
        language: defaultLangTag,
      };
      blogMetadatas.push(metadata);
    }),
  );
  blogMetadatas.sort((a, b) => a.date - b.date);
  return blogMetadatas;
}

module.exports = loadBlog;
