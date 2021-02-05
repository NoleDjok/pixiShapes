import GeneralFigure from "./GeneralFigure";

export default class Triangle extends GeneralFigure {

    drawShape() {
        super.drawShape();
        this.graphics.drawPolygon([
            0, 0, this.width, 0, 0, this.height,
        ]).endFill();
        this.setArea();
        return this.graphics
    }

    setArea() {
        this.area = this.height * this.width * 0.5 >> 0;
    }


}
