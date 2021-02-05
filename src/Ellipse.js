import GeneralFigure from "./GeneralFigure";

export default class Circle extends GeneralFigure {

    drawShape() {
        super.drawShape();
        this.graphics.drawEllipse(this.width / 2, 0, this.width / 2, this.height / 3);
        this.setArea();
        return this.graphics
    }

    setArea() {
        this.area = Math.PI * this.width / 2 * this.height / 3 >> 0;
    }
}
