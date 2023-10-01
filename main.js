//Working with the console
console.log("Hello world..");
console.error("My tummy hurts!");

//Variable Types
let x = 10;
x = 44;
console.log(x);

const y = 22;
console.log("Constants can't be changed.." + y);

    //Strings, Numbers, Boolean, null, undefined
    const name = "Natalie";
    const age = 23;
    const isCool = true;
    const rating = 8.7;
    const z = null;
    const u = undefined;
    let f;

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof isCool);
    console.log(typeof rating);
    console.log(typeof z);
    console.log(typeof u);
    console.log(typeof f);

    //Concatenation
    console.log("My name is age and I am age");
    console.log("My name is " + name + " and I am " + age);
    console.log(`My name is ${name} and I am ${age}`); //Template String
    const hello = `My name is ${name} and I am ${age}`;
    console.log(hello);

//String Operations
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase()); //methods need parentheses ()
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase()) //you can chain operations on each other
console.log(s.split(''));

//Arrays -- variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
fruits[3] = 'grapes'; //adding grapes to end of array
console.log(fruits);
fruits.push('strawberry'); //adding strawberry to end of array
console.log(fruits);
fruits.unshift('blueberry'); //adding blueberry to front of array
console.log(fruits);
fruits.pop(); //removing last fruit from array
console.log(fruits);
console.log(Array.isArray(fruits)); //checking if fruits is an array


const moreFruits = ['mangoes', 444, 'kiwi', true]; //you can have multiple data types in an array
console.log(moreFruits);

console.log(moreFruits.indexOf('mangoes'));