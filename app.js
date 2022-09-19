var btntranslate = document.querySelector("#btn-translate");

var txtI = document.querySelector("#tta");
var outputDiv = document.querySelector("#output");

btntranslate.addEventListener("click", function clickEventHandler(){
    outputDiv.innerText = "wefreggreggv:" + txtI.value
})
