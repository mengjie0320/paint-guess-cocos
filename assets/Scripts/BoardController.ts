import { _decorator, Component, Node, Sprite, EventTarget, input, Input, EventMouse } from 'cc';
import { PaintController } from './Board/PaintController';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

@ccclass('BoardController')
export class BoardController extends Component {

    // 引用 其他图片组件
    @property({type: Sprite})
    public pen: Sprite | null = null;
    @property({type: Sprite})
    public paint: Sprite | null = null;
    @property({type: Sprite})
    public paintClick: Sprite | null = null;
    @property({type: Sprite})
    public eraser: Sprite | null = null;
    @property({type: Sprite})
    public eraserClick: Sprite | null = null;

    // // 引用 PaintController
    // @property({type: PaintController})
    // public paintCtrl: PaintController | null = null;

    start() {
        if(this.paintClick) this.paintClick.enabled = false;
        if(this.eraserClick) this.eraserClick.enabled = false;
        // this.paintCtrl.init();

        // TODO-mj event监听
    }

    // eraserNormalClick(event) {
    //     event.propagationStopped = true;
    //     this.isPen = !this.isPen;
    //     console.log('eraser this.isPen', this.isPen);
    // }

    paintNormalClick(event: EventMouse) {
        event.propagationStopped = true;
        // this.me
    }
    
    update(deltaTime: number) {
        
    }
}


