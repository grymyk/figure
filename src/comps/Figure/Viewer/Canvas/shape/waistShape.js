class WaistShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 150
        };

        this.size = {
            width: 58,
            height: 30
        };

        this.shapeType = {
            small : {
                DELTA_X_TOP_CP : 0.7,
                DELTA_X_TOP_END : 0.3,
                DELTA_X_BOTTOM_CP : 0.3
            },

            middle : {
                DELTA_X_TOP_CP : 0.8,
                DELTA_X_TOP_END : 0.4,
                DELTA_X_BOTTOM_CP : 0.35
            },

            large : {
                DELTA_X_TOP_CP : 0.9,
                DELTA_X_TOP_END : 0.4,
                DELTA_X_BOTTOM_CP : 0.4
            }
        }
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        const {
            DELTA_X_TOP_CP, DELTA_X_TOP_END, DELTA_X_BOTTOM_CP }
        = this.options;

        const { height, width } = this.size;
        const { origin } = this;
        const { x, y } = this.origin;

        const DELTA_Y_TOP_CP = 0.7;
        const DELTA_Y_TOP_END = 0.8;
        const DELTA_Y_BOTTOM_CP = 0.9;
        const DELTA_X_BOTTOM_END = 0.35;

        const SHIFT_X_ORIGIN = width * 0.5;

        const leftTop = {};
        leftTop.cpx = x - height * DELTA_X_TOP_CP;
        leftTop.cpy = y + height * DELTA_Y_TOP_CP;
        leftTop.x2 = x - width * DELTA_X_TOP_END;
        leftTop.y2 = y + height * DELTA_Y_TOP_END;

        const leftBottom = {};
        leftBottom.cpx = x - width * DELTA_X_BOTTOM_CP;
        leftBottom.cpy = y + height * DELTA_Y_BOTTOM_CP;
        leftBottom.x2 = x - width * DELTA_X_BOTTOM_END;
        leftBottom.y2 = y + height;

        curve.beginPath();

        curve.moveTo(x - SHIFT_X_ORIGIN, y);

        curve.drawCurve(leftTop);
        curve.drawCurve(leftBottom);

        curve.moveTo(x + SHIFT_X_ORIGIN, y);

        curve.drawSymmetricCurve(origin, leftTop);
        curve.drawSymmetricCurve(origin, leftBottom);

        curve.stroke();
    }

    eraseShape(curve) {
        const { x, y } = this.origin;
        const { height, width } = this.size;

        const squre = {
            x: x - width * 0.55,
            y,
            width: width * 1.1,
            height
        };

        curve.eraseSqure(squre);
    }
}

export {WaistShape};
