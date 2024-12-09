type Operation = "add" | "subtract" | "mutiply";

interface Options {
    operation: Operation,
    allowNegative: boolean
}

export class Calculator {
    private operation: Operation;
    private allowNegative: boolean;
    //default delimiter
    private delimiterRegex = /,|\n/;

    constructor(options: Options = { operation: "add", allowNegative: false }) {
        this.operation = options.operation;
        this.allowNegative = options.allowNegative;
    }


    calculate(values: string): number {

        if (!values) return 0;
        return 0;
    }
}
