
const inputRef = {
    input:document.querySelector("#name-input"),
    output:document.querySelector("#name-output"),
}

// const inputEl = document.querySelector("#name-input")
// const outputEl = document.querySelector("#name-output")

inputRef.input.addEventListener('input',textUpdate)

function textUpdate(event,{output}=inputRef) {
    if ( event.currentTarget.value === ""){
        output.textContent = "Anonymous"
    }else {
        output.textContent =event.currentTarget.value
    }
}