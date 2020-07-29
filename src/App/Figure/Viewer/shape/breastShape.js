class BreastShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 127
        };

        this.size = {
            width: 80,
            height: 20
        };

        this.shapeType = {
            small: {
                BeastSpace: false,
                DELTA_X_CP_TOP : 1.2,
                DELTA_Y_CP_TOP: 1
            },

            middle : {
                BeastSpace: true,
                DELTA_X_CP_TOP : 1.4,
                DELTA_Y_CP_TOP: 1.4
            },

            large : {
                BeastSpace: true,
                DELTA_X_CP_TOP : 1.6,
                DELTA_Y_CP_TOP: 1.6
            }
        };
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        let SHIFT_X_ORIGIN = this.size.width * 0.05;
        let SHIFT_Y_ORIGIN = this.size.height * 0.8;
        let DELTA_X_END_TOP = 0.35;
        let DELTA_X_CP_BOTTOM = 0.37;
        let DELTA_Y_CP_BOTTOM = 0.3;
        let DELTA_X_END_BOTTOM = 0.38;

        let beastSpace = this.options.BeastSpace;
        let DELTA_X_CP_TOP = this.options.DELTA_X_CP_TOP;
        let DELTA_Y_CP_TOP = this.options.DELTA_Y_CP_TOP;

        let leftBreast = {};
        leftBreast.cpx = this.origin.x - this.size.height * DELTA_X_CP_TOP;
        leftBreast.cpy = this.origin.y + this.size.height * DELTA_Y_CP_TOP;
        leftBreast.x2 = this.origin.x - this.size.width * DELTA_X_END_TOP;
        leftBreast.y2 = this.origin.y;

        let leftRib = {};
        leftRib.cpx = this.origin.x - this.size.width * DELTA_X_CP_BOTTOM;
        leftRib.cpy = this.origin.y + this.size.height * DELTA_Y_CP_BOTTOM;
        leftRib.x2 = this.origin.x - this.size.width * DELTA_X_END_BOTTOM;
        leftRib.y2 = this.origin.y + this.size.height;

        curve.beginPath();

        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y + SHIFT_Y_ORIGIN);

        curve.drawCurve(leftBreast);
        curve.drawCurve(leftRib);

        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y + SHIFT_Y_ORIGIN);

        curve.drawSymmetricCurve(this.origin, leftBreast);
        curve.drawSymmetricCurve(this.origin, leftRib);

        this.drawBeastSpace(beastSpace, curve);

        curve.stroke();
    }

    eraseShape(curve) {
        const DELTA_COOR = 0;
        const DELTA_SIZE = 4;

        let x = this.origin.x - this.size.width / 2 - DELTA_COOR;
        let y = this.origin.y - DELTA_COOR;
        let width = this.size.width;
        let height = this.size.height + DELTA_SIZE;

        curve.eraseSqure(x, y, width, height);
    }

    drawBeastSpace(isShow, curve) {
        if (isShow) {
            let leftX1 = this.origin.x - this.size.width * 0.05;
            let Y1 = this.origin.y + this.size.height * 0.05;

            curve.moveTo(leftX1, Y1);

            let leftCurve = {};
            leftCurve.cpx = this.origin.x;
            leftCurve.cpy = this.origin.y;
            leftCurve.x2 = this.origin.x - this.size.width * 0.02;
            leftCurve.y2 = this.origin.y + this.size.height * 0.3;

            curve.drawCurve(leftCurve);

            let rightX1 = this.origin.x + this.size.width * 0.05;

            curve.moveTo(rightX1, Y1);

            curve.drawSymmetricCurve(this.origin, leftCurve);
        }
    }
}

export {BreastShape};
