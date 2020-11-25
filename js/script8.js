import users from "./users.js";

/*

 Массив имен всех пользователей у которых есть друг с указанным именем.

 */
const getUsersWithFriend = (users, friendName) => {
	return users
		.filter(user => user.friends.includes(friendName))
		.map(users => users.name);

	// твой код
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
