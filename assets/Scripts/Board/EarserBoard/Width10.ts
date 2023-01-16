import { _decorator, Component, Node } from 'cc';
import { eventTarget } from '../../EventController';

const { ccclass, property } = _decorator;

@ccclass('Width10')
export class Width10 extends Component {
    start() {
      this.node.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('setEarserWidth', { width: 10 }), this.node, true);
    }

    update(deltaTime: number) {
        
    }
}


