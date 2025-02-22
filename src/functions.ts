/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    temperature = ((temperature - 32) * 5) / 9;
    return temperature;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    const arr = [first, second, third];
    let i = 0;
    let total = 0;
    while (i < 3) {
        if (arr[i] > 0) {
            total = arr[i] + total;
            i++;
        }
        if (arr[i] < 0) {
            i++;
        }
    }
    return total;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const final = message.toUpperCase() + "!";
    return final;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const checker: boolean = message.endsWith("?");
    return checker;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `faasdflse`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word == "yes" || word == "Yes" || word == "YES") {
        return true;
    }
    if (word == "no" || word == "No" || word == "NO") {
        return false;
    } else {
        return null;
    }
}
