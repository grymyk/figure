import React from "react";

import ShapeButton from "./ShapeButton";

const config = {

    face: {
        name: 'face',
        type: [
            'rectangle',
            'heart',
            'oval',
            'round'
        ]
    },

    shoulder :{
        name: 'shoulder',
        type: [
            'tight',
            'normal',
            'wide'
        ]
    },

    breast: {
        name: 'breast',
        type: [
            'small',
            'middle',
            'large'
        ]
    },

    waist: {
        name: 'waist',
        type: [
            'small',
            'middle',
            'large'
        ]
    },
        thigh: {
            name: 'thigh',
            type: [
                'small',
                'middle',
                'large'
                ]
        },

    legs: {
        name: 'legs',
        type: [
            'Otype',
            'normal',
            'Xtype'
        ]
    }
};

class Inputer extends React.Component {
    render() {
        const listShapeButton = [];

        Object.keys(config).forEach( (key, index) => {
            config[key]['active'] = this.props.siluet[key];

            listShapeButton.push(
                <ShapeButton
                    key = {index}
                    data = {config[key]}
                    onInputerChange = {this.props.onFigureChange}
                />
            )
        });

        return (
            <div id='parameters_holder'>
                <div id="parameters">
                    {listShapeButton}
                </div>
                {/*<div className="erase_btn">
                    <button id="erase_silhouette">clean all shapes</button>
                </div>*/}
                {/*<ShapeButtonClean
                    name = {clearbtn.name}
                    onInputerClean = {this.props.onFigureClean}
                />*/}

                <div className="clear"></div>
            </div>
        )
    }
}

export default Inputer;

