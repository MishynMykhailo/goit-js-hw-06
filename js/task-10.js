function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  divBoxes: document.querySelector("#boxes"),
  inputNumber: document.querySelector("#controls input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
}
let divSize = 30;
refs.btnCreate.addEventListener('click',onCreateClick);
refs.btnDestroy.addEventListener('click',DestroyDiv);

function onCreateClick(){
  if(refs.inputNumber.value){
    createBoxes(refs.inputNumber.value)
  }
}

function DestroyDiv(){
  refs.divBoxes.innerHTML = "";
  divSize = 30;
}

function createBoxes(amount) {
  const divArr = [];
  for( let i =0; i< amount; i+=1){
    const div = document.createElement('div')
    div.style.width = divSize + 'px';
    div.style.height = divSize + 'px';
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
    divSize +=10;
  }
  refs.divBoxes.append(...divArr)
}