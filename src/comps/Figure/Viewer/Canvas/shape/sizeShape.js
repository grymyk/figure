class SizeShape {
    constructor() {
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

    setShapeFactor(shape) {
        return this.shapeType[shape];
    }

    drawShape(shape) {
        const options = this.setShapeFactor(shape);

        const { height, width } = options;

        const silhouette = getSilhouette();
    }

    eraseShape() {
        console.log('Erase Size');
    }
}

