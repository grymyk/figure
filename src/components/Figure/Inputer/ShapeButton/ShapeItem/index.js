import React from "react";

class ShapeItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let name = event.target.name;
        let type = this.props.type;

        this.props.onShapeItemChange(type, name);
    }

    render() {
        const name = this.props.name;
        const cls = this.props.cls;
        const type = this.props.selector;

        return (
            <li>
                <button
                    onClick = {(event) => this.handleClick(event)}
                    name = {name}
                    className={cls}
                    type = {type}
                >
                    {name}
                </button>
            </li>
        )
    }
}

export default ShapeItem;