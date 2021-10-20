/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Feed, Author as FeedAuthor} from 'feed';
import {PluginOptions, Author, BlogPost, FeedType} from './types';
import {normalizeUrl, mdxToHtml} from '@docusaurus/utils';
import {DocusaurusConfig} from '@docusaurus/types';
import path from 'path';
import fs from 'fs-extra';

async function generateBlogFeed({
  blogPosts,
  options,
  siteConfig,
}: {
  blogPosts: BlogPost[];
  options: PluginOptions;
  siteConfig: DocusaurusConfig;
}): Promise<Feed | null> {
  const {feedOptions, routeBasePath} = options;
  const {url: siteUrl, baseUrl, title, favicon} = siteConfig;
  const blogBaseUrl = normalizeUrl([siteUrl, baseUrl, routeBasePath]);

  const updated =
    (blogPosts[0] && blogPosts[0].metadata.date) ||
    new Date('2015-10-25T16:29:00.000-07:00'); // TODO weird legacy date

  const feed = new Feed({
    id: blogBaseUrl,
    title: feedOptions.title || `${title} Blog`,
    updated,
    language: feedOptions.language,
    link: blogBaseUrl,
    description: feedOptions.description || `${siteConfig.title} Blog`,
    favicon: favicon ? normalizeUrl([siteUrl, baseUrl, favicon]) : undefined,
    copyright: feedOptions.copyright,
  });

  function toFeedAuthor(author: Author): FeedAuthor {
    // TODO ask author emails?
    // RSS feed requires email to render authors
    return {name: author.name, link: author.url};
  }

  blogPosts.forEach((post) => {
    const {
      id,
      metadata: {title: metadataTitle, permalink, date, description, authors},
    } = post;
    feed.addItem({
      title: metadataTitle,
      id,
      link: normalizeUrl([siteUrl, permalink]),
      date,
      description,
      content: mdxToHtml(post.content),
      author: authors.map(toFeedAuthor),
    });
  });

  return feed;
}

async function createBlogFeedFile({
  feed,
  feedType,
  filePath,
}: {
  feed: Feed;
  feedType: FeedType;
  filePath: string;
}) {
  const feedContent = feedType === 'rss' ? feed.rss2() : feed.atom1();
  try {
    await fs.outputFile(filePath, feedContent);
  } catch (err) {
    throw new Error(`Generating ${feedType} feed failed: ${err}.`);
  }
}

export async function createBlogFeedFiles({
  blogPosts,
  options,
  siteConfig,
  outDir,
}: {
  blogPosts: BlogPost[];
  options: PluginOptions;
  siteConfig: DocusaurusConfig;
  outDir: string;
}) {
  const feed = await generateBlogFeed({blogPosts, options, siteConfig});

  const feedTypes = options.feedOptions.type;
  if (!feed || !feedTypes) {
    return;
  }

  await Promise.all(
    feedTypes.map(async function (feedType) {
      await createBlogFeedFile({
        feed,
        feedType,
        filePath: path.join(outDir, options.routeBasePath, `${feedType}.xml`),
      });
    }),
  );
}
