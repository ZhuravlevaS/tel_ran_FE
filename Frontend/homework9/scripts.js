const btn1 = document.querySelector('.btn1');
const square1 = document.querySelector('.square1');

btn1.addEventListener('click', () => {
	square1.className += ' green';
});

const btn2 = document.querySelector('.btn2');
const square2 = document.querySelector('.square2');

btn2.addEventListener('click', () => {
	square2.className += ' blue';
	const styles = window.getComputedStyle(square2);
	console.log(styles['background-color']);
});

const btn3 = document.querySelector('.btn3');
const square3 = document.querySelector('.square3');

btn3.addEventListener('click', () => {
	square3.className += ' size';
});

const btn4 = document.querySelector('.btn4');
const root = document.querySelector('.root');

btn4.addEventListener('click', () => {
	const paragraph = root.appendChild(document.createElement('p'));
	paragraph.innerText = 'alskdjfsfhsdh';
});

const btn5 = document.querySelector('.btn5');
const root1 = document.querySelector('.root1');

btn5.addEventListener('click', () => {
	const paragraph = root1.appendChild(document.createElement('p'));
	paragraph.style.backgroundColor = 'blue';
	paragraph.innerText = 'alskdjfsfhsdh';

	const paragraph1 = root1.appendChild(document.createElement('p'));
	paragraph1.style.backgroundColor = 'green';
	paragraph1.innerText = 'alskdjfsfhsdh';
});
