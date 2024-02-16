const form = document.querySelector('.form');
const userName = document.querySelector('#userName');
const userSurname = document.querySelector('#userSurname');
const age = document.querySelector('#age');
const usersBlock = document.querySelector('.users');
let users = [];

const createUser = function (user) {
	return `
    <div class="user" id="${user.id}">
        <p>Name: ${user.userName}</p>
        <p>Surname: ${user.userSurname}</p>
        <p>Age: ${user.age}</p>
    </div>
    `;
};

const rerender = function () {
	usersBlock.innerHTML = '';
	users.forEach((user) => {
		usersBlock.innerHTML += createUser(user);
	});

	const usersBlocks = document.querySelectorAll('.user');

	usersBlocks.forEach((userBlock) => {
		userBlock.addEventListener('dblclick', (event) => {
			users = users.filter((user) => user.id != event.currentTarget.id);
			rerender(users);
		});
	});
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = {
		userName: userName.value,
		userSurname: userSurname.value,
		age: age.value,
		id: Date.now(),
	};

	users.push(user);
	rerender(users);
});
