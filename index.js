//Code your solutions in this file
//Problem 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
fiveToOneHundred();

//Problem 2
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}
multiplesOfThree();

//Problem 3
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

//Problem 4
const unitlNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
unitlNum(5);

//Problem 5
const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(multiply(5, 4));

//Problem 6
const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    else {
        return num1 + num2;
    }

}
console.log(add(3, 3));

//Problem 7
const isNegative = (num) => {
    if (num < 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNegative(4));


//Problem 8
const triangleArea = (b, h) => {
    return (b * h) / 2;
}
console.log(triangleArea(5, 7));


//Problem 9
const betweenTwentyAndForty = (n) => {
    if (n >= 20 && n <= 40) {
        return true;
    }
    else {
        return false;
    }
}
console.log(betweenTwentyAndForty(10));


//Problem 10
const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(largest(30, 22, 17));










//Problem 14
const absoluteNineteen = (n) => {
    return Math.abs(n - 19);
}

console.log(absoluteNineteen(5));


//Problem 15
const switchLetters = (word) => {
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    const midChars = word.substring(1, word.length - 1);
    const newWord = lastChar + midChars + firstChar;

    console.log(newWord);
}
switchLetters("Bobby");


//Problem 16
const changeString = (word) => {
    let newWord = '';
    const abcs = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < abcs.length; j++) {
            if (word[i] === abcs[j]) {
                newWord += abcs[j + 1];
            }
            else if (word[i] === upper[j]) {
                newWord += upper[j + 1];
            }
        }

    }
    console.log(newWord);
}
changeString("Turkey");



