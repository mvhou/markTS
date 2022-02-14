import * as A from './array'

describe('Basic array 1..10', () => {
    const expectedResult = [1,2,3,4,5,6,7,8,9,10];
    test(`should return "${expectedResult}" for A.numArray(1, 10)`, () => {
        expect(A.numArray(1, 10)).toStrictEqual(expectedResult);
    });
});

describe('Basic array 10..20', () => {
    const expectedResult = [10,11,12,13,14,15,16,17,18,19,20];
    test(`should return "${expectedResult}" for A.numArray(10, 20)`, () => {
        expect(A.numArray(10, 20)).toStrictEqual(expectedResult);
    });
});

describe('Reverse array 10..0', () => {
    const expectedResult = [10,9,8,7,6,5,4,3,2,1,0];
    test(`should return "${expectedResult}" for A.numArray(1, 10)`, () => {
        expect(A.numArray(10, 0)).toStrictEqual(expectedResult);
    });
});

describe('Negative array -20..-10', () => {
    const expectedResult = [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10];
    test(`should return "${expectedResult}" for A.numArray(-20, -10)`, () => {
        expect(A.numArray(-20, -10)).toStrictEqual(expectedResult);
    });
});

describe('Negative array reverse -10..-15', () => {
    const expectedResult = [-10,-11,-12,-13,-14,-15];
    test(`should return "${expectedResult}" for A.numArray(-10, -15)`, () => {
        expect(A.numArray(-10, -15)).toStrictEqual(expectedResult);
    });
});

describe('Negative to natural -5..5', () => {
    const expectedResult = [-5,-3,-2,-1,0,1,2,3,4,5];
    test(`should return "${expectedResult}" for A.numArray(-5, 5)`, () => {
        expect(A.numArray(-5, 5)).toStrictEqual(expectedResult);
    });
});

describe('Natural to negative 5..-5', () => {
    const expectedResult = [5,3,2,1,0,-1,-2,-3,-4,-5];
    test(`should return "${expectedResult}" for A.numArray(5, -5)`, () => {
        expect(A.numArray(5, -5)).toStrictEqual(expectedResult);
    });
});