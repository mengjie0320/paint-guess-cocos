// import { _decorator, Component, Node, EventTarget } from 'cc';
// const { ccclass, property } = _decorator;

// @ccclass('EventController')
// export class EventController {
//   private static _instance: EventTarget;
//   public static get instance() {
//     if (null == this._instance) {
//       this._instance = new EventTarget();
//     }
//     return this._instance;
//   }
// }


import { _decorator, EventTarget } from 'cc';
export const eventTarget = new EventTarget();

// @ccclass('EventController')
// export class EventController {
//   @property
//   private _eventTarget = eventTarget;

//   @property
//   get eventTarget() {
//     return this.eventTarget
//   }

//   // @property
//   set eventTarget(eT) {
//     this.eventTarget = eT
//   }
// }


