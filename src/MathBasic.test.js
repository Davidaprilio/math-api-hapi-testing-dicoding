const MathBasic = require('./MathBasic')

describe('A MathBasic', () => {
    it('should contains add, subtract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add')
        expect(MathBasic).toHaveProperty('subtract')
        expect(MathBasic).toHaveProperty('multiply')
        expect(MathBasic).toHaveProperty('divide')
        
        expect(MathBasic.add).toBeInstanceOf(Function)
        expect(MathBasic.subtract).toBeInstanceOf(Function)
        expect(MathBasic.multiply).toBeInstanceOf(Function)
        expect(MathBasic.divide).toBeInstanceOf(Function)
    })

    describe('A add function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.add()).toThrowError()
            expect(() => MathBasic.add(1)).toThrowError()
            expect(() => MathBasic.add(1,2,3)).toThrowError()
            expect(() => MathBasic.add(1,2,3,4)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.add('1', '2')).toThrowError();
            expect(() => MathBasic.add(true, {})).toThrowError();
            expect(() => MathBasic.add(null, false)).toThrowError();
        });

        it('should return a + b when given two number parameters', () => {
            expect(MathBasic.add(2, 2)).toEqual(4);
            expect(MathBasic.add(16, 8)).toEqual(24);
            expect(MathBasic.add(3, 7)).toEqual(10);
        });
    })

    describe('A subtract function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.subtract()).toThrowError()
            expect(() => MathBasic.subtract(1)).toThrowError()
            expect(() => MathBasic.subtract(1,2,3)).toThrowError()
            expect(() => MathBasic.subtract(1,2,3,4)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.subtract('1', '2')).toThrowError();
            expect(() => MathBasic.subtract(true, {})).toThrowError();
            expect(() => MathBasic.subtract(null, false)).toThrowError();
        });

        it('should return a - b when given two number parameters', () => {
            expect(MathBasic.subtract(2, 2)).toEqual(0);
            expect(MathBasic.subtract(16, 8)).toEqual(8);
            expect(MathBasic.subtract(3, 7)).toEqual(-4);
        });
    })

    describe('A multiply function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.multiply()).toThrowError()
            expect(() => MathBasic.multiply(1)).toThrowError()
            expect(() => MathBasic.multiply(1,2,3)).toThrowError()
            expect(() => MathBasic.multiply(1,2,3,4)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.multiply('1', '2')).toThrowError();
            expect(() => MathBasic.multiply(true, {})).toThrowError();
            expect(() => MathBasic.multiply(false, false)).toThrowError();
        });

        it('should return a x b when given two number parameters', () => {
            expect(MathBasic.multiply(2, 2)).toEqual(4);
            expect(MathBasic.multiply(4, 3)).toEqual(12);
            expect(MathBasic.multiply(19, 5)).toEqual(95);
        });
    })

    describe('A divide function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.divide()).toThrowError()
            expect(() => MathBasic.divide(1)).toThrowError()
            expect(() => MathBasic.divide(1,2,3)).toThrowError()
            expect(() => MathBasic.divide(1,2,3,4)).toThrowError()
        })

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.divide('1', '2')).toThrowError();
            expect(() => MathBasic.divide([], {})).toThrowError();
            expect(() => MathBasic.divide(false, undefined)).toThrowError();
        });

        it('should return a : b when given two number parameters', () => {
            expect(MathBasic.divide(2, 2)).toEqual(1);
            expect(MathBasic.divide(50, 5)).toEqual(10);
            expect(MathBasic.divide(18, 2)).toEqual(9);
        });
    })
})