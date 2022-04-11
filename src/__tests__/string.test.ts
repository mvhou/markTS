import * as S from '../string'
import { capitalizeTests, padFrontTests } from '../test-utilities/string-tests'
import { testInOut } from '../test-utilities/test-utils'

describe("capitalize", () => {
    capitalizeTests.forEach((t:testInOut) => {
        test(`capitalize(${t.input} to equal ${t.output})`, () => {
            expect(S.capitalize(t.input)).toStrictEqual(t.output);
        })
    })
})

describe("padFront", () => {
    padFrontTests.forEach((t:testInOut) => {
        test(`padFront(${t.input[0], t.input[1], t.input[2]} to equal ${t.output})`, () => {
            expect(S.padFront(t.input[0], t.input[1], t.input[2])).toStrictEqual(t.output)
        })
    })
})