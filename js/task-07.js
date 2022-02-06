const inputRef = document.querySelector("input#font-size-control")
const spanRef = document.querySelector("span#text")

spanRef.style.fontSize = inputRef.value+"px"

inputRef.addEventListener("input",function (){
    spanRef.style.fontSize = inputRef.value+"px"
})

