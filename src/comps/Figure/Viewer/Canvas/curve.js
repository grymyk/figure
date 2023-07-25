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
        const { cpy, y2 } = options;

        const cpx = origin.x * 2 - options.cpx;
        const x2 = origin.x * 2 - options.x2;

        this.context.quadraticCurveTo(cpx, cpy, x2, y2);
    }

    drawCurve(options) {
        const { cpx, cpy, x2, y2 } = options;

        this.context.quadraticCurveTo(cpx, cpy, x2, y2);
    }

    eraseSqure(options) {
        const { x, y, width, height } = options;

        this.context.clearRect(x, y, width, height);
    }

    eraseSymmetricSqure(origin, options) {
        const { y, width, height } = options;
        const x = origin.x * 2 - options.x - width;

        this.context.clearRect(x, y, width, height);
    }

    drawBeastSpace(options) {
        const { cpx, cpy, x2, y2 } = options;

        this.context.quadraticCurveTo(cpx, cpy, x2, y2);
    }

    eraseAll() {
        const { canvas: { height, width }} = this.context;

        this.context.clearRect(0, 0, width, height);
    }
}

export { Curve };
