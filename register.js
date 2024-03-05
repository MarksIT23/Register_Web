console.log("Hello World");
console.error("This is an Error");
console.warn("This is a Warning");

//Variables
// string = "Words", "wowowo", "123"
// number = 123, 434e, 232.12
// boolean = true, false
// object = ["apple", "banana"], [1, 2, 3, 4]

//type of = to check the variable type
console.log(typeof(true))

//let = declaration of a variable
let name = 'Mark',
age = 18,
last = "Santiago"
isStudent = true,
hobbies = ["Gaming", "Playing", "With You"];
let run = function () {
    console.log("Im running");
};

console.log(name, age, isStudent, hobbies, run);
console.log(typeof run);
console.table(hobbies);
console.log("My name is " + name + " " + last );
console.log(`My name is ${name} ${last}`);

