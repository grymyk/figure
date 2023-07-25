import React from "react";

function ShapeTypeButton(props) {
    const { cls, name, onShapeItemChange, type } = props;

    const handleClick = (event) => {
        const { value } = event.target;

        onShapeItemChange(name, value);
    }

    return (
        <li>
            <button
                className = { cls }
                value = { type }
                onClick = { handleClick }
            >
                { type }
            </button>
        </li>
    )
}

export default ShapeTypeButton;
