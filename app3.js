const show = function(num1) {
    console.log(`Number is ${num1}`);
    return num1 + 2;
}

const num2 = show(3);
console.log(`Number is now ${num2}`);

const addMe = function(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

const addOne = addMe(1);
const addTwo = addMe(2)
const num = addOne(6);
console.log(num);
console.log(addTwo(4));

const addThen = function(num1 , num2){
    return num1 + num2;
}

console.log(addMe(1)(2));