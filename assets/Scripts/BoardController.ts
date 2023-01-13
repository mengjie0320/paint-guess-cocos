import { _decorator, Component, Node, Sprite, EventTarget, input, Input, EventMouse } from 'cc';
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

    start() {
        if(this.paintClick) this.paintClick.enabled = false;
        if(this.eraserClick) this.eraserClick.enabled = false;
        // const eventTarget = new EventTarget();
        // eventTarget.on(MOUSe)
        // if(this.pen) input.on(Input.EventType.MOUSE_UP, this.penClick, this.pen.node);
        // if(this.eraser) input.on(Input.EventType.MOUSE_UP, this.eraserNormalClick, this.eraser.node);
    }

    // eraserNormalClick(event) {
    //     event.propagationStopped = true;
    //     this.isPen = !this.isPen;
    //     console.log('eraser this.isPen', this.isPen);
    // }
    

    update(deltaTime: number) {
        
    }
}


