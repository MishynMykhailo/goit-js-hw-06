const ulCategoriesEl = document.querySelector("#categories");

const allLiEl = ulCategoriesEl.children.length;

console.log(`Number of categories:`,allLiEl); // Number of categories: 3

///////////////////////////////////////////////////////////////////////////////////////
const CategoryAnEl = ulCategoriesEl.firstElementChild.children[0].textContent;

const AnimalLiEl = ulCategoriesEl.firstElementChild.children[1].children.length;

console.log(`Category:`, CategoryAnEl); // Category: Animals

console.log(`Elements:`,AnimalLiEl); // Elements: 4

///////////////////////////////////////////////////////////////////////////////////////
const CategoryPrEl = ulCategoriesEl.children[1].children[0].textContent;

const ProductLiEl = ulCategoriesEl.children[1].children[1].children.length;

console.log(`Category:`, CategoryPrEl); // Category: Products

console.log(`Elements:`,ProductLiEl); // Elements: 3

/////////////////////////////////////////////////////////////////////////////////////////
const CategoryTechEl = ulCategoriesEl.lastElementChild.children[0].textContent;

// Решил сделать тут через querySelectorAll , раз предыдушие сделал по DOM разметке
const TechLiEl = ulCategoriesEl.querySelectorAll('li.item');

console.log(`Category:`,CategoryTechEl ); // Category: Technologies

console.log(`Elements:`,TechLiEl[2].children[1].children.length); // Elements: 5

////////////////////////////////////////////////////////////////////

