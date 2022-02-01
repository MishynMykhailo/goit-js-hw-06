const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients")

ingredients.forEach(ingred => {
  const liEl = document.createElement("li")
  liEl.classList.add("item");
  liEl.textContent = ingred;
  ulEl.append(liEl);
})

