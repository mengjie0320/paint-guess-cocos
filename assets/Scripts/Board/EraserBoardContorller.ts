import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EraserBoardContorller')
export class EraserBoardContorller extends Component {

    private graphics: Graphics | null = null;

    start() {

        this.graphics = this.getComponent(Graphics);
        console.log('this.graphics', this.graphics);
        this.graphics.lineWidth = 1;
        this.graphics.strokeColor.fromHEX('#000000');
        this.graphics.fillColor.fromHEX('#370453');
        this.graphics.roundRect(-120, -15, 240, 32, 15);
        this.graphics.stroke();
        this.graphics.fill();
    }

    update(deltaTime: number) {
        
    }
}


