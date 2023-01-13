import { _decorator, Component, Node, Color, input, Input, EventMouse, UITransform, v3, EventTarget  } from 'cc';
import { BrushController } from './BrushController';
import { eventTarget } from './EventController';
const { ccclass, property } = _decorator;

// import { log } from 'cc';
// import { DEV } from 'cc/env';

interface Position {
  x: number | null;
  y: number | null;
}


@ccclass('GameController')
export class GameController extends Component {

    private lineWidth: number = 1;                     // 笔刷粗细(默认1)
    private eraserWidth: number = 10;                  // 橡皮擦大小(特殊笔刷，默认10)
    private strokeColor: string = '#FFB400';           // 笔刷颜色(默认黑色)
    private tool: string = 'BRUSH';                    // 当前工具(默认笔刷)

    // 画线位置及状态
    private lastPos: Position = { x: null, y: null};
    private curPos: Position = { x: null, y: null};
    private isPaint: boolean = false;


    // 画板状态
    private isPen: boolean = true;
    private lastPenColor: string = '#000000';

    // 引用 BrushController
    @property({type: BrushController})
    public brushCtrl: BrushController | null = null;


    onLoad() {
        // 监听事件
        eventTarget.on('penClick', this.penClick, this);
    }
    
    start() {
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);

        // 设置game基本信息：笔画颜色、笔画大小
        this.brushCtrl.init(this.lineWidth, this.strokeColor);

        // eventTarget.emit('penClick');
    }

    

    penClick() {
      // penClick(event: EventMouse) {
        // event.propagationStopped = true;
        this.isPen = true;
        console.log('this.isPen', this.isPen);
        if(this.isPen) {
            // 重置画笔颜色
            this.brushCtrl.setBrushColor(this.lastPenColor);
        }
    }


    // 画线部分事件
    onMouseDown(event: EventMouse) {
      event.propagationStopped = true;

      // let wordpos = event.getLocation();
      // const camera = this.getComponent(Camera);
      // const local = camera.convertToUINode(v3(wordpos.x, wordpos.y), this.node);
      // console.log('local', local);

      let uiPos = event.getUILocation();
      const transform = this.getComponent(UITransform);
      const pos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));

      this.lastPos.x = pos.x;
      this.lastPos.y = pos.y;
      this.isPaint = true;
      this.brushCtrl.setBrushPos(pos.x, pos.y);
    }

    onMouseMove(event: EventMouse) {
        // console.log('this.isPaint', this.isPaint);
        if(!this.isPaint) return
        let uiPos = event.getUILocation();
        const transform = this.getComponent(UITransform);
        const pos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));

        this.curPos.x = pos.x;
        this.curPos.y = pos.y;

        if (this.curPos.x !== null && this.curPos.y !== null) {
            this.brushCtrl.drawTo(this.curPos.x, this.curPos.y);
            this.lastPos.x = this.curPos.x;
            this.lastPos.y = this.curPos.y;
        }
    }

    onMouseUp(event: EventMouse) {
        this.isPaint = false;
    }

    update(deltaTime: number) {
        
    }
}


