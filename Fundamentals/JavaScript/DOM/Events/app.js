const buttonTwo = document.querySelector('#buttonTwo');
buttonTwo.onclick = () => alert("Hello World!");
/*
const buttonThree = document.querySelector('#buttonThree');
buttonThree.addEventListener('click', () => {
    alert("Hello World!");
})
*/
const buttonThree = document.querySelector('#buttonThree');
buttonThree.addEventListener('click', function(e)  {
    console.log(e.target);
    e.target.style.background = 'blue';
})
