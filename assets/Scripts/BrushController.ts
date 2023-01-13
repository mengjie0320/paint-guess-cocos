import { _decorator, Component, Node, Graphics, input, Input, EventMouse, UITransform, v3, v2, Vec2,Vec3, Camera } from 'cc';
const { ccclass, property, menu } = _decorator;

interface Position {
    x: number | null;
    y: number | null;
}

@ccclass('BrushController')
// @menu('foo/bar') // TODO-mj 菜单备注验证
export class BrushController extends Component {
    // private lineWidth: number = 20;
    // private strokeColor: string = '#000000';
    // private fillColor: string = '#000000';
    public graphics: Graphics | null = null;

    init(lineWidth, strokeColor) {
        this.graphics = this.getComponent(Graphics);
        // console.log('this.graphics', this.graphics);
        this.setBrushLineWidth(lineWidth);
        this.setBrushColor(strokeColor);
        // this.graphics.moveTo(-430, 0);
        // this.graphics.lineTo(0, -320);
        // this.graphics.lineTo(430, 0);
        // this.graphics.lineTo(0, 320);
        // this.graphics.lineTo(0, 0);
        // this.graphics.close();
        // this.graphics.stroke();

        // input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        // input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        // this.graphics.fill();
    }

    // update(deltaTime: number) {
        
    // }


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
        this.graphics.circle(x, y, this.graphics.lineWidth * 0.5);
        this.graphics.lineTo(x, y);
        this.graphics.stroke();
        // this.graphics.moveTo(x, y);
    }
}


