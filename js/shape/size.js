Shape.Size = function(curve) {
    this.isDrawn = false;
    
    this.parts = [];
    
    this.shapeType = {
        small: {
            width : 0.8,
            height : 0.8
        },
        middle : {
            width : 1,
            height : 1
        },
        large : {
            width : 1.2,
            height : 1.2
        }
    };
}

Shape.Size.prototype = {
    setShapeFactor : function(shape) {
        return this.shapeType[shape];
    },
    
    drawShape : function(shape) {
        var options = this.setShapeFactor(shape);
        
        var width = options.width;
        var height = options.height;
        
        var silhouette = getSilhouette();
    },
    
    eraseShape : function() {
        //console.log('Erase Size');
    }
};
