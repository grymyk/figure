class Curve {
    constructor(context) {
        this.context = context;
    }

    moveTo(x, y) {
        this.context.moveTo(x, y)
    }

    beginPath() {
        this.context.beginPath();
    }

    closePath() {
        this.context.closePath();
    }

    stroke() {
        this.context.stroke();
    }

    drawSymmetricCurve(origin, options) {
        let cpx = origin.x * 2 - options.cpx;
        let x2 = origin.x * 2 - options.x2;

        this.context.quadraticCurveTo(cpx, options.cpy, x2, options.y2);
    }

    drawCurve(options) {
        this.context.quadraticCurveTo(options.cpx, options.cpy, options.x2, options.y2);
    }

    eraseSqure(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    }

    eraseSymmetricSqure(origin, options) {
        let x = origin.x * 2 - options.x - options.width;

        this.context.clearRect(x, options.y, options.width, options.height);
    }

    drawBeastSpace(options) {
        this.context.quadraticCurveTo(options.cpx, options.cpy, options.x2, options.y2);
    }

    eraseAll() {
        let canvas = this.context.canvas;

        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export {Curve};