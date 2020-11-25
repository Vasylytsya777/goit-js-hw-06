import users from "./users.js";

/*
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/

const getNamesSortedByFriendsCount = users => {
	// твой код
	return [...users]
		.sort(({ friends: a }, { friends: b }) => {
			return a.length - b.length;
		})
		.map(users => users.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
