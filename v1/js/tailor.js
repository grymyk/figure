function TailorModel() {
    this.silhouette = {
        "Face" : "heart",
        "Shoulder" : "normal",
        "Breast" : "middle",
        "Waist" : "middle",
        "Thigh" : "middle",
        "Legs" : "middle"
    };
}

TailorModel.prototype = {
    getDataByClick: function() {
        return data;
    },
    
    getDataFromConfig: function() {
        return this.silhouette;
    }
};

function TailorView(model) {
    this.selector_holder = $('#parameters');
    this.selector = this.selector_holder.find('ul');
    this.preview = $('#preview');
    this.eraseAllBnt = $('#erase_silhouette');
    
    var canvas = document.getElementById('silhouette');
    this.context = canvas.getContext('2d');
    this.curve = new Curve(this.context);
}

TailorView.prototype = {
    addActiveClass: function(target) { 
        target.parents('ul').find('a').removeClass('active');
        target.addClass('active');
    },
    
    addActiveClasses: function(silhouette) {
        for (var part in silhouette) {
            var target = this.getTarget(part, silhouette[part]);
            
            this.addActiveClass(target);
        }
    },
    
    getTarget: function(selector, type) {
        var ul = this.selector_holder.find('ul[data-selector=' + selector +  ']');

        return ul.find('a[data-preview='+ type +']');
    },
    
    drawShape: function(selector, type) {
        var shape = Shape.factory(selector, type);

        shape.eraseShape(this.curve);
        shape.drawShape(this.curve);
    },
    
    drawSilhouette: function(silhouette) {
        for (var part in silhouette) {
            this.drawShape(part, silhouette[part]);
        }
    },
    
    eraseShape: function() {
        this.shape.eraseShape(this.curve);
    },
    
    eraseAll: function() {
        this.curve.eraseAll();
        
        Shape.prototype.clearSilhouette();
        this.selector_holder.find('a').removeClass('active');
    }
};

function TailorController(model, view) {
    this.model = model;
    this.view = view;
    
    var self = this;
    
    this.view.selector.on('click', function(event) {
        self.paramsHandler(event);
    });
    
    this.view.eraseAllBnt.on('click', function(e) {
        e.preventDefault();
        
        self.eraseSilhouette();
    });
}

TailorController.prototype = {
    init: function() {
        var silhouette = this.model.getDataFromConfig();
        
        //var target = data.target;
        
        //var selector = 'Thigh';        
        //var type = data['Thigh'];
        
        this.view.drawSilhouette(silhouette);
        //this.view.drawShape(silhouette);
        
        this.view.addActiveClasses(silhouette);
    },
    
    paramsHandler: function(event) {
        event.preventDefault();
        
        var target = $(event.target);        
        var selector = target.parents('ul').attr('data-selector');        
        var type = target.attr('data-preview');
        
        this.view.drawShape(selector, type);
        
        this.view.addActiveClass(target);
    },
    
    eraseSilhouette: function() {
        this.view.eraseAll();
    } 
};
