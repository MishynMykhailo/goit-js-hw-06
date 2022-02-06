const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur',checkSymbol)

function checkSymbol (event){
    if (event.currentTarget.value.length == inputRef.dataset.length){
        inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
    }else {
        inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
    }
    
}

console.log(inputRef.dataset.length)