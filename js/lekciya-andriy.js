// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
//  для перших двох задач
// const array = [
//     {
//         name: "number 1",
//         value: 9
//     },
//     {
//         name: "number 2",
//         value: 7
//     },
//     {
//         name: "number 3",
//         value: 4
//     },
//     {
//         name: "number 4",
//         value: 6
//     }
// ]

// const result =array.map(arr =>Math.sqrt(arr.value))
// console.log(result);

//через диструктиризацію прописану
// const result =array.map(({value}) =>Math.sqrt(value))
// console.log(result);

// =======================================
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// const string = array.map(arr => {
//     return {...arr, name: arr.name + "!"}
// })
// console.log(string);

// =======================================
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// const stringArr = [ "Mango", "Tango", "Kongo", "Bingo" ];

// const newArr = stringArr.map(value => {
//     return [...value].reverse().join("")
// })
//     console.log(newArr);
// =======================================
// Дан следующий массив:
// let arr = ['123', '456', '789'];

// const newArr = arr.map(value => {
//     return [...value].map(value => Number(value))
//     //  можна і так робити
//     return [...value].map(Number)
// })
//     console.log(newArr);

// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];
// =======================================
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
// let numberArr = ['123', '456', '789', "562626", "6346353"];
// const result =numberArr.map ((item,index)=> Number(item)*(index+1));
// console.log(result);

// =======================================
// Дан массив с числами. Оставьте в нем только положительные числа.

// const arrNum = [1, -2, 9, -57, 96, -85]
// const result = arrNum.filter(num => num >=0)
// console.log(result);
// =======================================
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// const arrNum = [1, -2, 9, -57, 96, -85]
// const result = arrNum.filter(num => num > 0 && num < 10)
// console.log(result);
// =======================================
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const arrStrings = [
//     "Sokiatoo",
//     "Dora",
//     "Tindell",
//     "Sara",
//     "Dolli"
// ]

// const string = arrStrings.filter(value => value.length>5)
// console.log(string);

// ==========================================
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// const arrNumbers = [1, -2, 9, -57, 96, -85, 100, -30, 58, -25, -48]
// const numbers = arrNumbers.filter((item, index) => item * (index + 1) < 30)
// console.log(numbers)

// ==========================================
// const arrNumber = [1, 2, [3, 4], 5, [6, 7]];
// // перевіряємо чи число є число чи масив
// // const result = arrNumber.filter(item => item.constructor.name === "Number");
// const result = arrNumber.filter(item => item.constructor.name === "Array");
// console.log(result);

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
// ==========================================
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// =========================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// =========================================
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// =========================================
// const headerNavigation = [
// 	{
// 		name: "Home",
// 		path: "/home",
// 	},
// 	{
// 		name: "About",
// 		path: "/about",
// 	},
// 	{
// 		name: "Contacts",
// 		path: "/contacts",
// 	},
// 	{
// 		name: "Sign In",
// 		path: "/signin",
// 	},
// 	{
// 		name: "Sign Up",
// 		path: "/signup",
// 	},
// 	{
// 		name: "Logout",
// 		path: "/logout",
// 	},
// ];
// const cart = [];

// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">
//     </a>
// </li>' для каждого из элементов массива
// =========================================
const products = [
	{
		id: "1",
		name: "Bread",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?",
	},
	{
		id: "2",
		name: "Mango",
		description: "Lorem, ipsum dolor sit amet",
	},
	{
		id: "3",
		name: "Sara",
		description: "Lorem, ipsum dolor sit amet consectetur Temporibus, at?",
	},
];
const cart = [];
// Напишите функцию, которая будет добавлять элемент в массив cart и создавать ему дополнительное свойство quantity равное нулю

const addtoCart = (arr, id) => {
	const newElem = arr.find(item => item.id === id);
	newElem.quantity = 1;
	cart.push(newElem);
};
addtoCart(products, "3");
addtoCart(products, "2");
console.log(cart);

// Напишите функцию, которая будет удалять элемент из массива cart по id

const delfromCart = id => {
	return cart.filter(item => item.id !== id);
};
console.log(delfromCart("3"));
// Напишите функцию, которая будет добавлять количество товаров (свойство quantity) на единицу

const addQuantity = id => {
	const product = cart.find(item => item.id === id);
	product.quantity += 1;
	console.log(product);
};
addQuantity("3");
addQuantity("3");
addQuantity("3");
// збільшеємо квантіті на 1

// віднімаємо кількість але не менше 0!!!

const decrQuantity = id => {
	const product = cart.find(item => item.id === id);
	if (product.quantity < 1) {
		return;
	} else product.quantity -= 1;

	console.log(product);
};
decrQuantity("3");
decrQuantity("3");
decrQuantity("3");
console.log(cart);

// Напишите функцию, которая будет фильтровать массив products по названию товара
const filterByName = (arr, name) => {
	return arr.filter(item =>
		item.name.toLowerCase().includes(name.toLowerCase()),
	);
};
console.log(filterByName(products, "suGar"));
// filterByName(products, sugar)

// Напишите функцию, которая будет возвращать разметку формата, пригодного для отображения информации о товаре в модальном окне.Обязательно добавить кнопки добавления товара и записать в них id товара

const createMarkup = () => {
	return cart.reduce((acc, item) => {
		acc += `
        
	<li>
		<h2>${item.name}</h2>
		<p>${item.description}
		<button type="button" data-id ="${item.id}"> + </button>
        <button type="button" data-id ="${item.id}"> - </button>
        </p>
    </li>`;
		return acc;
	}, "");
};

{
}
// Модифицируйте функцию, которая добавляет элемент в массив cart, при этом использует id  для поиска элемента в массиве products и если он совпадает - добавляет объект с дополнительным свойством quantity
// =========================================

// =========================================
