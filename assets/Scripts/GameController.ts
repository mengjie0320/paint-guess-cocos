import { _decorator, Component, Node, Color, input, Input, EventMouse } from 'cc';
import { BrushController } from './BrushController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    private lineWidth: number = 1;                     // 笔刷粗细(默认1)
    private eraserWidth: number = 10;                  // 橡皮擦大小(特殊笔刷，默认10)
    private color = Color.BLACK;            // 笔刷颜色(默认黑色)
    private tool: string = 'BRUSH';                    // 当前工具(默认笔刷)

    // 引用PlayerController
    @property({type: BrushController})
    public brushCtrl: BrushController | null = null;
    
    start() {
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    onMouseDown(event: EventMouse) {
        let pos = event.getLocation();
        console.log('1 pos', pos);
        this.brushCtrl?.setBrushPos(pos.x, pos.y);
    }

    onMouseUp(event: EventMouse) {
        let pos = event.getLocation();
        console.log('2 pos', pos);
        this.brushCtrl?.drawTo(pos.x, pos.y);
    }



    update(deltaTime: number) {
        
    }
}


