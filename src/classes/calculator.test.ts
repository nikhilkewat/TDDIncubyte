import { Calculator } from "./calculator";

describe("Incubyte TDD Assesment", () => {

    test("should return 0 for an empty string", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("")).toBe(0);
    })
})