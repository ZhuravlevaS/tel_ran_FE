const paragraphs = document.querySelector('.paragraphs');

const minNumber = 50;
const maxNumber = 100;

for (let index = maxNumber; index > minNumber - 1; index--) {
	if (index % 10 === 0) {
		const paragraph = paragraphs.appendChild(document.createElement('p'));
		paragraph.innerText = index;
	}
}

const stringContainer = document.querySelector('.strings_container');
const strings = ['sdfsjdhgfga', 'kkkkkk', 'dddddd'];

strings.forEach((string) => {
	const paragraph = stringContainer.appendChild(document.createElement('p'));
	paragraph.innerText = string;
});

const users = [
	{
		first_name: 'sss1',
		last_name: 'gggg1',
		age: 12,
	},
	{
		first_name: 'sss2',
		last_name: 'gggg2',
		age: 18,
	},
	{
		first_name: 'sss3',
		last_name: 'gggg3',
		age: 180,
	},
	{
		first_name: 'sss4',
		last_name: 'gggg4',
		age: 90,
	},
];
const cards = document.querySelector('.cards');
const createUserCard = function (user) {
	const cardWrapper = cards.appendChild(document.createElement('div'));
	const firstName = cardWrapper.appendChild(document.createElement('p'));
	firstName.innerText = `First name: ${user.first_name}`;

	const lastName = cardWrapper.appendChild(document.createElement('p'));
	lastName.innerText = `Last name: ${user.last_name}`;

	const age = cardWrapper.appendChild(document.createElement('p'));
	age.innerText = `Age: ${user.age}`;
};

users.forEach((user) => {
	if (user.age >= 18) {
		createUserCard(user);
	}
});
