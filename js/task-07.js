const inputRef = document.querySelector("input#font-size-control")
const spanRef = document.querySelector("span#text")


inputRef.addEventListener('input',rangeText)

function rangeText (event){
    spanRef.style.fontSize = event.currentTarget.value+'px'
}