import React from 'react';

import ShapeTypeButton from './ShapeTypeButton';

function ShapeButtons(props) {
    const { data, onInputerChange } = props;
    const { active, name, types } = data;

    const clsActive = 'active';

    const listFaceItem = types.map( (type, index) => {
        return <ShapeTypeButton
            cls = { type === active ? clsActive : null }
            key = { index }
            type = { type }
            onShapeItemChange = { onInputerChange }
            name = { name }
        />
    });

    return (
        <div className="selector_holder">
            <h3 className="heading">{ name }</h3>
            <ul>{ listFaceItem }</ul>
        </div>
    )
}

export default ShapeButtons;
