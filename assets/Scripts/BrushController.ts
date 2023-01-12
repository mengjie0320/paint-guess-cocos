import { _decorator, Component, Node, Graphics, input, Input, EventMouse, UITransform, v3, v2, Vec2,Vec3, Camera } from 'cc';
const { ccclass, property, menu } = _decorator;

interface Position {
    x: number | null;
    y: number | null;
}

@ccclass('BrushController')
@menu('foo/bar')
export class BrushController extends Component {
    private lineWidth: number = 20;
    private strokeColor: string = '#000000';
    private fillColor: string = '#000000';
    public graphics: Graphics | null = null;

    private lastPos: Position = { x: null, y: null};
    private curPos: Position = { x: null, y: null};
    private isPaint: boolean = false;

    start() {
        this.graphics = this.getComponent(Graphics);
        console.log('this.graphics', this.graphics);
        this.setBrushLineWidth(this.lineWidth);
        this.setBrushColor(this.strokeColor);
        // this.graphics.moveTo(-430, 0);
        // this.graphics.lineTo(0, -320);
        // this.graphics.lineTo(430, 0);
        // this.graphics.lineTo(0, 320);
        // this.graphics.lineTo(0, 0);
        // this.graphics.close();
        // this.graphics.stroke();

        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        // this.graphics.fill();
    }

    // update(deltaTime: number) {
        
    // }

    onMouseDown(event: EventMouse) {
        event.propagationStopped = true;

        // let wordpos = event.getLocation();
        // const camera = this.getComponent(Camera);
        // const local = camera.convertToUINode(v3(wordpos.x, wordpos.y), this.node);
        // console.log('local', local);

        let uiPos = event.getUILocation();
        console.log('down uiPos', uiPos);
        const transform = this.getComponent(UITransform);
        // console.log('transform.cameraPriority', transform.cameraPriority);
        const pos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
        console.log('down pos', pos);

        this.lastPos.x = pos.x;
        this.lastPos.y = pos.y;
        this.isPaint = true;
        this.setBrushPos(pos.x, pos.y);
    }

    onMouseMove(event: EventMouse) {
        // console.log('this.isPaint', this.isPaint);
        if(!this.isPaint) return
        let uiPos = event.getUILocation();
        console.log('move uiPos', uiPos);
        const transform = this.getComponent(UITransform);
        // console.log('transform.cameraPriority', transform.cameraPriority);
        const pos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
        console.log('move pos', pos);

        this.curPos.x = pos.x;
        this.curPos.y = pos.y;
        // if (this.lastPos.x !== null && this.lastPos.y !== null) {
        //   console.log('this.lastPos', this.lastPos);
        //     this.setBrushPos(pos.x, pos.y);
        // }
        if (this.curPos.x !== null && this.curPos.y !== null) {
          console.log('this.curPos', this.curPos);
            this.drawTo(this.curPos.x, this.curPos.y);
            this.lastPos.x = this.curPos.x;
            this.lastPos.y = this.curPos.y;
        }
    }

    onMouseUp(event: EventMouse) {
        this.isPaint = false;
    }


    setBrushPos (x, y) {
        // console.log('setBrushPos, x, y', x, y);
        // 设置笔刷起始位置
        this.graphics.moveTo(x, y);
    }
    
    setBrushLineWidth(lineWidth) {
        // 设置笔刷粗细
        this.graphics.lineWidth = lineWidth;
    }

    setBrushColor(color) {
        // 设置笔刷颜色(包括边框颜色和填充颜色)
        this.graphics.strokeColor.fromHEX(color);
        this.graphics.fillColor.fromHEX(color);
    }

    drawTo (x, y) {
        this.graphics.circle(x, y, this.lineWidth * 0.5);
        this.graphics.lineTo(x, y);
        this.graphics.stroke();
        // this.graphics.moveTo(x, y);
    }
}


