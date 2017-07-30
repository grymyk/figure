function Shape() {}

Shape.factory = function(selector, type) {
    //console.log('Shape.factory');
    
    var isDrawn = this.prototype.isDrawnCheck(selector, type); 
    //console.log(isDrawn);
    //console.log(selector, type);
    
    if (isDrawn === false) {
        var shape = new Shape[selector]();
        shape.setOptions(type);
        
        this.prototype.setSilhouette(selector, type);
        
        return shape;
    }
};

Shape.prototype = {
    isDrawnCheck : function(selector, type) {
    //console.log('Shape.prototype.isDrawnCheck');
    //console.log(selector, type);
    
        if (this.silhouette[selector] === type) {
            return true;
        }
        
        return false;
    },
    
    config : {
        moduleDimention : {
            width : 40,
            height : 50
        },
        
        origin : {
            x : 180,
            y : 25
        },
    },
    
    shapes : {
        'face' : 'Face',
        'shoulder' : 'Shoulder',
        'breast' : 'Breast',
        'waist' : 'Waist',
        'thigh' : 'Thigh',
        'legs' : 'Legs',
        'size' : 'Sizes'
    },
    
    silhouette : {},
    
    setSilhouette : function(selector, type) {       
        this.silhouette[selector] = type;
        
        //console.log(this.silhouette);
    },
    
    getSilhouette : function() {
        return this.silhouette;
    },
    
    clearSilhouette : function() {
        this.silhouette = {};
    }
};
