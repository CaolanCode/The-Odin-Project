const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// add p with "Hey I'm red!" in red text
const red_text = document.createElement('p');
red_text.classList.add('red_text');
red_text.textContent = "Hey I'm red!";
red_text.style.color = "red";
container.appendChild(red_text)

// add h3 with blue text "I'm a blue h3"
const blue_h3 = document.createElement('h3');
blue_h3.classList.add('blue_h3');
blue_h3.textContent = "I'm a blue h3";
blue_h3.style.color = "blue";
container.appendChild(blue_h3);

// add div with black border and pink background color
// with a h1 that says "I'm in a div"
// with a p that says "ME TOO!"
const pink_div = document.createElement('div');
pink_div.classList.add('pink_div');
pink_div.style.border = "2px black solid";
pink_div.style.backgroundColor = "pink";

const header = document.createElement('h1');
header.classList.add('header');
header.textContent = "I'm in a div";

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "ME TOO!";

pink_div.appendChild(header);
pink_div.appendChild(paragraph);
container.appendChild(pink_div);
