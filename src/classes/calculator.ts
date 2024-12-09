type Operation = "add" | "subtract" | "mutiply";

interface Options {
    operation: Operation,
    allowNegative: boolean
}

export class Calculator {
    private operation: Operation;
    private allowNegative: boolean;
    //default delimiter
    private delimiterRegex = /^\/\/(\[.*?\]|.)\n/;



    constructor(options: Options = { operation: "add", allowNegative: false }) {
        this.operation = options.operation;
        this.allowNegative = options.allowNegative;
    }


    calculate(values: string): number {

        if (!values) return 0;

        const numbers = this.parseValues(values);

        if (numbers.length === 1) return numbers[0];
        else
            return numbers.reduce((sum, num) => sum + num, 0);

        

        return 0
    }

    private parseValues(value: string): number[] {
        let delimiter = /,|\n/;
        let numberString = value;

        if (value.startsWith("//")) {
            const match = value.match(/^\/\/(.+)\n/);
            if (match) {
                delimiter = new RegExp(`[${match[1]}]`);
                numberString = value.split("\n").slice(1).join("\n");
            }
        }

        const numbers = numberString
            .split(delimiter)
            .map((num) => parseInt(num.trim(), 10))
            .filter((num) => !isNaN(num));

        return numbers;
    }
}
