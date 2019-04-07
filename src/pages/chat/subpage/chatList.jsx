import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ChatItem from './chatItem';

@inject('userStore')
@inject('chatStore')
@observer
class Chat extends Component {

  componentWillReact () {
    // 滚动条到底部
    setTimeout(() => {
      this.chatList.scrollTop = this.chatList.scrollHeight;
    }, 0);
    
  }

  render() {
    const { chatStore, userStore } = this.props;

    return (
      <div
        style={{width: '100%', height: 400, overflow: 'auto', boxSizing: 'border-box', padding: 20}}
        ref={ref => this.chatList = ref}
      >
        {
          chatStore.msgList.map((item, index) => (
            <ChatItem
              key={index}
              msg={item}
              userInfo={userStore.userInfo}
            />
          ))
        }
      </div>
    )
  }
}

export default Chat;