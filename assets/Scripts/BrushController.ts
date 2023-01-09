import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BrushController')
export class BrushController extends Component {
    private lineWidth: number = 1;
    private strokeColor: string = '#ccc';
    private fillColor: string = '#ccc';
    start() {
        // this.node.getComponent(Graphics);
    }

    // update(deltaTime: number) {
        
    // }


    setBrushPos (x, y) {
        // 设置笔刷起始位置
        this.moveTo(x, y);
    }
    moveTo(x: any, y: any) {
        throw new Error('Method not implemented.');
    }

    setBrushLineWidth(lineWidth) {
        // 设置笔刷粗细
        this.lineWidth = lineWidth;
    }

    setBrushColor(color) {
        // 设置笔刷颜色(包括边框颜色和填充颜色)
        this.strokeColor = color;
        this.fillColor = color;
    }

    drawTo (x, y) {
        // 从起始位置一直画到目标位置
        this.lineTo(x, y);
        this.stroke();
        this.moveTo(x, y);
    }
    lineTo(x: any, y: any) {
        throw new Error('Method not implemented.');
    }
    stroke() {
        throw new Error('Method not implemented.');
    }
}


