import { Calculator } from "./calculator";

describe("Incubyte TDD Assesment", () => {
    let calculator: Calculator;
    beforeEach(() => calculator = new Calculator())

    test("should return 0 for an empty string", () => {
        expect(calculator.calculate("")).toBe(0);
    });

    test("should return the number itself if there is only one  number", () => {
        expect(calculator.calculate("1")).toBe(1);
    });

    test("should return the sum of two numbers", () => {
        expect(calculator.calculate("1,3")).toBe(4);
    });

    test("should return the sum of two numbers with default delimiters ', and \n'", () => {
        expect(calculator.calculate("1,3")).toBe(4);
        expect(calculator.calculate("1\n3")).toBe(4);
    });

})