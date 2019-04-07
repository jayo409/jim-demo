import { observable, action, runInAction, computed } from 'mobx';

export default class UserStore {

  @observable userInfo = {};

  @action setUserInfo = (userInfo) => {
    this.userInfo = userInfo
  } 

} 