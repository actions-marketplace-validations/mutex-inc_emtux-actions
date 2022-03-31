import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { ExecOptions } from '@actions/exec';

const main = async () => {
  try {
    // inputのJSONオブジェクトを取得する
    // core.getInputの戻り値はstringのため、JSON.parseが必要
    const jsonObject = JSON.parse(core.getInput('json-data'));
    let message = '';

    // 文字列の生成（aaとccc/fffの文字列をつなげて「これは表示テスト」を作る）
    message = jsonObject.aaa + jsonObject.ccc.fff; // outputの設定
    core.setOutput('result-message', message);
  } catch (error) {
    core.setFailed(error as Error);
  }
};
main();
