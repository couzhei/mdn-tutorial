const prompt = require('prompt-sync')();

// define a new variable
if (true){
    var a = 3;
    let c = 2
}



a = a + 2

alert(a);


let b = prompt("Hi! How are you?");

// console.log(c)
console.log(b)

let language = "javascript"
language = 'JavaScript'
let message = "Let's learn: \nWell,"
message = message + ` ${language}`

console.log(message)

/* all the below are Number data types. It takes 
value between 2 ** 53 - 1 and - (2 ** 53 - 1) */

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

let bigNr = 90071992547409920n; //this one is BigInt

let objectIsDeleted = false; //Boolean types

// first prints true, and the next prints false
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

//prints undefined
let unassigned;
console.log(unassigned);

unassigned = undefined

// both print true
let unassigned1, unassigned2;
console.log("Hard-coded vs not", unassigned === unassigned1)
console.log("2 unassigned ones", unassigned1 === unassigned2)

// this outputs object
let unknown = null
console.log(typeof unknown)
/* This is a bug that has been there since forever and now cannot be removed due to
backward compatibility problems. */

// funny part
console.log("2" * 2) //4
console.log(2 * "2") //4
console.log(2 + "2") //22
console.log("2" + 2) //22
/* Luckily, we do not need to rely on JavaScript's 
behavior when converting data types. */


// Conversion
String()
Number()
Boolean() /* This will be true for everything except for null, undefined,
0 (number), an empty string, and NaN */

Number(null); Number("") // both outputs 0
/* As you can see, an empty string and null will both result in the number 0. This is
a choice that the makers of JavaScript made, which you will have to know—it can
come in handy at times when you want to convert a string to 0 when it is empty
or null. */

// you remember these in C++?? i++, ++j, and k **= 4 (k to the power of 4) 

// Logical Operators:
// == value checker, === strictly equality checker
// != and !== too
// and is && like C++
// or is || 
// not !()

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

// arrays by default can be extended or increased in number of elements
// const for array does allow adding more elements or changing existing ones
// but it doesn't let you redefine  the whole array
colors[5] = "purple"
colors
colors[-1] = "gray"
colors.length

const fixed_arr = [1, 2]
fixed_arr[2] = 3
fixed_arr = [1]

/*append elements, the value gets added to the end of the array. The push method returns the new
length of the array, four in this case. You can store this length in a variable like this:
let lengthOfFavoriteFruits = favoriteFruits.push("lime");*/
let arr = [0, 1]
arr.push(2);
arr;
arr.splice(2, 0, "2", "3", false);
arr;

/*If you were to increase the second parameter to a number higher than our array, it
would not affect the result as JavaScript would simply stop as soon as it runs out of
values to delete. */

//extend
arr2 = [false, true, "whore"];
arr3 = arr.concat(arr2);
arr3;
arr.concat("bitch", "whore", "slut");

//deleting elements just like pop() method for lists in python
arr.pop();

//Deleting the first element can be done with shift().
arr.shift()

//or using slpice telling it to delete j elements from i-th position
//arr.splice(i, j)

arr.splice(2, 4);
arr;

//if you want to have fixed-len array use `delete`

delete arr[1];
arr;
// <1 empty item> appears

/** .indexOf() method returns
the index on which the value is found. If a value occurs in an array more than once,
it will return the first occurrence. If the value is not found, it will return -1: */

arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

/* .find() slightly unintuitive*/
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

//sorting
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
names; // it changes the array itself


//create an empty array to use as a shoping list
shoping_list = [];
// adding milk apples and bread
shoping_list = shoping_list.concat("Milk", "Bread", "Apples");
// update bread with bananas and eggs
shoping_list.splice(
    shoping_list.indexOf("Bread"), 1, "Bananas", "Eggs"
    );
shoping_list;
// 4. Remove the last item from the array and output it into the console.
shoping_list.pop();
// 5. Sort
shoping_list.sort();
// 6. Find and output the index of "Milk"
console.log(shoping_list.indexOf("Milk"));
// After Bananas add Carrots and Lettuce
shoping_list.splice(
    shoping_list.indexOf("Bananas") + 1, 0, "Carrot", "Lettuce"
);
shoping_list;
// New list
new_arr = ["Juice", "Pop"];
// Add the new list twice to the end of the first list
shoping_list = shoping_list.concat(new_arr, new_arr);
// how to get the last index value of "Pop" ??
// 1. using lastIndexOf
shoping_list.lastIndexOf("Pop");
shoping_list.length - shoping_list.reverse().indexOf("Pop") - 1;
shoping_list.reverse();

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

// if statements like C++ as well as ternary operators
// operand1 ? operand2 : operand3;
// let accesss = age < 18? "denied" : "allowed";


activity = prompt("What is your activity?")


switch(activity) {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break;
    case "Drive home":
    console.log("It is 5:00PM");
    break;
    case "Dinner":
    console.log("It is 6:30PM");
    break;
    default:
    // code to be executed when no cases match
    break;
}

// loops
/**
 * do {
 * } while (exp);
 * 
 * for (initialize; condition; statement) {
 * 
 *     (let i = 0   ; i  <  10  ;   i++ )
 * }
 * 
 */

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let name of names){
    console.log(name);
}

for (let name in names){
    console.log(name);
}

// don't forget about break and continue

//functions??? with default parameters
function sayinghellofunction(name = "stranger!"){
    //content of the function
    console.log(`Hello ${name}`);
    }

//Arrow functions
// (param1, param2) => body of the function;
// Or for no parameters:
// () => body of the function;
// Or for one parameter (no parentheses are needed here):
// param => body of the function;
// Or for a multiline function with two parameters:
// (param1, param2) => {
// // line 1;
// // any number of lines;
// };

let doingArrowStuff = x => console.log(x);
let say_hi = () => console.log("Hello world!");
say_hi; say_hi();

//spread operator (three dots ...)and rest parameter 

function add_numbers(...numbers) {
    let total = 0;
    for (let number of numbers){
        total += number;
    }
    console.log(total);
}

add_numbers(...[1,2,3,4,5,6,7,8,9,10]);
//without ... returns odd value!!!


function someFunction(param1, ...param2) {
    console.log(param1, param2);
    }
someFunction("hi", "there!", "How are you?");

// The function parameters dont use let or var
function doingStuff() {
    if (true) {
    console.log(x);
    let x = "local";
    }
}
doingStuff();
function doingStuff() {
    if (true) {
    console.log(x);
    var x = "local";
    }
}
doingStuff();

// const is like let and block-scoped (var is function-scoped)
let x = "global";
function doingStuff() {
    let x = "local";
    console.log(x);
}
doingStuff();
console.log(x);

console.log(yi);
if (true) {
    var yi = "Bitch";
    let sin = "Whore";
}
console.log(yi);

let x = "global";

function doingStuff(x){
    console.log(x);
}

doingStuff("Whore");
x;
// one last bitchy behavior
function confuseReader() {
    x = "Guess my scope...";
    console.log("Inside the function:", x);
}
confuseReader();
console.log("Outside of function:", x);

/**
 * There is no declaration of x above the code; this is all the code of the program. 
 * JavaScript does not see let or var and then decides, "this must be a global vari-
 * able." Even though it gets defined inside the function, the declaration of x with-
 * in the function gets global scope and can still be accessed outside of the function.

We really want to emphasize that this is a terrible practice. If you need a global 
variable, declare it at the top of your file. 
 */

// immediately invoked function expression (IIFE)

(function () {
    console.log("IIFE!");
})();

function factorial(n) {
    if (n === 0) { return 1; }
    else if (n === 1) { return 1;}
    else {return n * factorial(--n);}
}


factorial(5);

function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
    }
}
doOuterFunctionStuff(2);

// Anonymous functions
let anon_func = function (arg) { console.log(arg);}

anon_func(5);

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
    };
// 1000ms (one second)
setTimeout(youGotThis, 2000);
setInterval(youGotThis, 500);

// // What value is output into the console?
// var val = 10;
// function tester(val){
//     val += 10;
//     if(val < 100){
//         return tester(val); 
//     }
//     return val;
// }
// tester(val);
// console.log(val);

(function () {
    console.log("Hello");
    })();

let testFunction /* without parantheses this time */ = function(){
    console.log("Hello");
    }();

(function () {
    console.log("Welcome");
})();
(function () {
    let firstName = "Laurence";
})();
let result = (function () {
                let firstName = "Laurence";
                return firstName;
            })();
console.log(result);
(function (firstName) {
    console.log("My Name is " + firstName);
})("Laurence");

let test2 = (num) => num + 5;
console.log(test2(14)); // nodejs keeps logging undefined 
// so since its behaviour closely matches REPL in python
// why not using without console.log()??
test2(50);

// Classes
delete (instance_of_dog1, instance_of_dog2, Dog, dog);


function dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}

let instance_of_dog1 = new dog("Jacky", 30, "brown", "labrador");

class Dog {
    constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    }
}
// The new word is what tells JavaScript to look for the special constructor function in
// the Dog class and create a new object
let instance_of_dog2 = new Dog("JavaScript", 2.4, "brown", "chihuahua");

for (let dog in [instance_of_dog1, instance_of_dog2]){
    console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,"kg.");
}

class Person {
    
    constructor(firstname, lastname) {
        #firstname;
        #lastname;
        if(firstname.startsWith("M")){
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
            this.#lastname = lastname;
    }


    // with these functions we have now access to the value of 
    // our properties
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        this.#firstname = firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
    
}

let p = new Person("Maria", "Saga");
console.log(p.firstname);

//inheritance:
// class Motorcycle extends Vehicle {

// adding a function to an already defined class
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
}

Person.prototype.favoriteColor = "green";

/**And it will be as if you had defined the class with a favorite color holding a
default value, and a function, introduce. This means that overwriting them for a 
certain instance doesn't overwrite them for all instances. For example, if we 
were to have a second Person object, this person could overwrite the favoriteColor 
value and this wouldn't change the value for our object with firstname as Maria.*/