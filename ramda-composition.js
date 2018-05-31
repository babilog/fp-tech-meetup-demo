const R = require("ramda");

const lunchOptions = [
  {
    dishName: "Turkey Sandwich",
    veggetarian: false
  },
  {
    dishName: "Vegetable Sandwich",
    veggetarian: true
  },
  {
    dishName: "Tuna Sandwich",
    veggetarian: false
  }
];

// We want to extract all non vegetarian dish names

/* Imperative */
let nonVegeratianDishNames = [];

for (let options of lunchOptions) {
  if (options.veggetarian === false) {
    nonVegeratianDishNames.push(options.dishName);
  }
}

nonVegeratianDishNames;

/* Declarative and functional */
const isNotVegeratian = option => R.not(option.veggetarian);
const nonVegeratianDishes = R.filter(isNotVegeratian); // data gets passed in last
const getDishName = R.pluck("dishName");
//const spacer = R.join(",");

// we can now clean it up a bit using some pipes (chaining)
const getNonVeggieDishNames = R.pipe(nonVegeratianDishes, getDishName);

const names = getNonVeggieDishNames(lunchOptions);

names;
