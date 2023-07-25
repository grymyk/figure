class LegsShape {
    constructor() {
        this.isDrawn = false;

        this.origin = {
            x : 90,
            y : 230
        };

        this.size = {
            width: 80,
            height: 50
        };

        this.shapeType = {
            Otype: {
                RIGHT_THIGH_BOTTOM2_CP_X : 0.11,
                RIGHT_THIGH_BOTTOM_CP_X : 0.05,
                RIGHT_THIGH_BOTTOM_END_X : 0.03,
                RIGTH_SHIN_CP_X : 0.03,
                RIGTH_SHIN_END_X : 0.02,
                LEFT_SHIN_END_X : 0.15,
                LEFT_FOOT_CP_X : 0.3,
                LEFT_FOOT_END_X : 0.15,
                RIGHT_FOOT_CP_X : 0.03,
                RIGHT_FOOT_END_X : 0.02
            },
            normal : {
                RIGHT_THIGH_BOTTOM2_CP_X : 0.01,
                RIGHT_THIGH_BOTTOM_CP_X : 0.05,
                RIGHT_THIGH_BOTTOM_END_X : 0.02,
                RIGTH_SHIN_CP_X : 0.03,
                RIGTH_SHIN_END_X : 0.02,
                LEFT_SHIN_END_X : 0.15,
                LEFT_FOOT_CP_X : 0.3,
                LEFT_FOOT_END_X : 0.15,
                RIGHT_FOOT_CP_X : 0.03,
                RIGHT_FOOT_END_X : 0.02
            },
            Xtype : {
                RIGHT_THIGH_BOTTOM2_CP_X : 0.01,
                RIGHT_THIGH_BOTTOM_CP_X : 0.05,
                RIGHT_THIGH_BOTTOM_END_X : 0.02,
                RIGTH_SHIN_CP_X : 0.03,
                RIGTH_SHIN_END_X : 0.06 ,
                LEFT_SHIN_END_X : 0.3,
                LEFT_FOOT_CP_X : 0.45,
                LEFT_FOOT_END_X : 0.3,
                RIGHT_FOOT_CP_X : 0.17,
                RIGHT_FOOT_END_X : 0.17
            }
        }
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        const { origin } = this;
        const { x, y } = this.origin;

        const {
            LEFT_FOOT_CP_X,
            LEFT_FOOT_END_X,
            LEFT_SHIN_END_X,
            RIGHT_FOOT_CP_X,
            RIGHT_FOOT_END_X,
            RIGTH_SHIN_CP_X,
            RIGTH_SHIN_END_X,
            RIGHT_THIGH_BOTTOM_CP_X,
            RIGHT_THIGH_BOTTOM2_CP_X,
            RIGHT_THIGH_BOTTOM_END_X,
        } = this.options;

        const { height, width } = this.size;

        const SHIFT_X_ORIGIN = width * 0.5;

        const leftThighBottom = {
            cpx: x - height * 0.8,
            cpy: y + height * 0.7,
            x2: x - width * 0.3,
            y2: y + height * 2
        };

        const leftShin = {
            cpx: x - width * 0.35,
            cpy: y + height * 2.5,
            x2: x - width * LEFT_SHIN_END_X,
            y2: y + height * 3.6
        };

        const leftFoot = {
            cpx: x - width * LEFT_FOOT_CP_X,
            cpy: y + height * 4.17,
            x2: x - width * LEFT_FOOT_END_X,
            y2: y + height * 4.1,
        };

        const rightFoot = {
            cpx: x - width * RIGHT_FOOT_CP_X,
            cpy: y + height * 4.2,
            x2: x - width * RIGHT_FOOT_END_X,
            y2: y + height * 3.5
        };

        const rightShin = {
            cpx: x - width * RIGTH_SHIN_CP_X,
            cpy: y + height * 3,
            x2: x - width * RIGTH_SHIN_END_X,
            y2: y + height * 2.6
        };

        const rightThighBottom = {
            cpx: x - width * RIGHT_THIGH_BOTTOM_CP_X,
            cpy: y + height * 2.3,
            x2: x - width * RIGHT_THIGH_BOTTOM_END_X,
            y2: y + height * 2.05
        };

        const rightThighBottom2 = {
            cpx: x - width * RIGHT_THIGH_BOTTOM2_CP_X,
            cpy: y + height,
            x2: x - width * 0.01,
            y2: y + height * 0.4
        };

        curve.beginPath();

        curve.moveTo(x - SHIFT_X_ORIGIN, y);

        curve.drawCurve(leftThighBottom);
        curve.drawCurve(leftShin);
        curve.drawCurve(leftFoot);
        curve.drawCurve(rightFoot);
        curve.drawCurve(rightShin);
        curve.drawCurve(rightThighBottom);
        curve.drawCurve(rightThighBottom2);

        curve.moveTo(x + SHIFT_X_ORIGIN, y);

        curve.drawSymmetricCurve(origin, leftThighBottom);
        curve.drawSymmetricCurve(origin, leftShin);
        curve.drawSymmetricCurve(origin, leftFoot);
        curve.drawSymmetricCurve(origin, rightFoot);
        curve.drawSymmetricCurve(origin, rightShin);
        curve.drawSymmetricCurve(origin, rightThighBottom);
        curve.drawSymmetricCurve(origin, rightThighBottom2);

        curve.stroke();
    }

    eraseShape(curve) {
        const { x, y } = this.origin;
        const { height, width } = this.size;

        const squre = {
            x: x - width / 2,
            y,
            width,
            height: height * 4.2
        };

        curve.eraseSqure(squre);
    }
}

export { LegsShape };
