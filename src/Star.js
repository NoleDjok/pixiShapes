import GeneralFigure from "./GeneralFigure";

export default class Star extends GeneralFigure {

    drawShape() {
        super.drawShape();
        this.graphics.lineStyle(2, 0xFFFFFF);
        this.graphics.beginFill(0x35CC5A, 1);
        this.graphics.drawStar(0, 0, 5, 65);
        this.graphics.endFill();
        this.area = 4320;
        return this.graphics
    }


}
