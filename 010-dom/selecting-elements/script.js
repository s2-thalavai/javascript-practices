
// DOM API provides a set of functions and methods to modify the HTML document dynamically via JavaScript.
// 'root' and 'Root' are different.



// querySelector() Method

const h1 = document.querySelector('h1');
console.log(h1.textContent)
// Hello DOM!

h1.textContent = 'Hi JS';
// Hi JS




// getElementById() Method


// Syntax

// const element = document.getElementById(id);


const elem = document.getElementById("first");

// always returns a single HTML element


// Tasks

// 1. If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.


document.getElementById('footer').innerHTML = 'Copyright';

document.getElementById('footer').innerText = 'Copyright';

document.getElementById('footer').textContent = 'Copyright';



// 2. What will document.getElementById('nonexistent') return?

null


// 3. Can getElementById be used in all browsers?

Yes


// 4. How would you add a class 'active' to an element with the ID 'menu'?

document.getElementById('menu').classList.add('active');

