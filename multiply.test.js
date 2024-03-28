import {multiply} from "./multiply";


test('multiply ', () => {
    const res = multiply(3, 2)

    expect(res).toBe(6)
})
