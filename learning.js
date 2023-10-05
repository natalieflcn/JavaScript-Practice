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
const color = p < 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

//Functions
function addNums(num1, num2) {
    console.log(num1+num2);
}

addNums(4,5);

function addNums2(num1 = 1, num2 = 2) { //you can set default values for parameters in functions
    console.log(num1+num2);
}
addNums2(); //default values will be used
addNums2(3,6); //new values will overwrite default values

//arrow functions
const addNums3 = (num1 = 2, num2 = 4) => {
    return num1 + num2;
} //this arrow function simplifies the syntax of the function
console.log(addNums3());

const addNums4 = (num1, num2) => num1 + num2;
console.log(addNums4(2,4)); // you can return something on a single line, no return statement and no curly brackets

const addNums5 = num1 => num1 + 2;
console.log(addNums5(1)); //if you have one parameter, you don't need parentheses

todos.forEach((todo) => console.log(todo));

//object oriented programming
//Constructor function
function Person(firstName, lastName, dob) { //constructor functions start with a capital letter
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //Javascript has a date constructor
}

//Instantiate object
const newPerson = new Person("John", "Doe", "1-1-1990");
console.log(newPerson);

// Single element selectors
const form = document.getElementById('my-form'); //this selects a single element with the ID
console.log(document.querySelector('h1')); //this selects the first element in the query (classes, tags, anything)


// Multi-element selectors
console.log(document.querySelectorAll('.item')); //this selects all elements that satisfy the query
                                                 //returns a node list of said elements

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//Manipulating the DOM (Document Object Model) -- User Interface
console.log('Now, we\'re moving on and manipulating the DOM');
const ul = document.querySelector('.items');


//ul.remove(); //removes everything stored in the 'ul' constant
//ul.lastElementChild.remove(); //removes the last element of the 'ul' constant
ul.firstElementChild.textContent = 'Hello'; //changes the first element's content to 'hello'
ul.children[1].innerText = 'Brad'; //changes the children[1].text to value
ul.children[0].innerHTML = '<h1>Hello</h1>'; //changes the HTML of children[0]

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Events
/*
    Mouse Events:
    'click' - an event will happen when a button is clicked
    'mouseover' - an event will happen when hovering over a button
    'mouseout' - an event will happen when hovering over a button and leaving
*/

btn.addEventListener('click', (event) => {
    event.preventDefault(); //prevents the form from submitting so you can see what's happening in the console
   
    console.log(event.target); //returns info about the element the event is attached to
    console.log(event.target.className); //returns the class name of target element

    document.querySelector('#my-form').style.background = '#ccc'; //changes the form background color on click
    document.querySelector('body').classList.add('bg-dark'); //adds the 'bg-dark' css class to the body on click

    //changes the last 'item' element into a h1 tag that says Hello on click
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
