import { _decorator, Component, Node, Sprite, EventTarget, input, Input, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

enum PaintState {
    Per,
    Eraser
}

@ccclass('BoardController')
export class BoardController extends Component {

    private isPen: boolean = true; // pen or eraser
    // private PaintClick:

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
        this.paintClick.enabled = false;
        this.eraserClick.enabled = false;
        // const eventTarget = new EventTarget();
        // eventTarget.on(MOUSe)
        input.on(Input.EventType.MOUSE_UP, this.penClick, this.pen.node);
    }

    penClick(event) {
        event.propagationStopped = true;
        this.isPen = !this.isPen;
        console.log('this.isPen', this.isPen);
        if(this.isPen) {
            // TODO-mj 传递color颜色

        }
    }
    

    update(deltaTime: number) {
        
    }
}


