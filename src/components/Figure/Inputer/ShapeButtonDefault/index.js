import React from "react";

class ShapeButtonDefault extends React.Component {
    constructor(props) {
        super(props);

        this.handleDefaultClick = this.handleDefaultClick.bind(this);
    }

    handleDefaultClick() {
        console.log('handleDefaultClick');

        this.props.onInputerDefault();
    }

    render() {
        return (
            <div className='default_btn'>
                <button
                    onClick = {(event) => this.handleDefaultClick(event)}
                >
                    {'default'}
                </button>
            </div>
        )
    }
}

export default ShapeButtonDefault;