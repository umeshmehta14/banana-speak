var btntranslate = document.querySelector("#btn-translate");

var txtI = document.querySelector("#tta");
var outputDiv = document.querySelector("#output");

// var serurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serurl = "https://api.funtranslations.com/translate/ferb-latin.json"


function gettranslate(text){
    return serurl + "?" + "text=" + text;
}

function erroHandler(error) {
    console.log("error occurred", error);
    alert("something wrong with server");
    
}
function clickHandler(){
    // outputDiv.innerText = "wefreggreggv:" + txtI.value
    var Itxt = txtI.value;

    // calling server for processing
    fetch(gettranslate(Itxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        // console.log(json.contents.translated)
    })
    .catch(erroHandler);
}
btntranslate.addEventListener("click", clickHandler)
