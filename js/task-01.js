const categoriesLiEl = document.querySelectorAll('.item')

console.log(`Number of categories:`, categoriesLiEl.length)

categoriesLiEl.forEach(categor=>{
   console.log('Category',categor.firstElementChild.textContent) 
   console.log('Elements',categor.lastElementChild.children.length) 
})