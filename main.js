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

