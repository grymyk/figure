import React from "react";

function ShapeButtonClean(props) {
    const handleCleanClick = () => {
        props.onInputerClean();
    }

    return (
        <div className='erase_btn'>
            <button
                onClick = { handleCleanClick }
            >
                {'clear'}
            </button>
        </div>
    )
}

export default ShapeButtonClean;
