const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const parag = document.createElement('p');
//parag.classList.add('para');
parag.textContent = "Hey I'm red!";
parag.style.color = 'red';

const headerThree = document.createElement('h3');
//headerThree.classList.add('h3');
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = 'blue';

const contentTwoHeader = document.createElement('h1');
//contentTwoHeader.classList.add('contentTwoHeader');
contentTwoHeader.textContent = "I'm in a div";

const contentTwoParag = document.createElement('p');
//contentTwoParag.classList.add('contentTwoParag');
contentTwoParag.textContent = "ME TOO!";

const contentTwo = document.createElement('div');
contentTwo.appendChild(contentTwoHeader);
contentTwo.appendChild(contentTwoParag);
//contentTwo.classList.add('contentTwo');
contentTwo.style['background-color'] = 'pink';
contentTwo.style.border = 'thick solid black';

container.appendChild(content);
container.appendChild(parag);
container.appendChild(headerThree);
container.appendChild(contentTwo);