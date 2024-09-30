// Linking from html world to javascript world 
var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.getElementById("txt-input")
var outputDiv = document.getElementById("output")

// server url stored in placeholder
var serverURL = "https://api.funtranslations.com/translate/navi.json"

// adding event listener to button
btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = txtInput.value;
    // outputDiv.innerText = "Translation in progress..." // message shown to client until we get translated value
    fetch(serverURL + "?" + "text=" + inputText)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            console.log(translatedText);
            
            outputDiv.innerText = translatedText
        })
        // error handling
        // .catch(errorHandler) // calling a function

};



function errorHandler(error) {
    console.log("error occured", error);
    alert("something is wrong with server! try again later")
}   








// function getTranslationURL(text) {
//     return serverURL + "?" + "text=" + text
//     //? and something= are query parameters
// }