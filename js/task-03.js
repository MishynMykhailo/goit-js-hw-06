const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//--------------ОСНОВНОЙ КОД-----------------

const listItemEl = document.querySelector('ul.gallery')

const imgEl = images.map(img =>{
  return `<li><img src="${img.url}" alt="${img.alt}" width="300" </li>`
}).join("");


listItemEl.insertAdjacentHTML("beforeend",imgEl)

//-----------------GRID ОТСТУПЫ-----------------

listItemEl.classList.add('taskthree')

//-----------------CSS STYLE BORDER-----------------
const itemCssStyleLi = document.querySelectorAll('li')

itemCssStyleLi.forEach((bord)=>{
  bord.classList.add("taskthree-border")
})
