// useEffect ?

import React from 'react'

import PureCanvas from './PureCanvas'
import { Tailor } from "./tailor";

class Canvas extends React.Component {
    drawRect(degree) {
        const { ctx, height, width } = this;
        const halfHeight = height / 2;
        const halfWidth = width / 2;
        const quarterHeight = height / 4;
        const quarterWidth = width / 4;
        const radian = degree * Math.PI / 180;
        const color = '#4397AC';

        ctx.save();
            ctx.beginPath();
            ctx.clearRect(0, 0, width, height);
            ctx.translate(halfWidth, halfHeight);

            ctx.rotate(radian);

            ctx.fillStyle = color;
            ctx.fillRect(
                -quarterWidth, -quarterHeight,
                halfWidth, halfHeight
            );
        ctx.restore();
    }

    draw() {
        const tailor = new Tailor(this.ctx);
        const { siluet } = this.props;

        // Draw Some Part of Silhouette
        /*const selector = 'legs';
        const type = siluet[selector];
        tailor.drawShape(selector, type);*/

        // Draw All Silhouette
        tailor.drawSilhouette(siluet);
    }

    componentDidMount() {
        this.draw()
    }

    componentDidUpdate() {
        this.draw()
    }

    render() {
        const saveContext = ( ctx ) => {
            this.ctx = ctx;

            const { height, width } = ctx.canvas;

            this.height = height;
            this.width = width;
        }

        const { attr } = this.props;

        return <PureCanvas
            attr = { attr }
            contextRef = { saveContext }
        />;
    }
}

export default Canvas;
