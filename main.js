const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    //This if statement ensures both fields are entered
    if(nameInput.value === '' || emailInput.value === ''){
       // alert('Please enter fields'); //however, alerts are not recommended bc it stops your code
       msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields';

       setTimeout(() => msg.remove(), 3000); //after 3 seconds, this error message goes away
    } else {
        console.log('Success!');

        const li = document.createElement('li'); //creates a (list) element out of nowhere
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li); //adds new list element to userList

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

    console.log(nameInput.value); //the value attribute will get you the actual value
}