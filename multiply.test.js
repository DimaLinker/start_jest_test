import {multiply} from "./multiply";
import expect from "expect";

describe('multiply', () => {
    it('should multiply positive numbers', () => {
        const res = multiply(3, 2)

        expect(res).toBe(6)
    });

    it('should multiply negative numbers', () => {
        const res = multiply(-3, -2)

        expect(res).toBe(6)
    });

    it('should multiply positive and negative numbers', () => {
        const res = multiply(-3, 2)

        expect(res).toBe(6)
    })


})

