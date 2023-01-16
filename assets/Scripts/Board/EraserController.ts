import { _decorator, Component, Node, Graphics, EventMouse } from 'cc';
import { eventTarget } from '../EventController';
const { ccclass, property } = _decorator;

@ccclass('EraserController')
export class EraserController extends Component {

    private isEarser: boolean = false;

    start() {
        // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this.node);
        this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this.node, true); // TODO-mj 总结 node节点注册事件
      }
  
      onMouseDown(event: EventMouse) {
        // event.propagationStopped = true;
        this.isEarser = !this.isEarser;
        console.log('eraser this.node', this.node); // TODO-mj ?
        eventTarget.emit('eraserNormalClick', { isEarser: this.isEarser });
      }

    update(deltaTime: number) {
        
    }
}


