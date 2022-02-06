// Напиши скрипт, который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


const refs = {
  bodyStyleEl:document.querySelector("body"),
  btnChangeColor:document.querySelector("button.change-color"),
  spanRefs: document.querySelector("span.color")
}

refs.btnChangeColor.addEventListener("click",onBtnChangeColorBody);

function onBtnChangeColorBody(){
  const ChangeBackground = refs.bodyStyleEl.style.backgroundColor = getRandomHexColor()
  refs.spanRefs.textContent = ChangeBackground
  
}

/// don't touch 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

