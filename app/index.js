// make a function where you select the element value and set the text to it.

let SelectedColor ;


function setText(text) {
    
    element = document.getElementById("SelectText");
    element.textContent =  "Selected Color : " + text;
    SelectedColor = text;

}

function setColor(thisColor) {

    thisColor.value = SelectedColor;

}