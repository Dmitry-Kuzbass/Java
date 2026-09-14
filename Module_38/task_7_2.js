function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Неизвестный оператор";
    }
}

const contextObj = {};

const args = [2, 3, "+"];

const result = calculate.apply(contextObj, args);

console.log(result); // Выведет: 5
