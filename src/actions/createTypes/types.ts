/* 'use strict';

export type ApiDoc = {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
    contact?: {
      email?: string;
      name?: string;
    };
    servers: ApiDocServer[];
    components?: ApiDocComponents;

    security: {
      'x-api-key': string[];
      authorization: string[];
    };
  };
};

export type ApiDocReference = {
  $ref: string;
};

export type ApiDocServer = {
  url: string;
  description?: string;
};

export type ApiDocComponents = {
  responses: string[];
};

export type ApiDocPath = {
  [key: string]: {
    get?: {
      summary?: string;
      responses: {
        [key: string]: {};
      };
    };
  };
};

export type ApiDocResponseContent = {
  description: string;
  content: {
    'application/json': {
      schema: {};
    };
  };
};
 */
