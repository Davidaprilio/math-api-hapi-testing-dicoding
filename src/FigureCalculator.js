class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }

    validateParams(excpect = 2, args) {
        if (args.length !== excpect) {
            throw new Error(`fungsi hanya menerima ${excpect} parameter`);
        }
        args.forEach(value => {
            if (typeof value !== 'number') {
                throw new Error('fungsi hanya menerima parameter number');
            }
        })
        return args;
    }

    calculateRectanglePerimeter(...args) {
        const [length, width] = this.validateParams(2, args);
        
        // formula: (2 * (length + width))
        return this._mathBasic.multiply(
            2, this._mathBasic.add(length, width)
        );
    }

    calculateRectangleArea(...args) {
        const [length, width] = this.validateParams(2, args);

        // formula: (length * width)
        return this._mathBasic.multiply(length, width);
    }

    calculateTrianglePerimeter(...args) {
        const [sideA, sideB, base] = this.validateParams(3, args);

        // formula: (sideA + sideB) + base
        return this._mathBasic.add(
            this._mathBasic.add(sideA, sideB), base
        );
    }

    calculateTriangleArea(...args) {
        const [base, height] = this.validateParams(2, args);

        // formula: (base * height) / 2
        return this._mathBasic.divide(
            this._mathBasic.multiply(base, height), 2
        );
    }
}

module.exports = FigureCalculator;