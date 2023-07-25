class ThighShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 180
        };

        this.size = {
            width: 40,
            height: 50
        };

        this.shapeType = {
            small : {
                DELTA_X_TOP_CP : 0.7,
            },
            middle : {
                DELTA_X_TOP_CP : 0.8
            },
            large : {
                DELTA_X_TOP_CP : 0.9
            }
        }
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        const { origin } = this;
        const { x, y } = this.origin;
        const { height, width } = this.size;

        const { DELTA_X_TOP_CP } = this.options;
        const DELTA_Y_TOP_CP = 0.5;

        const SHIFT_X_ORIGIN = width * 0.5;

        let leftThigh = {
            cpx: x - height * DELTA_X_TOP_CP,
            cpy: y + height * DELTA_Y_TOP_CP,
            x2: x - width,
            y2: y + height
        };

        curve.beginPath();

        curve.moveTo(x - SHIFT_X_ORIGIN, y);
        curve.drawCurve(leftThigh);

        curve.moveTo(x + SHIFT_X_ORIGIN, y);
        curve.drawSymmetricCurve(origin, leftThigh);

        curve.stroke();
    }

    eraseShape(curve) {
        const { x, y } = this.origin;
        const { height, width } = this.size;

        const squre = {
            x: x - width * 1.1,
            y,
            width: width * 2.2,
            height
        }

        curve.eraseSqure(squre);
    }
}

export { ThighShape };
