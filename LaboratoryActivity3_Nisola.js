// Problem 1: Grade Calculator
function calculateGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "Invalid";
    }
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let baseNumber = 7;
let score = baseNumber * 10 + 5;
console.log("Problem 1: Grade Calculator");
console.log("Score:", score, "Grade:", calculateGrade(score));


// Problem 2: Star Pattern
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

let rows = baseNumber + 2; // base + 2
console.log("Problem 2: Star Pattern");
showStars(rows);


// Problem 3: Prime Number Checker
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let numberToCheck = baseNumber + 10;
console.log("Problem 3: Prime Number Checker");
console.log("Is", numberToCheck, "prime?", isPrime(numberToCheck));


// Problem 4: Multiplication Table
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

console.log("Problem 4: Multiplication Table of " + baseNumber);
multiplicationTable(baseNumber);