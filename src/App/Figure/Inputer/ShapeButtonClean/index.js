import React from "react";

class ShapeButtonClean extends React.Component {
    constructor(props) {
        super(props);

        this.handleCleanClick = this.handleCleanClick.bind(this);
    }

    handleCleanClick() {
        //console.log('handleCleanClick');

        this.props.onInputerClean();
    }

    render() {
        return (
            <div className='erase_btn'>
                <button
                    onClick = {(event) => this.handleCleanClick(event)}
                >
                    {'clear'}
                </button>
            </div>
        )
    }
}

export default ShapeButtonClean;