const max1 = 10;

for (let index = 0; index < max1; index++) {
	if (index % 2 !== 0) {
		console.log(index);
	}
}

const min2 = 20;
const max2 = 55;

for (let index = max2; index > min2 - 1; index--) {
	console.log(index);
}

const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let index = 0; index < numbers.length; index++) {
	console.log(numbers[index]);
}

const numbers_squared = [];

for (let index = 0; index < numbers.length; index++) {
	numbers_squared.push(numbers[index] ** 2);
}

const last_elem = numbers_squared[numbers_squared.length];

const user = {
	first_name: 'Ivan',
	last_name: 'Ivanov',
	age: 20,
	salary: 500,
};

console.log(
	`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`
);
