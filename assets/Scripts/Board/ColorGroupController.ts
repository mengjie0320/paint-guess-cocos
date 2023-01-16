import { _decorator, Component, Node } from 'cc';
import { eventTarget } from '../EventController';

const { ccclass, property } = _decorator;
const colorList = ['#FC2222', '#2130DF', '#F7A514', '#070706', '#31D823'];

@ccclass('ColorGroupController')
export class ColorGroupController extends Component {
    start() {
        console.log('this.node.children', this.node.children);
        // ['#FC2222', '#2130DF', '#F7A514', '#070706', '#31D823']
        this.node.children.forEach((item, index) => {
            item.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('setBrushColor', colorList[index]), item, true)
        })
        // this.node.on(Node.EventType.MOUSE_DOWN, () => eventTarget.emit('paintNormalClick'), this.node, true);
    }

    update(deltaTime: number) {
        
    }
}


