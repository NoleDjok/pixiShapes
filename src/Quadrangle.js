import GeneralFigure from "./GeneralFigure";

export default class Quadrangle extends GeneralFigure {

    drawShape() {
        super.drawShape();
        this.graphics.drawRect(0, 0, this.width, this.height).endFill();
        this.setArea();
        return this.graphics
    }

    setArea() {
        this.area = this.height * this.width >> 0;
    }

}
