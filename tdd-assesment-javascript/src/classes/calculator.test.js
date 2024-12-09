import { Calculator } from "./calculator";

describe("Incubyte TDD Assesment", () => {
    let calculator;
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

    test("should handle custom delimiters", () => {
        expect(calculator.calculate("//-\n1-2-3")).toBe(6);
        expect(calculator.calculate("//;\n1;2;3")).toBe(6);
        expect(calculator.calculate("//|\n1|2|3")).toBe(6);
    });

    test("should throw an error for negative numbers when negative numbers are disallowed", () => {
        expect(() => calculator.calculate("1,-2,-3")).toThrow(
            "Negative numbers not allowed: -2, -3"
        );
    });

    test("should return the sum of negative values also if negative numbers are allowed", () => {
        const calc = new Calculator({ operation: "add", allowNegative: true })
        expect(calc.calculate("2,4,-2")).toBe(4);
    });

    test("should handle multiple numbers", () => {
        expect(calculator.calculate("1,2,3,4,5,20,10,100,50")).toBe(195);
    });

    test("should handle multiple delimiters", () => {
        expect(calculator.calculate("1,2\n3\n4\n1,1")).toBe(12);
    });

    test("should handle special delimiters", () => {
        expect(calculator.calculate("//$\n1$2$3")).toBe(6);
    });
    test("should handle multiple custom delimiters", () => {
        expect(calculator.calculate("//$-\n1$2-3")).toBe(6);
    });

    test("should support multi-character custom delimiters", () => {
        expect(calculator.calculate("//*^\n1*^2*^3")).toBe(6);
    });

    test("should ignore non mumeric values and return the result", () => {
        expect(calculator.calculate("a,b,c")).toBe(0);
        expect(calculator.calculate("1,2,a,b,c,3")).toBe(6);
    });

    test("should handle space as delimiter", () => {
        expect(calculator.calculate("// \n2 2 3")).toBe(7);
    });


})