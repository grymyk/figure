import React from "react";

function ShapeItem(props) {

    const handleClick = (event) => {
        let name = event.target.name;
        let type = props.type;

        props.onShapeItemChange(type, name);
    }

    const {name, cls, type} = props;

    return (
        <li>
            <button
                onClick = {handleClick}
                name = {name}
                className={cls}
                type = {type}
            >
                {name}
            </button>
        </li>
    )
}

export default ShapeItem;
