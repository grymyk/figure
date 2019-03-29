import React from 'react'

class PureCanvas extends React.Component {
    /*initCanvas() {
        let canvas = document.getElementById('silhouette');

        if (canvas.getContext) {
            this.ctx = canvas.getContext('2d');

            this.draw(this.ctx);

        } else {
            console.log('Do Not Support Canvas API');
        }
    }*/

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const size = '300';
        const idName = "moyaKanva";

        const {id = idName, width = size, height = size} = this.props.attr;

        return (
            <canvas
                width = {width}
                height = {height}
                id = {id}

                ref = {
                    node => {
                        return node ?
                            this.props.contextRef(node.getContext('2d')) : null
                    }
                }
            />
        );
    }
}

export default PureCanvas;
