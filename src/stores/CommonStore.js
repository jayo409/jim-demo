import { observable, action, runInAction, computed } from 'mobx';

import { userStore, chatStore } from './index';
import { MD5, randomStr } from 'utils';
import global from 'configs';
import sdk from 'services';

export default class CommonStore {

  // 应用初始化
  @action initApp = () => {
    const random_str = randomStr(20);
    const timestamp = new Date().getTime();
    const signature = MD5(`appkey=${global.appkey}&timestamp=${timestamp}&random_str=${random_str}&key=${global.masterSecret}`);  // 签名生成
    return new Promise((resolve, reject) => {
      sdk.init({
        appkey: global.appkey,
        random_str,
        signature,
        timestamp,
        flag: 0
      }, res => {
        resolve(res);
      }, err => {
        reject(err);
      }, () => {
        console.log('timeout');
      })
    })
  }

  // 登陆
  @action login = () => {
    return new Promise((resolve, reject) => {
      sdk.login({
        username: 'test1',
        password: '123456a'
      }, res => {
        resolve(res);
        userStore.setUserInfo({
          username: 'test1'
        })
        console.log('success!');
      }, err => {
        reject(err);
      })
    })
  }

  // 添加监听事件
  @action initListenEvent = () => {

    // 接收消息监听
    global.JIM.onMsgReceive(payload => {
      console.log('===============');
      console.log(payload);
      const msg = {
        from_username: payload.messages[0].from_username,
        content: payload.messages[0].content.msg_body.text
      }
      chatStore.onNewMsg(msg)
    })
  }

}