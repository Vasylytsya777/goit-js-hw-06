import users from "./users.js"

/*     
Получить массив имен пользователей по полу (поле gender).

*/

const getUsersWithGender = (users, gender) => {
	// твой код
				
	    return users.filter(user => user.gender===gender)
	
  };
  
  console.log(getUsersWithGender(users, 'male')); 
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]




  