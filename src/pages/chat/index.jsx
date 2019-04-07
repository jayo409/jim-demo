import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ChatList from './subpage/chatList';
import ChatEdit from './subpage/chatEdit';

@inject('chatStore')
@observer
class Chat extends Component {

  render () {
    return (
      <div
        style={{width: 400, height: 450, margin: '40px auto 0', border: '1px solid #ddd', boxShadow: '0 0 16px 1px rgba(0, 0, 0, 0.2)'}}
      >
        <ChatList />
        <ChatEdit />
      </div>
    )
  }
}

export default Chat;