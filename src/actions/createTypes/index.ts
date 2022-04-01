'use strict';

import * as core from '@actions/core';
import * as github from '@actions/github';
import * as yaml from 'js-yaml';

export const executeCreateTypes = async (): Promise<void> => {
  const repo = github.context.repo.repo;

  const api = yaml.load(core.getInput('api'));

  core.setOutput('result-message', `repo: ${repo}`);
};
