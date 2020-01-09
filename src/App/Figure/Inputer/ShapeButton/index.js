import React from 'react';

import ShapeItem from './ShapeItem';

function Shape(props) {
    const type = props.data.name;

    const listFaceItem = props.data.type.map((shape, index) => {
        return <ShapeItem
            key = {index}
            name = {shape}
            cls = { shape === props.data.active ? 'active' : null }
            onShapeItemChange = {props.onInputerChange}
            type = {type}
        />
    });

    return (
        <div className="selector_holder">
            <h3 className="heading">{type}</h3>
            <ul>{listFaceItem}</ul>
        </div>
    )
}

export default Shape;
