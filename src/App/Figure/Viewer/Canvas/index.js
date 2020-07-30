// useEffect ?

import React from 'react'

import PureCanvas from './PureCanvas'
import {Tailor} from "../tailor";

class Canvas extends React.Component {
    drawRect(angle) {
        this.ctx.save();
            this.ctx.beginPath();
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.translate(this.width / 2, this.height / 2);

            this.ctx.rotate((angle * Math.PI) / 180);

            this.ctx.fillStyle = '#4397AC';
            this.ctx.fillRect(
                -this.width / 4,
                -this.height / 4,
                this.width / 2,
                this.height / 2
            );
        this.ctx.restore();
    }

    draw() {
        const tailor = new Tailor(this.ctx);

        tailor.drawSilhouette(this.props.siluet);
    }

    componentDidMount() {
        this.draw()
    }

    componentDidUpdate() {
        this.draw()
    }

    saveContext = (ctx) => {
        this.ctx = ctx;

        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    render() {
        return <PureCanvas
            attr = {this.props.attr}
            contextRef = {this.saveContext}
        />;
    }
}

export default Canvas;
