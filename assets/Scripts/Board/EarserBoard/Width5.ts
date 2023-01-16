import { _decorator, Component, Node } from 'cc';
import { eventTarget } from '../../EventController';

const { ccclass, property } = _decorator;

@ccclass('Width5')
export class Width5 extends Component {
    start() {
      this.node.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('setEarserWidth', { width: 5 }), this.node, true);
    }

    update(deltaTime: number) {
        
    }
}


