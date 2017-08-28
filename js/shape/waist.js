Shape.Waist = function(context) {
    this.isDrawn = false;
    
    this.origin = {
        x : 90,
        y : 150
    };
    
    this.size = {
        width: 58,
        height: 30
    };
    
    this.shapeType = {
        small : {
            DELTA_X_TOP_CP : 0.7,
            DELTA_X_TOP_END : 0.3,
            DELTA_X_BOTTOM_CP : 0.3
        },
        middle : {
            DELTA_X_TOP_CP : 0.8,
            DELTA_X_TOP_END : 0.4,
            DELTA_X_BOTTOM_CP : 0.35
        },
        large : {
            DELTA_X_TOP_CP : 0.9,
            DELTA_X_TOP_END : 0.4,
            DELTA_X_BOTTOM_CP : 0.4
        }
    }
}

Shape.Waist.prototype = {
    setOptions : function(shape) {
        this.options = this.shapeType[shape];
    },
    
    drawShape : function(curve) {
        var DELTA_X_TOP_CP = this.options.DELTA_X_TOP_CP;
        var DELTA_Y_TOP_CP = 0.7;
        var DELTA_X_TOP_END = this.options.DELTA_X_TOP_END;
        var DELTA_Y_TOP_END = 0.8;
        var DELTA_X_BOTTOM_CP = this.options.DELTA_X_BOTTOM_CP;
        var DELTA_Y_BOTTOM_CP = 0.9;
        var DELTA_X_BOTTOM_END = 0.35;
        
        var SHIFT_X_ORIGIN = this.size.width * 0.5;
        
        var leftTop = {};
        leftTop.cpx = this.origin.x - this.size.height * DELTA_X_TOP_CP;
        leftTop.cpy = this.origin.y + this.size.height * DELTA_Y_TOP_CP;
        leftTop.x2 = this.origin.x - this.size.width * DELTA_X_TOP_END;
        leftTop.y2 = this.origin.y + this.size.height * DELTA_Y_TOP_END;
        
        var leftBottom = {};
        leftBottom.cpx = this.origin.x - this.size.width * DELTA_X_BOTTOM_CP;
        leftBottom.cpy = this.origin.y + this.size.height * DELTA_Y_BOTTOM_CP;
        leftBottom.x2 = this.origin.x - this.size.width * DELTA_X_BOTTOM_END;
        leftBottom.y2 = this.origin.y + this.size.height;
        
        curve.beginPath();
        
        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);
        
        curve.drawCurve(leftTop);
        curve.drawCurve(leftBottom);
        
        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);
        
        curve.drawSymmetricCurve(this.origin, leftTop);
        curve.drawSymmetricCurve(this.origin, leftBottom);
        
        curve.stroke();
    },
    
    eraseShape : function(curve) {
        var x = this.origin.x - this.size.width * 0.55;
        var y = this.origin.y;
        var width = this.size.width * 1.1;
        var height = this.size.height;
        
        curve.eraseSqure(x, y, width, height);
    }
}
