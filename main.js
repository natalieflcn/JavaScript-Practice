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
btn.addEventListener('click', (event) => {
    event.preventDefault(); //prevents the form from submitting so you can see what's happening in the console
   
    console.log(event.target); //returns info about the element the event is attached to
    console.log(event.target.className); //returns the class name of target element

    document.querySelector('#my-form').style.background = '#ccc'; //changes the form background color on click
    document.querySelector('body').classList.add('bg-dark'); //adds the 'bg-dark' css class to the body on click

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});