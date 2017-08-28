Shape.Breast = function(context) {
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

Shape.Breast.prototype = {
    setOptions : function(shape) {
        this.options = this.shapeType[shape];
    },
    
    drawShape : function(curve) {
        var SHIFT_X_ORIGIN = this.size.width * 0.05;
        var SHIFT_Y_ORIGIN = this.size.height * 0.8;
        var DELTA_X_END_TOP = 0.35;
        var DELTA_X_CP_BOTTOM = 0.37;
        var DELTA_Y_CP_BOTTOM = 0.3;
        var DELTA_X_END_BOTTOM = 0.38;
        
        var beastSpace = this.options.BeastSpace;
        var DELTA_X_CP_TOP = this.options.DELTA_X_CP_TOP;
        var DELTA_Y_CP_TOP = this.options.DELTA_Y_CP_TOP;
        
        var leftBreast = {};
        leftBreast.cpx = this.origin.x - this.size.height * DELTA_X_CP_TOP;
        leftBreast.cpy = this.origin.y + this.size.height * DELTA_Y_CP_TOP;
        leftBreast.x2 = this.origin.x - this.size.width * DELTA_X_END_TOP;
        leftBreast.y2 = this.origin.y;
        
        var leftRib = {};
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
    },
    
    eraseShape : function(curve) {
        var DELTA_COOR = 0;
        var DELTA_SIZE = 2;
        
        var x = this.origin.x - this.size.width / 2 - DELTA_COOR;
        var y = this.origin.y - DELTA_COOR;
        var width = this.size.width;
        var height = this.size.height + DELTA_SIZE;
        
        curve.eraseSqure(x, y, width, height);
    },
    
    drawBeastSpace : function(isShow, curve) {
        if (isShow) {
            var leftX1 = this.origin.x - this.size.width * 0.05;
            var Y1 = this.origin.y + this.size.height * 0.05;
            
            curve.moveTo(leftX1, Y1);
            
            var leftCurve = {};
            leftCurve.cpx = this.origin.x;
            leftCurve.cpy = this.origin.y; 
            leftCurve.x2 = this.origin.x - this.size.width * 0.02;
            leftCurve.y2 = this.origin.y + this.size.height * 0.3;
            
            curve.drawCurve(leftCurve);
            
            var rightX1 = this.origin.x + this.size.width * 0.05;
            
            curve.moveTo(rightX1, Y1);
            
            curve.drawSymmetricCurve(this.origin, leftCurve);
        }
    }
};
