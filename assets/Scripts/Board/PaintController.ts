import { _decorator, Component, Node, input, Input, EventMouse, Graphics } from 'cc';
import { eventTarget } from '../EventController';

const { ccclass, property } = _decorator;


@ccclass('PaintController')
export class PaintController extends Component {

    start() {
      this.node.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('paintNormalClick'), this.node, true);
    }

    // onMouseDown(event: EventMouse) {
    //   // event.propagationStopped = true;
    //   this.isPaint = !this.isPaint;
    //   console.log('paint this.node', this.isPaint); // TODO-mj ?
    //   eventTarget.emit('paintNormalClick', { isPaint: this.isPaint});
    // }

    update(deltaTime: number) {
        
    }
}


