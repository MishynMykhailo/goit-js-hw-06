const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients")

const allMap = ingredients.map(ingred => {
  const liEl = document.createElement("li")
  liEl.classList.add("item")
  liEl.textContent=ingred
  return liEl
})
ulEl.append(...allMap)

