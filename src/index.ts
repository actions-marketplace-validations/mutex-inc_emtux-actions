import * as core from '@actions/core';
import { ActionCategoryType } from './constant/actionType';
import { execute } from './actions/router';

const main = async (): Promise<void> => {
  try {
    // inputのJSONオブジェクトを取得する
    // core.getInputの戻り値はstringのため、JSON.parseが必要
    const params = JSON.parse(core.getInput('params'));

    const action = params.action_type as ActionCategoryType;

    await execute(action)();
  } catch (error) {
    core.setFailed(error as Error);
  }
};
main();
