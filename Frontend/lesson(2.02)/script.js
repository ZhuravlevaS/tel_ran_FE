const d = 7;

console.log(d);
console.log(d ** 2);
console.log(d ** 3);

// let num1 = +prompt('число 1');
// let num2 = +prompt('число 2');

// let sub = num1 - num2;
// let sum = num1 + num2;
// let mult = num1 * num2;

// console.log(
// 	`Разность чисел ${num1} и ${num2} равна ${sub}, сумма чисел ${num1} и ${num2} равна ${sum}, произведение чисел ${num1} и ${num2} равно ${mult}`
// );

// let userName = prompt('Ваше имя');
// let userSurname = prompt('Ваша фамилия');
// let age = prompt('Ваш возраст');

// console.log(`Hello, my name is ${userName} ${userSurname}. I’m ${age}`);
// console.log(
// 	'Hello, my name is ' + userName + ' ' + userSurname + '. I’m ' + age
// );

const square = function (num1, num2) {
	const s = num1 * num2;
	console.log(`${s} квадратов`);
};

const showNums = function (num) {
	for (let index = 0; index < num + 1; index++) {
		console.log(index);
	}
};

showNums(100);
