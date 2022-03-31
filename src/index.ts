import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as yaml from 'js-yaml';
import { ExecOptions } from '@actions/exec';

const main = async () => {
  try {
    // inputのJSONオブジェクトを取得する
    // core.getInputの戻り値はstringのため、JSON.parseが必要
    const jsonObject = JSON.parse(core.getInput('params'));

    const repo = jsonObject.types_repo;

    const api = yaml.load(core.getInput('api'));

    console.log(api);

    core.setOutput('result-message', `repo: ${repo}\napi: ${api}`);
  } catch (error) {
    core.setFailed(error as Error);
  }
};
main();
