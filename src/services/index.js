import global from 'configs';
const timeoutData = { code: -2 };

class ApiService {
    // 登出
    loginOut(success) {
        return new Promise((resolve) => {
            global.JIM.loginOut();
            if (success && success instanceof Function) {
                success();
            }
            resolve();
        });
    }
    // 更新会话extra字段
    updateConversation(conversationObj, success) {
        return new Promise((resolve) => {
            global.JIM.updateConversation(conversationObj);
            if (success && success instanceof Function) {
                success();
            }
            resolve();
        });
    }
    // 重置会话徽标未读数
    resetUnreadCount(conversationObj, success) {
        return new Promise((resolve) => {
            global.JIM.resetUnreadCount(conversationObj);
            if (success && success instanceof Function) {
                success();
            }
            resolve();
        });
    }
    // JIM初始化
    init(initObj, success, error, timeout) {
        return this.callback(global.JIM.init(initObj), success, error, timeout);
    }
    // 登录
    login(loginObj, success, error, timeout) {
        return this.callback(global.JIM.login(loginObj), success, error, timeout);
    }
    // 注册
    register(registerObj, success, error, timeout) {
        return this.callback(global.JIM.register(registerObj), success, error, timeout);
    }
    // 获取静态资源路径
    getResource(urlObj, success, error, timeout) {
        return this.callback(global.JIM.getResource(urlObj), success, error, timeout);
    }
    // 获取用户资料
    getUserInfo(userObj, success, error, timeout) {
        return this.callback(global.JIM.getUserInfo(userObj), success, error, timeout);
    }
    // 获取好友列表
    getFriendList(success, error, timeout) {
        return this.callback(global.JIM.getFriendList(), success, error, timeout);
    }
    // 获取会话列表
    getConversation(success, error, timeout) {
        return this.callback(global.JIM.getConversation(), success, error, timeout);
    }
    // 获取群屏蔽列表
    groupShieldList(success, error, timeout) {
        return this.callback(global.JIM.groupShieldList(), success, error, timeout);
    }
    // 获取免打扰列表
    getNoDisturb(success, error, timeout) {
        return this.callback(global.JIM.getNoDisturb(), success, error, timeout);
    }
    // 获取群组信息
    getGroupInfo(groupObj, success, error, timeout) {
        return this.callback(global.JIM.getGroupInfo(groupObj), success, error, timeout);
    }
    // 获取群成员
    getGroupMembers(groupObj, success, error, timeout) {
        return this.callback(global.JIM.getGroupMembers(groupObj), success, error, timeout);
    }
    // 更新群组信息
    updateGroupInfo(groupObj, success, error, timeout) {
        return this.callback(global.JIM.updateGroupInfo(groupObj), success, error, timeout);
    }
    // 删除群屏蔽
    delGroupShield(groupObj, success, error, timeout) {
        return this.callback(global.JIM.delGroupShield(groupObj), success, error, timeout);
    }
    // 添加群屏蔽
    addGroupShield(groupObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupShield(groupObj), success, error, timeout);
    }
    // 删除群免打扰
    delGroupNoDisturb(groupObj, success, error, timeout) {
        return this.callback(global.JIM.delGroupNoDisturb(groupObj), success, error, timeout);
    }
    // 添加群免打扰
    addGroupNoDisturb(groupObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupNoDisturb(groupObj), success, error, timeout);
    }
    // 消息撤回
    msgRetract(msgObj, success, error, timeout) {
        return this.callback(global.JIM.msgRetract(msgObj), success, error, timeout);
    }
    // 添加好友
    addFriend(friendObj, success, error, timeout) {
        return this.callback(global.JIM.addFriend(friendObj), success, error, timeout);
    }
    // 删除单聊黑名单
    delSingleBlacks(blackObj, success, error, timeout) {
        return this.callback(global.JIM.delSingleBlacks(blackObj), success, error, timeout);
    }
    // 删除单聊免打扰
    delSingleNoDisturb (disturbObj, success, error, timeout) {
        return this.callback(global.JIM.delSingleNoDisturb(disturbObj), success, error, timeout);
    }
    // 修改好友备注名
    updateFriendMemo(friendObj, success, error, timeout) {
        return this.callback(global.JIM.updateFriendMemo(friendObj), success, error, timeout);
    }
    // 上报单聊已读回执
    addSingleReceiptReport (msgObj, success, error, timeout) {
        return this.callback(global.JIM.addSingleReceiptReport(msgObj), success, error, timeout);
    }
    // 上报群聊已读回执
    addGroupReceiptReport(msgObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupReceiptReport(msgObj), success, error, timeout);
    }
    // 添加群成员禁言
    addGroupMemSilence(memberObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupMemSilence(memberObj), success, error, timeout);
    }
    // 删除群成员禁言
    delGroupMemSilence(memberObj, success, error, timeout) {
        return this.callback(global.JIM.delGroupMemSilence(memberObj), success, error, timeout);
    }
    // 获取群列表
    getGroups(success, error, timeout) {
        return this.callback(global.JIM.getGroups(), success, error, timeout);
    }
    // 拒绝好友请求
    declineFriend(friendObj, success, error, timeout) {
        return this.callback(global.JIM.declineFriend(friendObj), success, error, timeout);
    }
    // 同意好友请求
    acceptFriend(friendObj, success, error, timeout) {
        return this.callback(global.JIM.acceptFriend(friendObj), success, error, timeout);
    }
    // 同意或者拒绝入群请求
    addGroupMemberResp(memberObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupMemberResp(memberObj), success, error, timeout);
    }
    // 更新个人资料
    updateSelfInfo(selfInfoObj, success, error, timeout) {
        return this.callback(global.JIM.updateSelfInfo(selfInfoObj), success, error, timeout);
    }
    // 创建群组
    createGroup(groupObj, success, error, timeout) {
        return this.callback(global.JIM.createGroup(groupObj), success, error, timeout);
    }
    // 添加群成员
    addGroupMembers(memberObj, success, error, timeout) {
        return this.callback(global.JIM.addGroupMembers(memberObj), success, error, timeout);
    }
    // 修改密码
    updateSelfPwd(passwordObj, success, error, timeout) {
        return this.callback(global.JIM.updateSelfPwd(passwordObj), success, error, timeout);
    }
    // 获取黑名单
    getBlacks(success, error, timeout) {
        return this.callback(global.JIM.getBlacks(), success, error, timeout);
    }
    // 添加单聊黑名单
    addSingleBlacks(blackObj, success, error, timeout) {
        return this.callback(global.JIM.addSingleBlacks(blackObj), success, error, timeout);
    }
    // 退出群组
    exitGroup(groupObj, success, error, timeout) {
        return this.callback(global.JIM.exitGroup(groupObj), success, error, timeout);
    }
    // 删除群成员
    delGroupMembers(memberObj, success, error, timeout) {
        return this.callback(global.JIM.delGroupMembers(memberObj), success, error, timeout);
    }
    // 添加单聊免打扰
    addSingleNoDisturb(singleObj, success, error, timeout) {
        return this.callback(global.JIM.addSingleNoDisturb(singleObj), success, error, timeout);
    }
    // 删除好友
    delFriend(friendObj, success, error, timeout) {
        return this.callback(global.JIM.delFriend(friendObj), success, error, timeout);
    }
    // 获取聊天室资料
    getChatroomInfo(roomObj, success, error, timeout) {
        return this.callback(global.JIM.getChatroomInfo(roomObj), success, error, timeout);
    }
    // 加入群组
    joinGroup(groupObj, success, error, timeout) {
        return this.callback(global.JIM.joinGroup(groupObj), success, error, timeout);
    }
    // 更新个人头像
    updateSelfAvatar(selfObj, success, error, timeout) {
        return this.callback(global.JIM.updateSelfAvatar(selfObj), success, error, timeout);
    }
    // 获取本人所在聊天室列表
    getSelfChatrooms(success, error, timeout) {
        return this.callback(global.JIM.getSelfChatrooms(), success, error, timeout);
    }
    // 获取appkey下的聊天室
    getAppkeyChatrooms(roomObj, success, error, timeout) {
        return this.callback(global.JIM.getAppkeyChatrooms(roomObj), success, error, timeout);
    }
    // 进入聊天室
    enterChatroom(roomObj, success, error, timeout) {
        return this.callback(global.JIM.enterChatroom(roomObj), success, error, timeout);
    }
    // 退出聊天室
    exitChatroom(roomObj, success, error, timeout) {
        return this.callback(global.JIM.exitChatroom(roomObj), success, error, timeout);
    }
    // 发送透传消息
    transSingleMsg(msgObj, success, error, timeout) {
        return this.callback(global.JIM.transSingleMsg(msgObj), success, error, timeout);
    }
    // 查看未读列表
    msgUnreadList(msgObj, success, error, timeout) {
        return this.callback(global.JIM.msgUnreadList(msgObj), success, error, timeout);
    }
    // 发送聊天室文本消息
    sendChatroomMsg(msgObj, success, error, timeout) {
        return this.msgCallback(global.JIM.sendChatroomMsg(msgObj), success, error, timeout);
    }
    // 发送聊天室文件消息
    sendChatroomFile(fileObj, success, error, timeout) {
        return this.msgCallback(global.JIM.sendChatroomFile(fileObj), success, error, timeout);
    }
    // 发送聊天室图片
    sendChatroomPic(picObj, success, error, timeout) {
        return this.msgCallback(global.JIM.sendChatroomPic(picObj), success, error, timeout);
    }
    // 发送或者转发单聊文本
    sendSingleMsg(singleMsg, success, error, timeout) {
        return this.msgCallback(global.JIM.sendSingleMsg(singleMsg), success, error, timeout);
    }
    // 发送或者转发群聊文本
    sendGroupMsg(groupleMsg, success, error, timeout) {
        return this.msgCallback(global.JIM.sendGroupMsg(groupleMsg), success, error, timeout);
    }
    // 发送或者转发单聊图片
    sendSinglePic(singlePic, success, error, timeout) {
        return this.msgCallback(global.JIM.sendSinglePic(singlePic), success, error, timeout);
    }
    // 发送或者转发群聊图片
    sendGroupPic(groupPic, success, error, timeout) {
        return this.msgCallback(global.JIM.sendGroupPic(groupPic), success, error, timeout);
    }
    // 发送或者转发单聊文件
    sendSingleFile(singleFile, success, error, timeout) {
        return this.msgCallback(global.JIM.sendSingleFile(singleFile), success, error, timeout);
    }
    // 发送或者转发群聊文件
    sendGroupFile(groupFile, success, error, timeout) {
        return this.msgCallback(global.JIM.sendGroupFile(groupFile), success, error, timeout);
    }
    // 发送或者转发单聊位置
    sendSingleLocation (singleLocation, success, error, timeout) {
        return this.msgCallback(global.JIM.sendSingleLocation(singleLocation), success, error, timeout);
    }
    // 发送或者转发群聊位置
    sendGroupLocation (groupLocation, success, error, timeout) {
        return this.msgCallback(global.JIM.sendGroupLocation(groupLocation), success, error, timeout);
    }
    // 回调函数
    callback(obj, ...args) {
        return new Promise((resolve) => {
            if (obj && obj.onSuccess) {
                obj.onSuccess((successData) => {
                    if (successData.code) {
                        delete successData.code;
                    }
                    if (args[0] && args[0] instanceof Function) {
                        args[0](successData);
                    }
                    resolve(successData);
                }).onFail((errorData) => {
                    if (args[1] && args[1] instanceof Function) {
                        args[1](errorData);
                    }
                    resolve(errorData);
                }).onTimeout(() => {
                    if (args[2] && args[2] instanceof Function) {
                        args[2]();
                    }
                    resolve(timeoutData);
                });
            }
        });
    }
    // 发送消息回调函数
    msgCallback(obj, ...args) {
        return new Promise((resolve) => {
            if (obj && obj.onSuccess) {
                obj.onSuccess((successData, msgs) => {
                    if (successData.key) {
                        msgs.key = successData.key;
                    }
                    msgs.unread_count = successData.unread_count || 0;
                    if (args[0] && args[0] instanceof Function) {
                        args[0](msgs);
                    }
                    resolve(msgs);
                }).onFail((errorData) => {
                    if (args[1] && args[1] instanceof Function) {
                        args[1](errorData);
                    }
                    resolve(errorData);
                }).onTimeout(() => {
                    if (args[2] && args[2] instanceof Function) {
                        args[2]();
                    }
                    resolve(timeoutData);
                });
            }
        });
    }
}
const sdk = new ApiService();
export default sdk;