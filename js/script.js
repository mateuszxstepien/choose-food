const d1 = document.querySelector('.d1');
const p1 = document.querySelector('.p1');
const d2 = document.querySelector('.d2');
const p2 = document.querySelector('.p2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.square');

const showBurger = () => {
	if (d2.classList.contains('show') && p2.classList.contains('show')) {
		d2.classList.toggle('show');
		p2.classList.toggle('show');
	}
	d1.classList.toggle('show');
	p1.classList.toggle('show');
};

const showPizza = () => {
	if (d1.classList.contains('show') && p1.classList.contains('show')) {
		d1.classList.toggle('show');
		p1.classList.toggle('show');
	}
	d2.classList.toggle('show');
	p2.classList.toggle('show');
};

const showFood = () => {
	d1.classList.toggle('show');
	d2.classList.toggle('show');
	p1.classList.toggle('show');
	p2.classList.toggle('show');
};

const fnMouseenter = () => {
	square.style.backgroundColor = 'tomato';
};

const fnMouseleave = () => {
	square.style.backgroundColor = 'royalblue';
};

btn1.addEventListener('click', showBurger);
btn2.addEventListener('click', showPizza);

square.addEventListener('dblclick', showFood);

square.addEventListener('mouseenter', fnMouseenter);
square.addEventListener('mouseleave', fnMouseleave);
