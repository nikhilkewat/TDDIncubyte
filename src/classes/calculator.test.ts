import { Calculator } from "./calculator";

describe("Incubyte TDD Assesment", () => {

    const calculator = new Calculator();

    test("should return 0 for an empty string", () => {
        expect(calculator.calculate("")).toBe(0);
    });

    test("should return the number itself if there is only one  number", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("1")).toBe(1);
    });

})