import { _decorator, Component, Node, Color, input, Input, EventMouse } from 'cc';
import { BrushController } from './BrushController';
const { ccclass, property } = _decorator;

// interface Position {
//     x: number | null;
//     y: number | null;
// }

@ccclass('GameController')
export class GameController extends Component {

    private lineWidth: number = 1;                     // 笔刷粗细(默认1)
    private eraserWidth: number = 10;                  // 橡皮擦大小(特殊笔刷，默认10)
    private color = Color.BLACK;            // 笔刷颜色(默认黑色)
    private tool: string = 'BRUSH';                    // 当前工具(默认笔刷)

    // private lastPos: Position = { x: null, y: null};
    // private curPos: Position = { x: null, y: null};
    // private isPaint: boolean = false;

    // 引用 BrushController
    @property({type: BrushController})
    public brushCtrl: BrushController | null = null;
    
    start() {
        // input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        // input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    onMouseDown(event: EventMouse) {
        let pos = event.getLocation();
        console.log('game event.target', event);

        // console.log('event.getUILocation()', event.getUILocation());
        // console.log('1 pos', pos);
        // this.lastPos.x = pos.x;
        // this.lastPos.y = pos.y;
        // this.isPaint = true;
        // this.brushCtrl?.setBrushPos(pos.x, pos.y);
    }

    // onMouseMove(event: EventMouse) {
    //     console.log('this.isPaint', this.isPaint);
    //     if(!this.isPaint) return
    //     let pos = event.getLocation();
    //     console.log('2 pos', pos);
    //     this.curPos.x = pos.x;
    //     this.curPos.y = pos.y;
    //     if (this.lastPos.x && this.lastPos.y) {
    //         this.brushCtrl?.setBrushPos(pos.x, pos.y);
    //     }
    //     if (this.curPos.x && this.curPos.y) {
    //         this.brushCtrl?.drawTo(pos.x, pos.y);
    //         this.lastPos.x = this.curPos.x;
    //         this.lastPos.y = this.curPos.y;
    //     }
    // }

    // onMouseUp(event: EventMouse) {
    //     this.isPaint = false;
    // }

    update(deltaTime: number) {
        
    }
}


