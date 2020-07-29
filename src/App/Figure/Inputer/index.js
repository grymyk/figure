import React from "react";

import ShapeButton from "./ShapeButton";
import ShapeButtonClean from "./ShapeButtonClean";
import ShapeButtonDefault from "./ShapeButtonDefault";

import config from './config'

function Inputer(props) {
    const listShapeButton = [];

    Object.keys(config).forEach( (key, index) => {
        config[key]['active'] = props.siluet[key];

        listShapeButton.push(
            <ShapeButton
                key = {index}
                data = {config[key]}
                onInputerChange = {props.onFigureChange}
            />
        )
    });

    return (
        <div id='parameters_holder'>
            <div id="parameters">
                {listShapeButton}
            </div>
            <div>
                <ShapeButtonClean
                    onInputerClean = {props.onFigureClean}
                />

                <ShapeButtonDefault
                    onInputerDefault = {props.onFigureDefault}
                />
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default Inputer;

