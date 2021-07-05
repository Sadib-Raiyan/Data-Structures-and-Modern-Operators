'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainmenu: ['Pizza', 'Pasta', 'Risoto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  orderfood: function (starterIndex, mainIndex) {
    return console.log(
      `You have ordered ${this.starterMenu[starterIndex]} and ${this.mainmenu[mainIndex]}`
    );
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, Address }) {
    // return console.log(`You have ordered ${this.starterMenu[starterIndex]} & ${this.mainmenu[mainIndex]} at ${Address} will be delivered at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    return console
      .log
      //`You have orderer pasta with ${ing1} ${ing2} and ${ing3}`
      ();
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    // console.log(`You have ordered pizza with ${mainIngredients} and ${otherIngredients}`);
  },
};
restaurant.orderPizza('cheese', 'Beef' , 'Chickens' , 'Asparagus');

const ingredients = [
  // prompt('Enter ingredient 1'),
  // prompt('Enter ingredient 2'),
  // prompt('Enter ingredient 3'),
];

restaurant.orderPasta(...ingredients);

restaurant.orderDelivery({
  time: '22:30',
  Address: 'LK sunrise building',
  starterIndex: 1,
  mainIndex: 0,
});

//restaurant.orderfood(2, 3);

//Destructuring Nested array

const nested = [2, 3, [1, 4]];

const [x, y, [z, f]] = nested;

//console.log(x, y, z, f);

//Object destructuring

const { name, openingHours, categories } = restaurant;
//console.log( name , openingHours , categories);

// Setting a new name for variables
const {
  name: resturauntName,
  openingHours: opens,
  categories: choices,
} = restaurant;

//console.log(resturauntName , opens ,  choices);

// Retrieving array that has no existence & Setting default values

const {
  menu = ['Vaat', 'Shaak', 'Vaji'],
  starterMenu: starters = ['Vaat', 'Shaak', 'Vaji'],
  mainmenu,
} = restaurant;

//console.log(`You have ordered ${menu} and ${starters}, and ${mainmenu}`);

//Mutating variables or swapping objects
/* You have to wrap tham into parethesis otherwise error */
let a = 232;
let b = 432;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

// console.log(a, b);

//Nested Object

const {
  fri: { open, close },
} = openingHours;

// console.log(open , close);

//Spread Operator

const arr = [2, 3, 4, 5];

const newOne = [6, 7, ...arr];

//console.log(...newOne);

// Adding new data into an array with spread operator
const newMainMenu = [...restaurant.mainmenu, 'Egg fries'];

// console.log(newMainMenu);

//Copy array with spread operator

const newmainMenu = [...restaurant.mainmenu];

// Join 2 array's with spread operator

const menuMia = [...restaurant.starterMenu, ...restaurant.mainmenu];
//console.log(menuMia);

//Iterables : are " Arrays, String, Maps, Sets but not Objects"

//Using spread operator on a string

const myName = 'Sadib Raiyan Nuhash';

const modifiedName = [...myName];

//console.log(modifiedName);

//Spread Operator On Objects

const newRestaurant = {
  ...restaurant,
  founder: 'Sadib',
  Address: 'Lk Sunrise building',
};

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//Rest Operator

const [er, ar, ...other] = [1, 2, 3, 4, 5];
//console.log(er , ar , other);

//Rest operator in Objeccts

const { fri, ...weekdays } = restaurant.openingHours;

//console.log(fri);

//Rest pearameter

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  //console.log(sum);
};

add(2, 3, 5);

add(5, 7, 8);

add(9, 5, 7);


