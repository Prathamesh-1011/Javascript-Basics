// spread operator

const numberList = [1,2,3,4,];

console.log(numberList);

const largeList = [numberList , 20, 30];

console.log(largeList);

const largeList1 = [...numberList , 20, 30];

console.log(largeList1);

function addThen(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

console.log(addThen(...numberList));

const cities = ["Nagpur", "Pune"];
const villages = ["Katol", "Umred"];

const allList = [...cities, ...villages];
console.group(allList);

// rest operator

function sumList(numArray) {
    let sum = 0;
    numArray.forEach(num => {
        sum = sum + num;
    });
    return sum;
};
console.log(sumList([1,2,3]));