import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Chat from '../chat';

@inject('commonStore')
@observer
class MainPage extends Component {

  componentDidMount () {
    this._init();
  }

  // 初始化
  async _init () {
    const { commonStore } = this.props;
    await commonStore.initApp();
    await commonStore.login();
    commonStore.initListenEvent();
  }

  render () {
    return (
      <Chat />
    )
  }
}

export default MainPage;