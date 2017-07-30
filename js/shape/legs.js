Shape.Legs = function(curve) {
    this.isDrawn = false;
    
    this.origin = {
        x : 180,
        y : 230
    };
    
    this.size = {
        width: 80,
        height: 50
    };
    
    this.shapeType = {
        small: {
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
        middle : {
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
        large : {
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

Shape.Legs.prototype = {
    setOptions : function(shape) {
        this.options = this.shapeType[shape];
    },
    
    drawShape : function(curve) {
        var RIGHT_THIGH_BOTTOM2_CP_X = this.options.RIGHT_THIGH_BOTTOM2_CP_X;
        var RIGHT_THIGH_BOTTOM_CP_X = this.options.RIGHT_THIGH_BOTTOM_CP_X;
        var RIGHT_THIGH_BOTTOM_END_X = this.options.RIGHT_THIGH_BOTTOM_END_X;
        var RIGTH_SHIN_CP_X = this.options.RIGTH_SHIN_CP_X;
        var RIGTH_SHIN_END_X = this.options.RIGTH_SHIN_END_X;
        var LEFT_SHIN_END_X = this.options.LEFT_SHIN_END_X;
        var LEFT_FOOT_CP_X = this.options.LEFT_FOOT_CP_X;
        var LEFT_FOOT_END_X = this.options.LEFT_FOOT_END_X;
        var RIGHT_FOOT_CP_X = this.options.RIGHT_FOOT_CP_X;
        var RIGHT_FOOT_END_X = this.options.RIGHT_FOOT_END_X;

        var SHIFT_X_ORIGIN = this.size.width * 0.5;
        
        var leftThighBottom = {};
        leftThighBottom.cpx = this.origin.x - this.size.height * 0.8;
        leftThighBottom.cpy = this.origin.y + this.size.height * 0.7;
        leftThighBottom.x2 = this.origin.x - this.size.width * 0.3;
        leftThighBottom.y2 = this.origin.y + this.size.height * 2;
        
        var leftShin = {};
        leftShin.cpx = this.origin.x - this.size.width * 0.35;
        leftShin.cpy = this.origin.y + this.size.height * 2.5;
        leftShin.x2 = this.origin.x - this.size.width * LEFT_SHIN_END_X;
        leftShin.y2 = this.origin.y + this.size.height * 3.6;
        
        var leftFoot = {};
        leftFoot.cpx = this.origin.x - this.size.width * LEFT_FOOT_CP_X;
        leftFoot.cpy = this.origin.y + this.size.height * 4.17;
        leftFoot.x2 = this.origin.x - this.size.width * LEFT_FOOT_END_X;
        leftFoot.y2 = this.origin.y + this.size.height * 4.1;
        
        var rightFoot = {};
        rightFoot.cpx = this.origin.x - this.size.width * RIGHT_FOOT_CP_X;
        rightFoot.cpy = this.origin.y + this.size.height * 4.2;
        rightFoot.x2 = this.origin.x - this.size.width * RIGHT_FOOT_END_X;
        rightFoot.y2 = this.origin.y + this.size.height * 3.5;
        
        var rightShin = {};
        rightShin.cpx = this.origin.x - this.size.width * RIGTH_SHIN_CP_X;
        rightShin.cpy = this.origin.y + this.size.height * 3;
        rightShin.x2 = this.origin.x - this.size.width * RIGTH_SHIN_END_X;
        rightShin.y2 = this.origin.y + this.size.height * 2.6;
        
        var rightThighBottom = {};
        rightThighBottom.cpx = this.origin.x - this.size.width * RIGHT_THIGH_BOTTOM_CP_X;
        rightThighBottom.cpy = this.origin.y + this.size.height * 2.3;
        rightThighBottom.x2 = this.origin.x - this.size.width * RIGHT_THIGH_BOTTOM_END_X;
        rightThighBottom.y2 = this.origin.y + this.size.height * 2.05;
        
        var rightThighBottom2 = {};
        rightThighBottom2.cpx = this.origin.x - this.size.width * RIGHT_THIGH_BOTTOM2_CP_X;
        rightThighBottom2.cpy = this.origin.y + this.size.height * 1;
        rightThighBottom2.x2 = this.origin.x - this.size.width * 0.01;
        rightThighBottom2.y2 = this.origin.y + this.size.height * 0.4;
        
        curve.beginPath();
        
        curve.moveTo(this.origin.x - SHIFT_X_ORIGIN, this.origin.y);
        
        curve.drawCurve(leftThighBottom);
        curve.drawCurve(leftShin);
        curve.drawCurve(leftFoot);
        curve.drawCurve(rightFoot);
        curve.drawCurve(rightShin);
        curve.drawCurve(rightThighBottom);
        curve.drawCurve(rightThighBottom2);
        
        curve.moveTo(this.origin.x + SHIFT_X_ORIGIN, this.origin.y);
        
        curve.drawSymmetricCurve(this.origin, leftThighBottom);
        curve.drawSymmetricCurve(this.origin, leftShin);
        curve.drawSymmetricCurve(this.origin, leftFoot);
        curve.drawSymmetricCurve(this.origin, rightFoot);
        curve.drawSymmetricCurve(this.origin, rightShin);
        curve.drawSymmetricCurve(this.origin, rightThighBottom);
        curve.drawSymmetricCurve(this.origin, rightThighBottom2);
        
        curve.stroke();
    },
    
    eraseShape : function(curve) {
        var x = this.origin.x - this.size.width / 2;
        var y = this.origin.y;
        var width = this.size.width;
        var height = this.size.height * 4.2;
        
        curve.eraseSqure(x, y, width, height);
    }
}
