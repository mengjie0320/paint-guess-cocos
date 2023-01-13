import { _decorator, Component, Node, input, Input, EventMouse, Graphics } from 'cc';
const { ccclass, property } = _decorator;
import { eventTarget } from '../EventController';

@ccclass('PaintController')
export class PaintController extends Component {

    private graphics: Graphics | null = null;

    init() {
      // this.graphics = this.getComponent(Graphics);
      // this.graphics.lineWidth = 5;
      // this.graphics.strokeColor.fromHEX('#000000');
      // this.graphics.fillColor.fromHEX('#cccccc');
      // this.graphics.circle(0, 0, 20);
      // this.graphics.stroke();

      // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this.node);
      this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this.node, true); // TODO-mj 总结 node节点注册事件
    }

    onMouseDown(event: EventMouse) {
      // event.propagationStopped = true;
      console.log('pen this.node', this.node); // TODO-mj ?
      eventTarget.emit('paintNormalClick');
    }

    update(deltaTime: number) {
        
    }
}


