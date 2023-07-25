// useContext

import React from 'react'

class PureCanvas extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { id, height, width } = this.props.attr;
        const context = ( obj ) => this.props.contextRef(obj);

        return (
            <canvas
                id = { id }
                height = { height }
                width = { width }

                ref = {
                    (node) => {
                        return node ?
                            context( node.getContext('2d') ) : null
                    }
                }
            />
        );
    }
}

export default PureCanvas;
