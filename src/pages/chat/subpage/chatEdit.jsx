import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('chatStore')
@observer
class Chat extends Component {

  state = {
    val: ''
  }

  handleChangeVal (e) {
    this.setState({
      val: e.target.value
    })
  }

  // 发送消息
  handleSendMsg (e) {
    if (e.charCode === 13) {
      e.preventDefault();
      const { chatStore } = this.props;
      const msg = {
        target_username: 'test1',
        content: this.state.val
      }
      chatStore.sendSingleMsg(msg);
      this.setState({
        val: ''
      })
    }
  }

  render() {
    const { val } = this.state;
    return (
      <textarea
        value={val}
        onChange={(e) => this.handleChangeVal(e)}
        onKeyPress={(e) => this.handleSendMsg(e)}
        style={{width: '100%', height: 50, boxSizing: 'border-box', resize: 'none'}}
      />
    )
  }
}

export default Chat;