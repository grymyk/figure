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
        var DELTA_X_TOP_CP = this.options.DELTA_X_TOP_CP;
        const DELTA_Y_TOP_CP = 0.5;

        var SHIFT_X_ORIGIN = this.size.width * 0.5;

        let leftThigh = {};
        leftThigh.cpx = this.origin.x - this.size.height * DELTA_X_TOP_CP;
        leftThigh.cpy = this.origin.y + this.size.height * DELTA_Y_TOP_CP;
        leftThigh.x2 = this.origin.x - this.size.width;
        leftThigh.y2 = this.origin.y + this.size.height;

        curve.beginPath();

        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);
        curve.drawCurve(leftThigh);

        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);
        curve.drawSymmetricCurve(this.origin, leftThigh);

        curve.stroke();
    }

    eraseShape(curve) {
        let x = this.origin.x - this.size.width * 1.1;
        let y = this.origin.y;
        let width = this.size.width * 2.2;
        let height = this.size.height;

        curve.eraseSqure(x, y, width, height);
    }
}

export {ThighShape};
