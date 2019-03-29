import {FaceShape} from './faceShape.js'
import {ShoulderShape} from "./shoulderShape";
import {BreastShape} from './breastShape.js'
import {WaistShape} from "./waistShape";
import {ThighShape} from "./thighShape";
import {LegsShape} from "./legsShape";

let ShapeFactories = {};

ShapeFactories['face'] = FaceShape;
ShapeFactories['shoulder'] = ShoulderShape;
ShapeFactories['breast'] = BreastShape;
ShapeFactories['waist'] = WaistShape;
ShapeFactories['thigh'] = ThighShape;
ShapeFactories['legs'] = LegsShape;


class ShapeFactory {
    constructor(selector, type) {
        this.silhouette = {};

        let isDrawn = this.isDrawnCheck(selector, type);

        if (isDrawn === false) {
            let shape = new ShapeFactories[selector](type);
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

export {ShapeFactory};