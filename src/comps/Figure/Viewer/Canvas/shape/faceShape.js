class FaceShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 25
        };

        this.size = {
            width : 40,
            height : 50
        };

        this.shapeType = {
            rect: {
                HEIGHT_FACTOR : 0.5,
                DELTA_X_TOP : 0.5,
                DELTA_Y_TOP : 0.05,
                DELTA_X_BOTTON : 0.5,
                DELTA_Y_BOTTON : 1
            },
            heart : {
                HEIGHT_FACTOR : 0.5,
                DELTA_X_TOP : 0.5,
                DELTA_Y_TOP : 0.05,
                DELTA_X_BOTTON : 0.35,
                DELTA_Y_BOTTON : 0.95
            },
            oval: {
                HEIGHT_FACTOR : 0.5,
                DELTA_X_TOP : 0.45,
                DELTA_Y_TOP : 0.05,
                DELTA_X_BOTTON : 0.45,
                DELTA_Y_BOTTON : 0.95
            },
            round : {
                HEIGHT_FACTOR : 0.5,
                DELTA_X_TOP : 0.5,
                DELTA_Y_TOP : 0.05,
                DELTA_X_BOTTON : 0.5,
                DELTA_Y_BOTTON : 0.95
            }
        };
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        const { options, origin } = this;
        const { x, y } = origin;
        const { height, width } = this.size;

        const {
            DELTA_X_BOTTON, DELTA_X_TOP, DELTA_Y_BOTTON,
            DELTA_Y_TOP, HEIGHT_FACTOR
        } = options;

        const X = x - width * DELTA_X_TOP;

        const leftTopCurve = {
            cpx: X,
            cpy: y + height * DELTA_Y_TOP,
            x2: X,
            y2: y + height * HEIGHT_FACTOR
        };

        const leftBottomCurve = {
            cpx: x - width * DELTA_X_BOTTON,
            cpy: y + height * DELTA_Y_BOTTON,
            x2: x,
            y2: y + height
        };

        curve.beginPath();

        curve.moveTo(x, y);
        curve.drawCurve(leftTopCurve);
        curve.drawCurve(leftBottomCurve);

        curve.moveTo(x, y);
        curve.drawSymmetricCurve(origin, leftTopCurve);
        curve.drawSymmetricCurve(origin, leftBottomCurve);

        curve.stroke();
    }

    eraseShape(curve) {
        const DELTA_COOR = 2;
        const DELTA_SIZE = 4;

        const { x, y } = this.origin;
        const { height, width } = this.size;

        const squre = {
            x: x - width / 2 - DELTA_COOR,
            y: y - DELTA_COOR,
            width: width + DELTA_SIZE,
            height: height + DELTA_SIZE

        };

        curve.eraseSqure(squre);
    }
}

export {FaceShape};
