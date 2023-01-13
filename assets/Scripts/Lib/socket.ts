
// import databus from "./databus";
// import Util from './util';
// import { getLocalText } from './langs';
// let { ws } = Util.getUrlParams();
// let SS:SokectServer;
// enum ActionType {
//   iota, 
//   ActHeartbeat,
//   ActReady,
//   ActLeaveRoom,
//   ActSyncFrame,
//   ActDoAction,
//   ActEndGame,
//   AckGetRoomInfo
// }


// let uid = null;
// if (ws) {
//   //测试用&ws=wss%3A%2F%2Fw-test.m8.group%2F%3Fsession%3DQRRdUcRodhBJ0YnC%26uid%3D123456
//   ws = decodeURIComponent(ws);
//   uid = Util.getUrlParams(ws).uid;
// } else { 
//   console.error("缺少soket链接");
// }
// // 我的信息一开始拿到,挂在uid链接上
// databus.myMemberInfo = { clientId: uid, nickName: '?', avatarUrl: '', gender: 0 }

// const fakeServer = { 
//   actionList: [],
//   localTimer: null,
//   framesId: 0,
//   send(msg) { 
//     let msgObj = JSON.parse(msg);
//     if (msgObj.action === 5) { 
//       let actions = JSON.parse(msgObj.extra).actionList;
//       fakeServer.actionList=fakeServer.actionList.concat(actions);
//     }
//   },
//   addEventListener(type,func) { 
//     if (type === "message") { 
//       fakeServer.localTimer && clearInterval(fakeServer.localTimer);
//       fakeServer.localTimer = setInterval(() => { 
//         // todo 待删除
//         databus.svrFrameId = fakeServer.framesId;
//         const struct = {
//           data: {
//             body: {
//               msg: '' as any,
//             },
//             act:3,
//             ret:0
//           } as any,
//         }
//         if (fakeServer.actionList.length > 0) {
//           // 有效
//           const msg = {
//             seq: fakeServer.framesId++,
//             Actions: [{ action: JSON.stringify({ actionList: fakeServer.actionList }) }]
//           }
//           struct.data.body.msg = JSON.stringify(msg);
//           struct.data = JSON.stringify(struct.data);
//           func(struct);
//         } else {
//           const res = {
//             req: fakeServer.framesId++,
//             actionList: [],
//           }
//           struct.data.body.msg = JSON.stringify(res);
//           struct.data = JSON.stringify(struct.data);
//           // 无效
//           func(struct);
//         }
//       },33)
//     }
//   }
// }
// class SokectServer {
//   messgeEventList = [];
//   server = null;
//   isOpen = false;
//   serverAddr = "wss://w-test.m8.group/";
//   uid:number;
//   receiveMessageFunc:Function;
//   reconnectCounter=0;
//   isReconnecting=false;
//   heartbeatTimer:any;
//   constructor({receiveMessageFunc}) {
//     this.receiveMessageFunc=receiveMessageFunc;
//     this.createServer();
//   }
//   // reconnetServer
//   reconnetServer(){
//     if(++this.reconnectCounter>3){
//       return false;
//     }
//     this.createServer();
//   }
//   //  创建服务
//   createServer() {
//     this.isOpen = false;
//     ws = ws || this.serverAddr;
//     this.server = new WebSocket(ws);
//     this.server.addEventListener('open', () => {
//       this.isOpen = true;
//       this.heartbeat();
//     });
//     this.handerReceiveMessage();
//     this.handerClose();
//     this.handerError();
//     // this.server = fakeServer;
//     // this.isOpen = true;// 配对fakeServer
//   }
//   onReady(callback) {
//     if (this.isOpen) {
//       callback();
//     } else {
//       this.server.addEventListener('open', () => {
//         this.isOpen = true;
//         callback();
//       });
//     }
//   }
//   // 心跳
//   heartbeat(){
//     this.heartbeatTimer && clearInterval(this.heartbeatTimer);
//     this.heartbeatTimer=setInterval(() => {
//       if (databus.isGameEnd) { 
//         clearInterval(this.heartbeatTimer)
//       }
//       const msg = {
//         "type": ActionType.ActHeartbeat,
//         "body": btoa("heartbeat")
//       }
//       console.log("心跳" + this.isOpen);
//       this.server.sendMessage(JSON.stringify(msg));
//     }, 1000)
//   }
//   // 发消息
//   sendMessage(msg) {
//     this.isOpen && this.server.send(msg);
//   }
//   // 收消息
//   handerReceiveMessage() {
//     this.server.addEventListener('message', (message) => {
//       this.receiveMessageFunc(message)
//     })
//   }
//   // 关闭了消息流
//   handerClose() {
//     this.server.addEventListener('close', (event) => {
//       console.error("监听到关闭链接");
//       this.isOpen = false;
//       // todo 处理异常，比如心跳返回异常了，比如toast
//       // 启动重链
//       // this.reconnetServer();
//     })
//   }
//   handerError() {
//     // 其他错误
//     this.server.addEventListener('error', (event) => {
//       console.error("监听到链接错误");
//       this.isOpen = false;
//       // Util.showToast({
//       //   title: getLocalText("gameDisconnected")
//       // })
//       // todo 处理异常，比如toast
//       // 启动重链
//       // this.reconnetServer();
//     })
//   }
//   close() {
//     console.error("关闭链接");
//     this.server.close();
//     this.isOpen = false;
//   }
//   // todo 如何重连
// }

// export default function createSokectServer({receiveMessageFunc}){
//   SS=new SokectServer({receiveMessageFunc});
//   return SS;
// }
