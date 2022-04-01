'use strict';

import * as core from '@actions/core';
import * as yaml from 'js-yaml';

export const executeCreateTypes = async (): Promise<void> => {
  const params = JSON.parse(core.getInput('params'));

  const repo = params.types_repo;

  const api = yaml.load(core.getInput('api'));

  console.log(api);

  core.setOutput('result-message', `repo: ${repo} updated`);
};
