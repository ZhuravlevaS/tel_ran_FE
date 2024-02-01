// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

const number = +prompt('Введите число:');

const numberPercent = number * 0.1;

console.log(numberPercent);

// Написать программу, которая получает два числа и выводит наименьшее

const number1 = +prompt('Введите первое число:');
const number2 = +prompt('Введите второе число:');

if (number1 > number2) {
	console.log(number2);
} else {
	console.log(number1);
}

//Написать программу, которая считывает через prompt число и выводит
// одно из следующих сообщений:
//‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// const num = +prompt('Введите число:');

if (num > 100) {
	console.log('Число больше 100');
} else if (num < 100) {
	console.log('Число меньше 100');
} else {
	console.log('Число равно 100');
}

// Написать программу, которая запрашивает у пользователя его имя и
// возраст (в годах) и выводит в консоль сообщение
// ‘Hello, <name>’, если пользователь совершеннолетний,
// или ‘Hi, <name>’, если пользователь несовершеннолетний.

const username = prompt('Введите ваше имя:');
const age = +prompt('Сколько вам лет?');

if (age >= 18) {
	console.log(`Hello, ${username}`);
} else {
	console.log(`Hi, ${username}`);
}
