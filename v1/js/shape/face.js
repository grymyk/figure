Shape.Face = function(curve) {
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
        rectangle : {
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

Shape.Face.prototype = {
    setOptions : function(shape) {
        this.options = this.shapeType[shape];
    },
    
    drawShape : function(curve) {
        var HEIGHT_FACTOR = this.options.HEIGHT_FACTOR;
        var DELTA_X_TOP = this.options.DELTA_X_TOP;
        var DELTA_X_BOTTON = this.options.DELTA_X_BOTTON;
        var DELTA_Y_TOP = this.options.DELTA_Y_TOP;
        var DELTA_Y_BOTTON = this.options.DELTA_Y_BOTTON;
        
        var leftTopCurve = {};
        leftTopCurve.cpx = this.origin.x - this.size.width * DELTA_X_TOP;
        leftTopCurve.cpy = this.origin.y + this.size.height * DELTA_Y_TOP;
        leftTopCurve.x2 = leftTopCurve.cpx;
        leftTopCurve.y2 = this.origin.y + this.size.height * HEIGHT_FACTOR;
        
        var leftBottomCurve = {};
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
    },
    
    eraseShape : function(curve) {        
        var DELTA_COOR = 2;
        var DELTA_SIZE = 4;
        
        var x = this.origin.x - this.size.width / 2 - DELTA_COOR;
        var y = this.origin.y - DELTA_COOR;
        var width = this.size.width + DELTA_SIZE;
        var height = this.size.height + DELTA_SIZE;
        
        curve.eraseSqure(x, y, width, height);
    }
};
