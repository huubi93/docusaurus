/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import _ from 'lodash';
import {getDataFileData, normalizeUrl} from '@docusaurus/utils';
import {Joi, URISchema} from '@docusaurus/utils-validation';
import type {BlogContentPaths} from './types';
import type {
  Author,
  AuthorAttributes,
  AuthorPage,
  AuthorsMap,
} from '@docusaurus/plugin-content-blog';

type AuthorInput = AuthorAttributes & {
  page?: boolean | AuthorPage;
};

export type AuthorsMapInput = {[authorKey: string]: AuthorInput};

const AuthorPageSchema = Joi.object<AuthorPage>({
  permalink: Joi.string().required(),
});

const AuthorsMapInputSchema = Joi.object<AuthorsMapInput>()
  .pattern(
    Joi.string(),
    Joi.object({
      name: Joi.string(),
      url: URISchema,
      imageURL: URISchema,
      title: Joi.string(),
      email: Joi.string(),
      page: Joi.alternatives(Joi.bool(), AuthorPageSchema),
      permalink: Joi.string(),
      description: Joi.string(),
    })
      .rename('image_url', 'imageURL')
      .or('name', 'imageURL')
      .unknown()
      .required()
      .messages({
        'object.base':
          '{#label} should be an author object containing properties like name, title, and imageURL.',
        'any.required':
          '{#label} cannot be undefined. It should be an author object containing properties like name, title, and imageURL.',
      }),
  )
  .messages({
    'object.base':
      "The authors map file should contain an object where each entry contains an author key and the corresponding author's data.",
  });

export function checkPermalinkCollisions(
  authorsMap: AuthorsMap | undefined,
): void {
  if (!authorsMap) {
    return;
  }

  const permalinkCounts = _(authorsMap)
    // Filter to keep only authors with a page
    .pickBy((author) => !!author.page)
    // Group authors by their permalink
    .groupBy((author) => author.page?.permalink)
    // Filter to keep only permalinks with more than one author
    .pickBy((authors) => authors.length > 1)
    // Transform the object into an array of [permalink, authors] pairs
    .toPairs()
    .value();

  if (permalinkCounts.length > 0) {
    const errorMessage = permalinkCounts
      .map(
        ([permalink, authors]) =>
          `Permalink: ${permalink}\nAuthors: ${authors
            .map((author) => author.name || 'Unknown')
            .join(', ')}`,
      )
      .join('\n');

    throw new Error(
      `The following permalinks are duplicated:\n${errorMessage}`,
    );
  }
}

function normalizeAuthor({
  authorsBaseRoutePath,
  authorKey,
  author,
}: {
  authorsBaseRoutePath: string;
  authorKey: string;
  author: AuthorInput;
}): Author {
  function getAuthorPage(): AuthorPage | null {
    if (!author.page) {
      return null;
    }
    const slug =
      author.page === true ? _.kebabCase(authorKey) : author.page.permalink;
    return {
      permalink: normalizeUrl([authorsBaseRoutePath, slug]),
    };
  }

  return {
    ...author,
    key: authorKey,
    page: getAuthorPage(),
  };
}

function normalizeAuthorsMap({
  authorsBaseRoutePath,
  authorsMapInput,
}: {
  authorsBaseRoutePath: string;
  authorsMapInput: AuthorsMapInput;
}): AuthorsMap {
  return _.mapValues(authorsMapInput, (author, authorKey) => {
    return normalizeAuthor({authorsBaseRoutePath, authorKey, author});
  });
}

export function validateAuthorsMapInput(content: unknown): AuthorsMapInput {
  const {error, value} = AuthorsMapInputSchema.validate(content);
  if (error) {
    throw error;
  }
  return value;
}

async function getAuthorsMapInput(params: {
  authorsMapPath: string;
  contentPaths: BlogContentPaths;
}): Promise<AuthorsMapInput | undefined> {
  return getDataFileData(
    {
      filePath: params.authorsMapPath,
      contentPaths: params.contentPaths,
      fileType: 'authors map',
    },
    validateAuthorsMapInput,
  );
}

export async function getAuthorsMap(params: {
  authorsMapPath: string;
  authorsBaseRoutePath: string;
  contentPaths: BlogContentPaths;
}): Promise<AuthorsMap | undefined> {
  const authorsMapInput = await getAuthorsMapInput(params);
  if (!authorsMapInput) {
    return undefined;
  }
  const authorsMap = normalizeAuthorsMap({authorsMapInput, ...params});
  checkPermalinkCollisions(authorsMap);
  return authorsMap;
}
