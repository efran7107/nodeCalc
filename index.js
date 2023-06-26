var rs = require('readline-sync');

function operation() {
    var valid = false;
    var operator;
    while (!valid) {
        operator = rs.question("What operation would you like to perform? +, -, *, /: ");
        if ((operator == "+") || (operator == "-") || (operator == "*") || (operator == "/")) {
            valid = true;
            return operator;
        } else {
            console.log("That is not a valid operation.");
            valid = false;
        }
    }
}

function firstNumber() {
    var valid = false;
    var num;
    while (!valid) {
        num = rs.question("Please enter the first number: ");
        var numCheck = Number.isInteger(Number(num));
        if (numCheck == false) {
            console.log("This is not a number!");
            valid = false;
        } else {
            valid = true;
            return Number(num);
        }
    }
}

function secondNumber() {
    var valid = false;
    var num;
    while (!valid) {
        num = rs.question("Please enter the second number: ");
        var numCheck = Number.isInteger(Number(num));
        if (numCheck == false) {
            console.log("This is not a number!");
            valid = false;
        } else {
            valid = true;
            return Number(num);
        }
    }
}

let operate = operation();
let fstNum = firstNumber();
let sndNum = secondNumber();
let result;

switch (operate) {
    case "+":
        result = fstNum + sndNum;
        console.log(`The result is: ${result.toFixed(2)}`);
        break;
    case "-":
        result = fstNum - sndNum;
        console.log(`The result is: ${result.toFixed(2)}`);
        break;
    case "*":
        result = fstNum * sndNum;
        console.log(`The result is: ${result.toFixed(2)}`);
        break;
    case "/":
        result = fstNum / sndNum;
        console.log(`The result is: ${result.toFixed(2)}`);
        break;

}