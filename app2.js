console.log("hi");

class Person {
    constructor() {
        console.log("constructor is called");
        this.name = "PREM";
    }

    show() {
        console.log("show is called");
        console.log(`My Name is ${this.name}`);
    }
}

const p1 = new Person();
p1.show();

const p2 = new Person();
p2.show();

console.log(p1);

// a method can be stored in a variable
const s1 = p1.show;
const myObj = { name: "Jack"};
s1.call(myObj);
s1.call({name: "Jake"});

let name = "Unique";
const s3 = p1.show;
s3.call(myObj);