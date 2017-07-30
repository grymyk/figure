function Curve(context) {
    this.context = context;
}

Curve.prototype = {
    moveTo : function(x, y) {
        this.context.moveTo(x, y)
    },
    
    beginPath: function() {
        this.context.beginPath();
    },
    
    closePath: function() {
        this.context.closePath();
    },
    
    stroke: function() {
        this.context.stroke();
    },
    
    drawSymmetricCurve : function(origin, options) {
        var cpx = origin.x * 2 - options.cpx;
        var x2 = origin.x * 2 - options.x2;
        
        this.context.quadraticCurveTo(cpx, options.cpy, x2, options.y2);
    },
    
    drawCurve : function(options) {
        this.context.quadraticCurveTo(options.cpx, options.cpy, options.x2, options.y2);
    },
    
    eraseSqure : function(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    },
    
    eraseSymmetricSqure : function(origin, options) {
        var x = origin.x * 2 - options.x - options.width;
        
        this.context.clearRect(x, options.y, options.width, options.height);
    },
    
    drawBeastSpace : function(options) {
        this.context.quadraticCurveTo(options.cpx, options.cpy, options.x2, options.y2);
    },
    
    eraseAll : function() {
        var canvas = this.context.canvas;
        
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
};
