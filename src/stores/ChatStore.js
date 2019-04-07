import { observable, action, runInAction, computed } from 'mobx';

import { MD5, randomStr } from 'utils';
import global from 'configs';
import sdk from 'services';

export default class ChatStore {

  @observable msgList = [];

  // 应用初始化
  @action onNewMsg = (msg) => {
    this.msgList.push(msg);
  }

  @action sendSingleMsg = (payload) => {
    console.log(payload);
    return new Promise((resolve, reject) => {
      sdk.sendSingleMsg(payload, () => {
        runInAction(() => {
          const newMsg = {
            from_username: 'test1',
            content: payload.content
          }
          this.onNewMsg(newMsg);
        })
      }, err => {
        console.log(err);
      })
    })
  }

}