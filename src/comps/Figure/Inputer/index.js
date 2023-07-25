import React from "react";

import ShapeButtons from "./ShapeButtons";
import ShapeButtonClean from "./ShapeButtonClean";
import ShapeButtonDefault from "./ShapeButtonDefault";

import config from './config'

function Inputer(props) {
    const listShapeButton = [];

    const { onFigureChange, onFigureClean, onFigureDefault,
        siluet } = props;

    const clsActive = 'active';
    const parts = Object.keys(config);

    parts.forEach( (part, index) => {
        config[part][clsActive] = siluet[part];

        listShapeButton.push(
            <ShapeButtons
                data = { config[part] }
                key = { index }
                onInputerChange = { onFigureChange }
            />
        )
    });

    return (
        <div id='parameters_holder'>
            <div id="parameters">
                { listShapeButton }
            </div>
            <div>
                <ShapeButtonClean
                    onInputerClean = { onFigureClean }
                />

                <ShapeButtonDefault
                    onInputerDefault = { onFigureDefault }
                />
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default Inputer;

