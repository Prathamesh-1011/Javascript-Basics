function doThis() {
    console.log("Do This");
}
doThis();

(function(){
    console.log("Done This");
})();

(function(name){
    console.log(`Name is ${name}`);
})("Prem");

((name) => {
    console.log(`Name is ${name}`);
})("Jack");

const person = (() => {
    let myName = "June"; 
    return {
        name : "Jake",
        getName: () => {return myName;},
        setName: (name) => {myName = name;},
    };
})();
console.log(person);
person .setName("Park Seo Jun");
console.log(person.getName());