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
        let DELTA_X_TOP_CP = this.options.DELTA_X_TOP_CP;
        let DELTA_Y_TOP_CP = 0.7;
        let DELTA_X_TOP_END = this.options.DELTA_X_TOP_END;
        let DELTA_Y_TOP_END = 0.8;
        let DELTA_X_BOTTOM_CP = this.options.DELTA_X_BOTTOM_CP;
        let DELTA_Y_BOTTOM_CP = 0.9;
        let DELTA_X_BOTTOM_END = 0.35;

        let SHIFT_X_ORIGIN = this.size.width * 0.5;

        let leftTop = {};
        leftTop.cpx = this.origin.x - this.size.height * DELTA_X_TOP_CP;
        leftTop.cpy = this.origin.y + this.size.height * DELTA_Y_TOP_CP;
        leftTop.x2 = this.origin.x - this.size.width * DELTA_X_TOP_END;
        leftTop.y2 = this.origin.y + this.size.height * DELTA_Y_TOP_END;

        let leftBottom = {};
        leftBottom.cpx = this.origin.x - this.size.width * DELTA_X_BOTTOM_CP;
        leftBottom.cpy = this.origin.y + this.size.height * DELTA_Y_BOTTOM_CP;
        leftBottom.x2 = this.origin.x - this.size.width * DELTA_X_BOTTOM_END;
        leftBottom.y2 = this.origin.y + this.size.height;

        curve.beginPath();

        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);

        curve.drawCurve(leftTop);
        curve.drawCurve(leftBottom);

        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);

        curve.drawSymmetricCurve(this.origin, leftTop);
        curve.drawSymmetricCurve(this.origin, leftBottom);

        curve.stroke();
    }

    eraseShape(curve) {
        let x = this.origin.x - this.size.width * 0.55;
        let y = this.origin.y;
        let width = this.size.width * 1.1;
        let height = this.size.height;

        curve.eraseSqure(x, y, width, height);
    }
}

export {WaistShape};
