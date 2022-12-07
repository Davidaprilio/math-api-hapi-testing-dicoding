const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('when GET /subtract', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
            // Arrange
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic, 'subtract');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4); // a - b
            expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('when GET /multiply', () => {
        it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 10;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(100); // a x b
            expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('when GET /divide', () => {
        it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
            // Arrange
            const a = 100;
            const b = 2;
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(50); // a : b
            expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('when GET /rectangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
            // Arrange
            const length = 20;
            const width = 10;
            const figureCalculator = new FigureCalculator(MathBasic)
            const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
            const server = createServer({ figureCalculator });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60);
            expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
        });
    });

    describe('when GET /rectangle/area', () => {
        it('should respond with a status code of 200 and the payload value is the result of calculating the area of the rectangle correctly', async () => {
            // Arrange
            const length = 8;
            const width = 4;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(32); // length * width
            expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
        });
    });

    describe('when GET /triangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the triangle correctly', async () => {
            // Arrange
            const sideA = 8;
            const sideB = 9;
            const base = 5;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(22); // sideA + sideB + base
            expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
        });
    });

    describe('when GET /triangle/area', () => {
        it('should respond with a status code of 200 and the payload value is the result of calculating the area of the triangle correctly', async () => {
            // Arrange
            const base = 8;
            const height = 10;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
            const server = createServer({ figureCalculator });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${base}/${height}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(40); // (base * height) / 2
            expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
        });
    });
});