import { FaceShape } from './faceShape.js'
import { ShoulderShape } from "./shoulderShape";
import { BreastShape } from './breastShape.js'
import { WaistShape } from "./waistShape";
import { ThighShape } from "./thighShape";
import { LegsShape } from "./legsShape";

let ShapeFactories = {
    face: FaceShape,
    shoulder: ShoulderShape,
    breast: BreastShape,
    waist: WaistShape,
    thigh: ThighShape,
    legs: LegsShape
};

class ShapeFactory {
    constructor(selector, type) {
        this.silhouette = {};

        const isDrawn = this.isDrawnCheck(selector, type);

        if (isDrawn === false) {
            let shape = new ShapeFactories[selector]();
            shape.setOptions(type);

            this.setSilhouette(selector, type);

            return shape;
        }
    }

    isDrawnCheck(selector, type) {
        return this.silhouette[selector] === type;
    }

    config = {
        moduleDimention : {
            width : 40,
            height : 50
        },

        origin : {
            x : 180,
            y : 25
        },
    };

    shapes = {
        'face' : 'Face',
        'shoulder' : 'Shoulder',
        'breast' : 'Breast',
        'waist' : 'Waist',
        'thigh' : 'Thigh',
        'legs' : 'Legs',
        'size' : 'Sizes'
    };

    setSilhouette(selector, type) {
        this.silhouette[selector] = type;
    }

    getSilhouette() {
        return this.silhouette;
    }

    clearSilhouette() {
        this.silhouette = {};
    }
}

export { ShapeFactory };
