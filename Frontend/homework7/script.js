const compareNumbers1 = function (num1, num2) {
	if (num1 > num2) {
		return num2;
	}
	return num1;
};

const compareNumbers2 = function (num1, num2) {
	const array = [num1, num2];

	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		if (array[index] % 2 !== 1) {
			newArray.push(array[index]);
		}
	}
	if (newArray.length === 0) {
		console.log('Все цифры нечетные');
		return;
	}

	if (newArray.length > 1) {
		newArray.sort((a, b) => a - b);
		for (let index = 0; index < newArray.length; index++) {
			console.log(newArray[index]);
		}
	} else {
		console.log(newArray[0]);
	}
};

const power = function (number, power = 2) {
	return number ** power;
};

const count = function (number) {
	for (let index = 1; index < number + 1; index++) {
		console.log(index);
	}
};

const sum = function (number1, number2) {
	if (number1 > number2) {
		sum(number2, number1);
		return;
	}

	let sumEven = 0;
	let sumOdd = 0;

	for (let index = number1; index < number2 + 1; index++) {
		if (index % 2 === 0) {
			sumEven = sumEven + index;
		} else {
			sumOdd = sumOdd + index;
		}
	}

	console.log(sumEven);
	console.log(sumOdd);
};

const returnString = function (array) {
	let maxIndex;
	let maxLength = 0;

	if (array.length === 0) {
		return null;
	}

	for (let index = 0; index < array.length; index++) {
		if (array[index].length > maxLength) {
			maxLength = array[index].length;
			maxIndex = index;
		}
	}

	return array[maxIndex];
};
