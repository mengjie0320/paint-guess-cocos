import { _decorator, Component, Node, Sprite, EventTarget, input, Input, EventMouse } from 'cc';
import { PaintController } from './Board/PaintController';
import { eventTarget } from './EventController';

const { ccclass, property } = _decorator;


@ccclass('BoardController')
export class BoardController extends Component {

    // 笔刷信息
    private lineWidth: number = 20;                     // 笔刷粗细(默认1)
    private eraserWidth: number = 10;                  // 橡皮擦大小(特殊笔刷，默认10)
    private strokeColor: string = '#FFB400';           // 笔刷颜色(默认黑色)
    private tool: string = 'BRUSH';                    // 当前工具(默认笔刷)

    // 画板状态
    private isPen: boolean = true;
    private isColor: boolean = false;
    private isEarser: boolean = false;
    private lastPenColor: string = '#000000';

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
    public colorGroup: Node | null = null;
    @property({type: Node})
    public eraserBoard: Node | null = null;


    onLoad() {
        // 监听事件
        eventTarget.on('penClick', this.penClick, this);
        eventTarget.on('paintNormalClick', this.paintNormalClick, this);
        eventTarget.on('eraserNormalClick', this.eraserNormalClick, this);
        eventTarget.on('setEarserWidth', this.setEarserWidth, this);
    }

    start() {

        this.init();
        // TODO-mj event监听

    }

    init() {
        this.setColorClick(true);
        this.setEraserClick(true);
        // Node上无enabled属性  enable vs active
    }

    // 重置选色模块
    setColorClick(state) {
        this.paint.enabled = state;
        this.colorGroup.active = !state;
        this.paintClick.enabled = !state;
        this.isColor = !state;
    }

    // 重置橡皮擦部分
    setEraserClick(state) {
        this.eraser.enabled = state;
        this.eraserBoard.active = !state;
        this.eraserClick.enabled = !state;
        this.isEarser = !state;
    }

    // Board控制面板
    penClick() {
      // penClick(event: EventMouse) {
        // event.propagationStopped = true;
        this.isPen = true;
        console.log('this.isPen', this.isPen);
        if(this.isPen) {
            // 重置画笔颜色
            eventTarget.emit('setBrushColor', this.lastPenColor);
            this.setColorClick(true);
            this.setEraserClick(true);
        }
    }

    paintNormalClick(color) {
        this.isColor = !this.isColor;
        console.log('paintNormal this.isColor', this.isColor );
        this.setColorClick(!this.isColor);
        this.setEraserClick(true);
    }

    eraserNormalClick() {
        this.isEarser = !this.isEarser;
        console.log('eraserNormalClick this.isEarser',  this.isEarser);
        this.setEraserClick(!this.isEarser);
        this.setColorClick(true);
   }

    setEarserWidth({ width }) {
       console.log('setEarserWidth event', event);
      //  this.eraserBoard.active = true;
        // this.lineWidth = width;
        if (this.isPen) {
          this.lastPenColor = this.strokeColor;
          eventTarget.emit('setBrushColor', '#ffffff');
          this.isPen = false;
        }
        eventTarget.emit('setBrushLineWidth', width);
    }

    setBoardColor(color) {
        this.strokeColor = color;
        eventTarget.emit('setBrushColor', color);
    }
    
    update(deltaTime: number) {
        
    }
}


