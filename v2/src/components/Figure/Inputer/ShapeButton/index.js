import React from 'react';

import ShapeItem from './ShapeItem';

class Shape extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const type = this.props.data.name;

        const listFaceItem = this.props.data.type.map((shape, index) => {
            return <ShapeItem
                key = {index}
                name = {shape}
                cls = { shape === this.props.data.active ? 'active' : null }
                onShapeItemChange = {this.props.onInputerChange}
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
}

export default Shape;