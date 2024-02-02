// for (let index = 0; index < 100; index++) {
// 	console.log(index);
// }

// const numbers = [10, 20, 3];

const numbers = [10, 15, 24, 17, 42, 61, 70];

// for (let index = 0; index < numbers.length; index++) {
// 	const element = numbers[index] ** 2;
// 	console.log(element);
// }

// for (let index = 0; index < numbers.length; index++) {
// 	if (numbers[index] > 0) {
// 		console.log(numbers[index]);
// 	}
// }

// const number1 = prompt('Введите 1 число');
// const number2 = prompt('Введите 2 число');

// numbers.push(number1);
// numbers.push(number2);

// for (let index = 0; index < numbers.length; index++) {
// 	if (!(numbers[index] % 2)) {
// 		console.log(numbers[index]);
// 	}
// }

// let sum = 0;
// for (let index = 0; index < numbers.length; index++) {
// 	sum = sum + numbers[index];
// }
// console.log(sum);

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
	if (numbers[index] > 0) {
		sum = sum + numbers[index];
	}
}

console.log(sum);
