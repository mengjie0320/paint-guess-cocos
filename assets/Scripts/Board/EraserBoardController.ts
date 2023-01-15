import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EraserBoardController')
export class EraserBoardController extends Component {

    public graphics: Graphics | null = null;

    init() {
        this.graphics = this.getComponent(Graphics);
        console.log('this.graphics', this.graphics);
        this.graphics.strokeColor.fromHEX('#000000');
        this.graphics.fillColor.fromHEX('#370453');
        this.graphics.moveTo(0, 13);
        this.graphics.lineTo(-90, 13);
        this.graphics.quadraticCurveTo(-118, 0, -90, -13);
        this.graphics.lineTo(90, -13);
        this.graphics.quadraticCurveTo(118, 0, 90, 13);
        // this.graphics.lineTo(0, 320);
        // this.graphics.lineTo(0, 0);
        this.graphics.close();
        this.graphics.stroke();
        this.graphics.fill();
    }


    update(deltaTime: number) {
        
    }
}


