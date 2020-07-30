// useContext

import React from 'react'

class PureCanvas extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {id, width, height} = this.props.attr;

        return (
            <canvas
                id = {id}
                width = {width}
                height = {height}

                ref = {
                    (node) => {
                        return node ?
                            this.props.contextRef(node.getContext('2d')) : null
                    }
                }
            />
        );
    }
}

export default PureCanvas;
