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
        let LEFT_SHOULDER_BOTTOM_CP_X = this.options.LEFT_SHOULDER_BOTTOM_CP_X;
        // let DELTA_ORIGIN_X = this.options.DELTA_ORIGIN_X;
        let DELTA_X_TOP = 0.1;
        let DELTA_X_BOTTOM = this.options.DELTA_X_BOTTOM;
        let DELTA_Y_TOP = 0.3;
        let DELTA_Y_BOTTOM = 0.3;

        let SHIFT_X_ORIGIN = this.size.width * 0.08;

        let leftShoulderTop = {};
        leftShoulderTop.cpx = this.origin.x - this.size.height * DELTA_X_TOP;
        leftShoulderTop.cpy = this.origin.y + this.size.height * DELTA_Y_TOP;
        leftShoulderTop.x2 = this.origin.x - this.size.width * DELTA_X_BOTTOM;
        leftShoulderTop.y2 = this.origin.y + this.size.height * DELTA_Y_BOTTOM;

        let leftShoulderBottom = {};
        leftShoulderBottom.cpx = this.origin.x - this.size.width * LEFT_SHOULDER_BOTTOM_CP_X;
        leftShoulderBottom.cpy = this.origin.y + this.size.height * 0.33;
        leftShoulderBottom.x2 = this.origin.x - this.size.width * 0.7;
        leftShoulderBottom.y2 = this.origin.y + this.size.height * 2;

        let leftPrearm = {};
        leftPrearm.cpx = this.origin.x - this.size.width * 0.85;
        leftPrearm.cpy = this.origin.y + this.size.height * 2.55;
        leftPrearm.x2 = this.origin.x - this.size.width * 0.85;
        leftPrearm.y2 = this.origin.y + this.size.height * 3.3;

        let leftHand = {};
        leftHand.cpx = this.origin.x - this.size.width * 1.1;
        leftHand.cpy = this.origin.y + this.size.height * 4;
        leftHand.x2 = this.origin.x - this.size.width * 0.9;
        leftHand.y2 = this.origin.y + this.size.height * 4;

        let rightHand = {};
        rightHand.cpx = this.origin.x - this.size.width * 0.7;
        rightHand.cpy = this.origin.y + this.size.height * 3.8;
        rightHand.x2 = this.origin.x - this.size.width * 0.75;
        rightHand.y2 = this.origin.y + this.size.height * 3.3;

        let rightPrearm = {};
        rightPrearm.cpx = this.origin.x - this.size.width * 0.6;
        rightPrearm.cpy = this.origin.y + this.size.height * 2.6;
        rightPrearm.x2 = this.origin.x - this.size.width * 0.55;
        rightPrearm.y2 = this.origin.y + this.size.height * 2;

        let rightShoulderBottom = {};
        rightShoulderBottom.cpx = this.origin.x - this.size.width * 0.38;
        rightShoulderBottom.cpy = this.origin.y + this.size.height * 1.4;
        rightShoulderBottom.x2 = this.origin.x - this.size.width * 0.4;
        rightShoulderBottom.y2 = this.origin.y + this.size.height * 1.4;

        curve.beginPath();

        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);

        curve.drawCurve(leftShoulderTop);
        curve.drawCurve(leftShoulderBottom);
        curve.drawCurve(leftPrearm);
        curve.drawCurve(leftHand);
        curve.drawCurve(rightHand);
        curve.drawCurve(rightPrearm);
        curve.drawCurve(rightShoulderBottom);

        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);

        curve.drawSymmetricCurve(this.origin, leftShoulderTop);
        curve.drawSymmetricCurve(this.origin, leftShoulderBottom);
        curve.drawSymmetricCurve(this.origin, leftPrearm);
        curve.drawSymmetricCurve(this.origin, leftHand);
        curve.drawSymmetricCurve(this.origin, rightHand);
        curve.drawSymmetricCurve(this.origin, rightPrearm);
        curve.drawSymmetricCurve(this.origin, rightShoulderBottom);

        curve.stroke();
    }

    eraseShape(curve) {
        let xShoulder = this.origin.x - this.size.width * 0.65;
        let yShoulder = this.origin.y;
        let widthShoulder = this.size.width * 1.3;
        let heightShoulder = this.size.height;

        curve.eraseSqure(xShoulder, yShoulder, widthShoulder, heightShoulder);

        let armSquareTop = {};
        armSquareTop.x = this.origin.x - this.size.width;
        armSquareTop.y = this.origin.y + this.size.height * 0.75;
        armSquareTop.width = this.size.width * 0.6;
        armSquareTop.height = this.size.height * 1.6;

        curve.eraseSqure(armSquareTop.x, armSquareTop.y, armSquareTop.width, armSquareTop.height);
        curve.eraseSymmetricSqure(this.origin, armSquareTop);

        let armSquareBottom = {};
        armSquareBottom.x = this.origin.x - this.size.width;
        armSquareBottom.y = this.origin.y + this.size.height * 2.3;
        armSquareBottom.width = this.size.width * 0.5;
        armSquareBottom.height = this.size.height * 1.8;

        curve.eraseSqure(armSquareBottom.x, armSquareBottom.y, armSquareBottom.width, armSquareBottom.height);
        curve.eraseSymmetricSqure(this.origin, armSquareBottom);
    }
}

export {ShoulderShape};
