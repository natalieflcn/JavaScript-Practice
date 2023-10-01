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

console.log(moreFruits.indexOf('mangoes')); //finds index of mangos

//Object Literals
const person = {
    firstName: 'Antonio',
    lastName: 'Falcon',
    age: 30,
    hobbies: ['driving', 'drinking', 'not dancing'],
    address: {
        street: '242 Calle Loiza',
        city: 'Santurce',
        state: 'Puerto Rico'
    }
}

console.log(person);
console.log(person.firstName); //returns first name of person object
console.log(person.firstName, person.lastName); //returns multiple values of persron object
console.log(person.hobbies[2]);

person.email = 'antonio52@gmail.com'; //you can also add new properties like so
console.log(person);

//Arrays of Objects
const todos = [
    {
        id: 0,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 1,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'dentist appointment',
        isCompleted: false
    }
]

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For Loops
for(let i = 0; i < 10; i++) {
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}

//For Of Loop
for(let todo of todos){
    console.log(todo.text); //This is a simpler way to loop through arrays
}

//While Loops
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Array Methods -- forEach, map, filter
//forEach
const forEachTodo = todos.forEach(function(todo){
    console.log(todo.text);
}); //for each todos array object, it will perform the following command (console.log) for each item

//map
const toDoText = todos.map(function(todo){
    return todo.text;
}); //returns an array of todos text items (bc the todo.text was returned for each array object)
console.log(toDoText); 

//filter
const toDoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}); //returns all array objects that meet the "return condition"
console.log(toDoCompleted);

//chaining array methods
const chaining = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
}); //you can chain multiple array objects together
//this instance filters all true booleans in todos, then the text is returned for all those true objects
console.log(chaining);

//If Statements
const num = 10;
if(num == '10') { //the double equal sign "==" will match a string to a num if the value is the same
    console.log('num == 10');
}

//triple equal sign validates data type as well, extra security
if(num === '10') { //the triple equal sign "===" will not match a string to a num bc unequal data type
    console.log('num === 10');
} else if(num > 10){
    console.log('num is greater than 10');
} else {
    console.log('num is not 10');
}

//ternary operator -- shorthand if statement
const p = 10;
const color = p > 10 ? 'red' : 'blue';
console.log(color);