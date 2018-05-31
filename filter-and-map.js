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
    dishName: "Tuan Sandwich",
    veggetarian: false
  }
];

/* Imperative */

let vegetarianOnlyOptions = [];

for (let option of lunchOptions) {
  if (option.veggetarian) {
    vegetarianOnlyOptions.push(option);
  }
}

vegetarianOnlyOptions;

/* Declarative and functional :) */

const vegatarianOnly = lunchOptions.filter(option => {
  return option.veggetarian;
});

vegatarianOnly;
