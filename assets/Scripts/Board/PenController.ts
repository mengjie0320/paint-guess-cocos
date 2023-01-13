import { _decorator, Component, Node, input, Input, EventMouse, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
import { eventTarget } from '../EventController';

@ccclass('PenController')
export class PenController extends Component {

    start() {
      // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this.node, true);
      this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this.node); // TODO-mj 总结 node节点注册事件
    }

    onMouseDown(event: EventMouse) {
      event.propagationStopped = true;
      console.log('pen this.node', this.node); // TODO-mj ?
      eventTarget.emit('penClick');
    }

    update(deltaTime: number) {
        
    }
}


