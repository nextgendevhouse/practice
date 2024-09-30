const inputName = document.getElementById("name")
console.log(inputName);

const button = document.getElementById('btn')

const output = document.getElementById('output')

button.addEventListener("click", function(){
    const textInput = inputName.value
    output.innerText = textInput
})