import { ShapeFactory } from './shape';
import { Curve } from './curve';

class Tailor {
    constructor(context) {
        this.curve = new Curve(context);
    }

    drawShape(selector, type) {
        const shape = new ShapeFactory(selector, type);

        shape.eraseShape(this.curve);

        if (type) {
            shape.drawShape(this.curve);
        }
    }

    drawSilhouette(silhouette) {

        for (let part in silhouette) {
            if (silhouette.hasOwnProperty(part)) {
                this.drawShape(part, silhouette[part]);
            }
        }
    }

    eraseAll() {
        this.curve.eraseAll();

        ShapeFactory.clearSilhouette();
    }

    eraseSilhouette() {
        this.eraseAll();
    }
}

export { Tailor };

