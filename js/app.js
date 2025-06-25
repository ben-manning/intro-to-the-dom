const titleElement = document.querySelector('#main-title');

// console.dir(titleElement);

const paragraphElement = document.querySelector('.cool');

paragraphElement.textContent = 'The original text is no more!!';

// change the style
titleElement.style.textAlign = 'center';

// function changeMode() {
//   document.body.style.backgroundColor = '';
//   document.body.style.color = 'white';  
// }

// titleElement.addEventListener('click', changeMode);






// Create an element
const bodyElement = document.querySelector('body');

// create an element from scratch
const h2Element = document.createElement('h2'); // did not exist on the page

// add text content to my h2 element
h2Element.textContent = 'Comments section';

// console.log(h2Element);

// add the h2 to the body
bodyElement.appendChild(h2Element);

// grabbing all of the elements
const commentElements = document.querySelectorAll('#comments li');

commentElements.forEach(function(commentElement) {
  commentElement.style.listStyle = 'none';
  commentElement.style.textAlign = 'center';
});


// grab the button
const buttonElement = document.querySelector('button');

buttonElement.setAttribute('id', 'submit');

buttonElement.classList.add('btn');

buttonElement.classList.replace('btn', 'action-button');

// console.log(buttonElement);

