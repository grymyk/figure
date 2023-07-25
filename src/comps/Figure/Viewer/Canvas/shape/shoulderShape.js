class ShoulderShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 77
        };

        this.size = {
            width: 80,
            height: 50
        };

        this.shapeType = {
            tight : {
                LEFT_SHOULDER_BOTTOM_CP_X : 0.55,
                DELTA_X_BOTTOM : 0.3,
            },
            normal : {
                LEFT_SHOULDER_BOTTOM_CP_X : 0.6,
                DELTA_X_BOTTOM : 0.4,
            },
            wide : {
                LEFT_SHOULDER_BOTTOM_CP_X : 0.65,
                DELTA_X_BOTTOM : 0.4,
            }
        };
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        const {
            DELTA_X_BOTTOM,
            LEFT_SHOULDER_BOTTOM_CP_X
        } = this.options;

        const { height, width } = this.size;
        const { origin } = this;
        const { x, y } = this.origin;

        // let DELTA_ORIGIN_X = this.options.DELTA_ORIGIN_X;
        let DELTA_X_TOP = 0.1;
        let DELTA_Y_TOP = 0.3;
        let DELTA_Y_BOTTOM = 0.3;

        let SHIFT_X_ORIGIN = width * 0.08;

        let leftShoulderTop = {
            cpx: x - height * DELTA_X_TOP,
            cpy: y + height * DELTA_Y_TOP,
            x2: x - width * DELTA_X_BOTTOM,
            y2: y + height * DELTA_Y_BOTTOM
        };


        let leftShoulderBottom = {
            cpx: x - width * LEFT_SHOULDER_BOTTOM_CP_X,
            cpy: y + height * 0.33,
            x2: x - width * 0.7,
            y2: y + height * 2
        };

        let leftPrearm = {
            cpx: x - width * 0.85,
            cpy: y + height * 2.55,
            x2: x - width * 0.85,
            y2: y + height * 3.3
        };

        let leftHand = {
            cpx: x - width * 1.1,
            cpy: y + height * 4,
            x2: x - width * 0.9,
            y2: y + height * 4
        };

        let rightHand = {
            cpx: x - width * 0.7,
            cpy: y + height * 3.8,
            x2: x - width * 0.75,
            y2: y + height * 3.3
        };

        let rightPrearm = {
            cpx: x - width * 0.6,
            cpy: y + height * 2.6,
            x2: x - width * 0.55,
            y2: y + height * 2
        };

        let rightShoulderBottom = {
            cpx: x - width * 0.38,
            cpy: y + height * 1.4,
            x2: x - width * 0.4,
            y2: y + height * 1.4
        };

        curve.beginPath();

        curve.moveTo(x - SHIFT_X_ORIGIN, y);

        curve.drawCurve(leftShoulderTop);
        curve.drawCurve(leftShoulderBottom);
        curve.drawCurve(leftPrearm);
        curve.drawCurve(leftHand);
        curve.drawCurve(rightHand);
        curve.drawCurve(rightPrearm);
        curve.drawCurve(rightShoulderBottom);

        curve.moveTo(x + SHIFT_X_ORIGIN, y);

        curve.drawSymmetricCurve(origin, leftShoulderTop);
        curve.drawSymmetricCurve(origin, leftShoulderBottom);
        curve.drawSymmetricCurve(origin, leftPrearm);
        curve.drawSymmetricCurve(origin, leftHand);
        curve.drawSymmetricCurve(origin, rightHand);
        curve.drawSymmetricCurve(origin, rightPrearm);
        curve.drawSymmetricCurve(origin, rightShoulderBottom);

        curve.stroke();
    }

    eraseShape(curve) {
        const { origin } = this;
        const { x, y } = this.origin;
        const { height, width } = this.size;

        const shoulder = {
            x: x - width * 0.65,
            y,
            width: width * 1.3,
            height
        };

        curve.eraseSqure(shoulder);

        const armSquareTop = {
            x: x - width,
            y: y + height * 0.75,
            width: width * 0.6,
            height: height * 1.6
        };

        curve.eraseSqure(armSquareTop);

        curve.eraseSymmetricSqure(origin, armSquareTop);

        const armSquareBottom = {
            x: x - width,
            y: y + height * 2.3,
            width: width * 0.5,
            height: height * 1.8
        };

        curve.eraseSqure(armSquareBottom);
        curve.eraseSymmetricSqure(origin, armSquareBottom);
    }
}

export { ShoulderShape };
