Shape.Thigh = function(curve) {
    this.isDrawn = false;
    
    this.origin = {
        x : 90,
        y : 180
    };
    
    this.size = {
        width: 40,
        height: 50
    };
    
    this.shapeType = {
        small : {
            DELTA_X_TOP_CP : 0.7,
        },
        middle : {
            DELTA_X_TOP_CP : 0.8
        },
        large : {
            DELTA_X_TOP_CP : 0.9
        }
    }
}

Shape.Thigh.prototype = {
    setOptions : function(shape) {
        this.options = this.shapeType[shape];
    },
    
    drawShape : function(curve) {
        var DELTA_X_TOP_CP = this.options.DELTA_X_TOP_CP;
        var DELTA_Y_TOP_CP = 0.5;
        var DELTA_X_TOP_END = 0.4;
        
        var SHIFT_X_ORIGIN = this.size.width * 0.5;
        
        var leftThigh = {};
        leftThigh.cpx = this.origin.x - this.size.height * DELTA_X_TOP_CP;
        leftThigh.cpy = this.origin.y + this.size.height * DELTA_Y_TOP_CP;
        leftThigh.x2 = this.origin.x - this.size.width;
        leftThigh.y2 = this.origin.y + this.size.height;
        
        curve.beginPath();
        
        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);
        curve.drawCurve(leftThigh);
        
        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);
        curve.drawSymmetricCurve(this.origin, leftThigh);
        
        curve.stroke();
    },
    
    eraseShape : function(curve) {
        var x = this.origin.x - this.size.width * 1.1;
        var y = this.origin.y;
        var width = this.size.width * 2.2;
        var height = this.size.height;
        
        curve.eraseSqure(x, y, width, height);
    }
};
