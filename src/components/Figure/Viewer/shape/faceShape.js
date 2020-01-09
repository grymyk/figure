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
            },


        };
    }

    setOptions(shape) {
        this.options = this.shapeType[shape];
    }

    drawShape(curve) {
        let HEIGHT_FACTOR = this.options.HEIGHT_FACTOR;
        let DELTA_X_TOP = this.options.DELTA_X_TOP;
        let DELTA_X_BOTTON = this.options.DELTA_X_BOTTON;
        let DELTA_Y_TOP = this.options.DELTA_Y_TOP;
        let DELTA_Y_BOTTON = this.options.DELTA_Y_BOTTON;

        let leftTopCurve = {};
        leftTopCurve.cpx = this.origin.x - this.size.width * DELTA_X_TOP;
        leftTopCurve.cpy = this.origin.y + this.size.height * DELTA_Y_TOP;
        leftTopCurve.x2 = leftTopCurve.cpx;
        leftTopCurve.y2 = this.origin.y + this.size.height * HEIGHT_FACTOR;

        let leftBottomCurve = {};
        leftBottomCurve.cpx = this.origin.x - this.size.width * DELTA_X_BOTTON;
        leftBottomCurve.cpy = this.origin.y + this.size.height * DELTA_Y_BOTTON;
        leftBottomCurve.x2 = this.origin.x;
        leftBottomCurve.y2 = this.origin.y + this.size.height;

        curve.beginPath();

        curve.moveTo(this.origin.x, this.origin.y);
        curve.drawCurve(leftTopCurve);
        curve.drawCurve(leftBottomCurve);

        curve.moveTo(this.origin.x, this.origin.y);
        curve.drawSymmetricCurve(this.origin, leftTopCurve);
        curve.drawSymmetricCurve(this.origin, leftBottomCurve);

        curve.stroke();
    }

    eraseShape(curve) {
        let DELTA_COOR = 2;
        let DELTA_SIZE = 4;

        let x = this.origin.x - this.size.width / 2 - DELTA_COOR;
        let y = this.origin.y - DELTA_COOR;
        let width = this.size.width + DELTA_SIZE;
        let height = this.size.height + DELTA_SIZE;

        curve.eraseSqure(x, y, width, height);
    }
}

export {FaceShape};
