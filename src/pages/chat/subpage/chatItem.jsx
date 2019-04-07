import React, { Component } from 'react';

class Chat extends Component {

  render() {
    const { msg, userInfo } = this.props;
    const isSelf = msg.from_username === userInfo.username;
    console.log(msg, userInfo)
    return (
      <div
        style={{ marginBottom: 10, overflow: 'hidden'}}
      >
        <div
          style={{float: isSelf ? 'right' : 'left'}}
        >
          <div
            style={{ fontSize: 14, color: 'rgba(0, 0, 0, .65)', textAlign: isSelf ? 'right' : 'left' }}
          >
            {msg.from_username}
          </div>
          <div
            style={{ fontSize: 14, color: 'rgba(0, 0, 0, .75)', textAlign: isSelf ? 'right' : 'left' }}
          >
            {msg.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;