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
        const { origin } = this;
        const { x, y } = origin;
        const { height, width } = this.size;
        const { DELTA_X_CP_TOP, DELTA_Y_CP_TOP } = this.options;

        const SHIFT_X_ORIGIN = width * 0.05;
        const SHIFT_Y_ORIGIN = height * 0.8;
        const DELTA_X_END_TOP = 0.35;
        const DELTA_X_CP_BOTTOM = 0.37;
        const DELTA_Y_CP_BOTTOM = 0.3;
        const DELTA_X_END_BOTTOM = 0.38;

        const beastSpace = this.options.BeastSpace;

        const leftBreast = {
            cpx: x - height * DELTA_X_CP_TOP,
            cpy: y + height * DELTA_Y_CP_TOP,
            x2: x - width * DELTA_X_END_TOP,
            y2: y,
        };

        const leftRib = {
            cpx: x - width * DELTA_X_CP_BOTTOM,
            cpy: y + height * DELTA_Y_CP_BOTTOM,
            x2: x - width * DELTA_X_END_BOTTOM,
            y2: y + height
        };

        curve.beginPath();

        curve.moveTo(x - SHIFT_X_ORIGIN, y + SHIFT_Y_ORIGIN);

        curve.drawCurve(leftBreast);
        curve.drawCurve(leftRib);

        curve.moveTo(x + SHIFT_X_ORIGIN, y + SHIFT_Y_ORIGIN);

        curve.drawSymmetricCurve(origin, leftBreast);
        curve.drawSymmetricCurve(origin, leftRib);

        this.drawBeastSpace(beastSpace, curve);

        curve.stroke();
    }

    eraseShape(curve) {
        const DELTA_COOR = 0;
        const DELTA_SIZE = 4;

        const { x, y } = this.origin;
        const { height, width } = this.size;

        const squre = {
            x: x - width / 2 - DELTA_COOR,
            y: y - DELTA_COOR,
            width,
            height: height + DELTA_SIZE
        };

        curve.eraseSqure(squre);
    }

    drawBeastSpace(isShow, curve) {
        const { origin, size } = this;

        if (isShow) {
            const leftX1 = origin.x - size.width * 0.05;
            const Y1 = origin.y + size.height * 0.05;

            curve.moveTo(leftX1, Y1);

            const leftCurve = {
                cpx: origin.x,
                cpy: origin.y,
                x2: origin.x - size.width * 0.02,
                y2: origin.y + size.height * 0.3
            };

            curve.drawCurve(leftCurve);

            const rightX1 = origin.x + size.width * 0.05;

            curve.moveTo(rightX1, Y1);

            curve.drawSymmetricCurve(origin, leftCurve);
        }
    }
}

export { BreastShape };
