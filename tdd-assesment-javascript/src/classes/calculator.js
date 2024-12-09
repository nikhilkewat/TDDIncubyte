
export class Calculator {


    constructor(options = { operation: "add", allowNegative: false }) {
        this.operation = options.operation;
        this.allowNegative = options.allowNegative;
    }
    calculate(values) {

        if (!values) return 0;

        const { numbers, nNumbers } = this.parseValues(values);

        if (nNumbers.length > 0 && !this.allowNegative) {
            throw new Error(`Negative numbers not allowed: ${nNumbers.join(", ")}`);
        }
        else if (numbers.length <= 0) return 0;
        else if (numbers.length === 1) return numbers[0];
        else
            return numbers.reduce((sum, num) => sum + num, 0);

    }

    parseValues(value) {
        // let delimiter = /,|\n/;
        let delimiter = [",", "\n"];
        let numberString = value;

        if (value.startsWith("//")) {
            const match = value.match(/^\/\/(.+)\n/);
            if (match) {
                // delimiter = new RegExp(`[${match[1]}]`);
                // numberString = value.split("\n").slice(1).join("\n");

                numberString = numberString.slice(match[0].length);
                const customDelimiters = match[1]
                    .replace(/^\[|\]$/g, "") // Remove enclosing brackets
                    .split("]["); // Handle multiple delimiters
                delimiter = delimiter.concat(customDelimiters);
            }
        }

        const regex = new RegExp(`[${delimiter.join("")}]`);
        const numbers = numberString
            .split(regex)
            .map((num) => parseInt(num.trim(), 10))
            .filter((num) => !isNaN(num));

        const negativeNumbers = numbers.filter((num) => num < 0);

        return { numbers, nNumbers: negativeNumbers };
    }
}









