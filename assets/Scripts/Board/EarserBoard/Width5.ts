import { _decorator, Component, Node, Graphics } from 'cc';
import { eventTarget } from '../../EventController';

const { ccclass, property } = _decorator;

@ccclass('Width5')
export class Width5 extends Component {
    private isClick: boolean = false;
    private g: Graphics | null = null;
    start() {
      this.g = this.getComponent(Graphics);
      // console.log('g', g);
      this.node.on(Node.EventType.MOUSE_DOWN, () => {
        this.isClick = !this.isClick;
        if(this.isClick) {
          // const g = this.getComponent(Graphics);
          console.log('g', this.g);
          this.g.lineWidth = 2;
          this.g.strokeColor.fromHEX('#ccc');
          // this.g.fillColor.fromHEX('#000000');
          this.g.circle(0, 0, 10);
          this.g.stroke();
        } else{
          this.g.clear();
        }
        eventTarget.emit('setEarserWidth', { width: 5 });
      }, this.node, true);
    }

    update(deltaTime: number) {
        
    }
}


