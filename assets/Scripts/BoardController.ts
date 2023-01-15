import { _decorator, Component, Node, Sprite, EventTarget, input, Input, EventMouse } from 'cc';
import { PaintController } from './Board/PaintController';
import { EraserBoardController } from './Board/EraserBoardController';
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

    @property({type: Node})
    public eraserBoard: Node | null = null;

    // // 引用 PaintController
    // @property({type: PaintController})
    // public paintCtrl: PaintController | null = null;

    // 引用 EraserBoardController
    @property({type: EraserBoardController})
    public eraserBoardCtrl: EraserBoardController | null = null;

    start() {
        if(this.paintClick) this.paintClick.enabled = false;
        if(this.eraserClick) this.eraserClick.enabled = false;
        // this.paintCtrl.init();
        this.eraserBoardCtrl.init();

        // TODO-mj event监听
    }

    eraserNormalClick(event) {
        event.propagationStopped = true;
        console.log('11', 11);
        // this.isPen = false;
        // console.log('eraser this.isPen', this.isPen);
    }

    paintNormalClick(event: EventMouse) {
        event.propagationStopped = true;
        // this.me
    }
    
    update(deltaTime: number) {
        
    }
}


