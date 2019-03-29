import React from "react";

const clearbtn = {
    name: 'clean all shapes'
};

class ShapeButtonClean extends React.Component {
    constructor(props) {
        super(props);

        this.handleCleanClick = this.handleCleanClick.bind(this);
    }

    handleCleanClick() {
        console.log('handleCleanClick');

        this.props.onInputerClean();
    }

    render() {
        return (
            <div>
                <button
                    onClick = {(event) => this.handleCleanClick(event)}
                    className={this.props.cls}
                >
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default ShapeButtonClean;