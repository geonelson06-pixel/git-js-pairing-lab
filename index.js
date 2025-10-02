//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
fiveToOneHundred();


const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}
multiplesOfThree();


const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
        else if (i % 5 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThreeOrFive();

const unitlNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
unitlNum(5);


const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(multiply(5, 4));

const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    else {
        return num1 + num2;
    }

}
console.log(add(3, 3));


const isNegative = (num) => {
    if (num < 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNegative(4));