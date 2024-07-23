//====================QUESTION 01=====================//
function displayCurrentDateTime() {
    var currentDate = new Date();
    console.log(currentDate);

    document.write("Current date and time: " + currentDate + "<br>");

}
displayCurrentDateTime();

//====================QUESTION 02=====================//
function fullName() {
    var firstName = prompt("Enter first name..");
    var lastName = prompt("Enter last name..");
    alert("Hi! " + firstName + " " + lastName);
}
fullName();
//====================QUESTION 03=====================//
function sumOfNumbers() {
    var firstNum = +prompt("Enter first number..");
    var secondNum = +prompt("Enter second number..");
    var sum = firstNum + secondNum;
    document.write(sum);
}
sumOfNumbers();
//====================QUESTION 04=====================//
function calculator(firstNum, secondNum, operator) {
    var result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break; case '*':
            result = firstNum * secondNum;
            break; case '/':
            result = firstNum / secondNum;
            break; case '%':
            result = firstNum % secondNum;
            break;

        default:
            result = "Invalid Operator";
    }
    return result;
}
var firstNum = +prompt("Enter first number..");
    var secondNum = +prompt("Enter second number..");
    var operator = prompt("Enter operator..(+, -, *, /, %): ")
    result = calculator(firstNum, secondNum, operator);
    document.write("The result is: " + result + "<br>");
//calculator();
//====================QUESTION 05=====================//
function square(number){
    return number * number;
}
var number = +prompt("Enter a number to square: ");
var result = square(number);
document.write("The square of " + number + " is: " + result + "<br>")
//====================QUESTION 06=====================//
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    var result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
var num = prompt("Enter a number to compute its factorial:");
var result = factorial(num);
document.write("The factorial of " + num + " is: " + result + "<br>");

//====================QUESTION 07=====================//
