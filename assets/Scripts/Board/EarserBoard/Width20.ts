import { _decorator, Component, Node } from 'cc';
import { eventTarget } from '../../EventController';

const { ccclass, property } = _decorator;

@ccclass('Width20')
export class Width20 extends Component {
    start() {
      this.node.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('setEarserWidth', { width: 20 }), this.node, true);
    }

    update(deltaTime: number) {
        
    }
}


