import React from "react";

function ShapeButtonDefault(props) {
    const handleDefaultClick = () => {
        props.onInputerDefault();
    }

    return (
        <div className='default_btn'>
            <button
                onClick = {handleDefaultClick}
            >
                {'default'}
            </button>
        </div>
    )
}


export default ShapeButtonDefault;
