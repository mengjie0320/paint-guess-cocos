import { _decorator, Component, Node, Graphics, input, Input, EventMouse, UITransform, v3, v2, Vec2,Vec3, Camera } from 'cc';
const { ccclass, property, menu } = _decorator;

interface Position {
    x: number | null;
    y: number | null;
}

@ccclass('BrushController')
@menu('foo/bar')
export class BrushController extends Component {
    private lineWidth: number = 2;
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
        this.graphics.moveTo(-430, 0);
        this.graphics.lineTo(0, -320);
        this.graphics.lineTo(430, 0);
        this.graphics.lineTo(0, 320);
        this.graphics.lineTo(0, 0);
        this.graphics.close();
        this.graphics.stroke();

        // input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        // input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        // input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this.node);
        this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this.node);
        this.node.on(Node.EventType.MOUSE_UP, this.onMouseUp, this.node);
        // this.graphics.fill();
    }
    // start () {
    //     const g = this.getComponent(Graphics);
    //     g.lineWidth = 10;
    //     g.fillColor.fromHEX('#ff0000');
    //     g.moveTo(-40, 0);
    //     g.lineTo(0, -80);
    //     g.lineTo(40, 0);
    //     g.lineTo(0, 80);
    //     g.close();
    //     g.stroke();
    //     g.fill();
    // }

    // update(deltaTime: number) {
        
    // }

    onMouseDown(event: EventMouse) {
        event.propagationStopped = true;

        // console.log('brush', event.getLocation());  // Location on screen space
        // console.log('brush', event.getUILocation());  // Location on UI space
        let pos = event.getLocation();
        console.log('pos', pos);

        const camera = this.getComponent(Camera);
        const local = camera.convertToUINode(v3(pos.x, pos.y), this.graphics.node);
        console.log('local', local);
        // // console.log('camera', camera);
        // const cameraPos = camera.screenToWorld(v3(pos.x, pos.y));
        // // console.log('camera.screenToWorld()', camera.screenToWorld(cameraPos, v3(pos.x, pos.y)));
        // console.log('cameraPos', cameraPos); // 并无变化

        // const posMap = v3(0,0,0);
        // this.node.inverseTransformPoint(posMap, v3(cameraPos.x, cameraPos.y));
        // // console.log('brush event.target', event);
        // console.log('cameraPos -> posMap', posMap);

        // // const map: Node = event.target as Node;
        // const transform = this.getComponent(UITransform);
        // // console.log('transform', transform);
        // const out = transform.convertToNodeSpaceAR(v3(cameraPos.x, cameraPos.y, 0));
        // console.log('out', out);


        // const posMap = v3(0,0,0);
        // this.node.inverseTransformPoint(posMap, v3(pos.x, pos.y));
        // console.log('posMap', posMap);
        // console.log('brush event.target', event);


        // const transform = this.getComponent(UITransform);
        // const out = transform.convertToNodeSpaceAR(v3(pos.x, pos.y));
        // console.log('out', out);

        // let uiPos = event.getUILocation();
        // console.log('uiPos', uiPos);

        // console.log('transform.cameraPriority', transform.cameraPriority);
        // const out1 = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y));
        // console.log('out1', out1);



        // const newVec3 = this.node.uiTransform.convertToNodeSpaceAR(v3(100, 100, 0)); 
        // console.log('newVec3', newVec3);
        // const posInMap = this.node.convertToNodeSpaceAR(v2(pos.x, pos.y));
        // const posMap: Vec3 = v3(0,0,0);
        // const posInMap = this.node.inverseTransformPoint(posMap, v3(pos.x, pos.y, 0));
        // this.node.worldPosition;
        // this.node.inverseTransformPoint(p)
        // console.log('posMap', posMap);
        // console.log('posInMap', posInMap);
        // console.log('event.getUILocation()', event.getUILocation());
        // console.log('1 pos', pos);
        this.lastPos.x = pos.x;
        this.lastPos.y = pos.y;
        this.isPaint = true;
        // this.setBrushPos(pos.x, pos.y);
    }

    onMouseMove(event: EventMouse) {
        // console.log('this.isPaint', this.isPaint);
        if(!this.isPaint) return
        let pos = event.getLocation();
        // console.log('2 pos', pos);
        this.curPos.x = pos.x;
        this.curPos.y = pos.y;
        if (this.lastPos.x && this.lastPos.y) {
            this.setBrushPos(pos.x, pos.y);
        }
        if (this.curPos.x && this.curPos.y) {
            this.drawTo(pos.x, pos.y);
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
        // console.log('drawTo, x, y', x, y);
        // 从起始位置一直画到目标位置
        this.graphics.lineTo(x, y);
        this.graphics.stroke();
        // this.graphics.moveTo(x, y);
    }
}


