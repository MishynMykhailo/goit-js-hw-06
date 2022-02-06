let counterValue = 0;

const onButtonDecremEl = () =>{
    value.textContent = counterValue +=1
}
const onButtonIncremEL = ()=> {
    value.textContent = counterValue-=1;
}

const buttonDecrem = document.querySelector(`button[data-action="decrement"]`)
const buttonIncrem = document.querySelector(`button[data-action="increment"]`)

buttonDecrem.addEventListener('click',onButtonDecremEl)
buttonIncrem.addEventListener('click',onButtonIncremEL)

