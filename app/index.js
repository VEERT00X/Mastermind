// make a function where you select the element value and set the text to it.

let SelectedColor ;

let Slot1 ;
let Slot2 ;
let Slot3 ;
let Slot4 ;

function setText(text) {
    
    element = document.getElementById("SelectText");
    element.textContent =  "Selected Color : " + text;
    SelectedColor = text;

}

function setColor(thisColor) {

    thisColor.value = SelectedColor;

}

function SelectRandomColor () {
    // chose slot 1 from color array.

    // color aray is [red, green, blue, yellow, purple, orange]
    let colorArray = ["red", "green", "blue", "yellow", "purple", "orange"];

    // the colors cant be the same.
    Slot1 = colorArray[Math.floor(Math.random() * colorArray.length)];
    Slot2 = colorArray[Math.floor(Math.random() * colorArray.length)];
    Slot3 = colorArray[Math.floor(Math.random() * colorArray.length)];
    Slot4 = colorArray[Math.floor(Math.random() * colorArray.length)];

    // make sure the colors arent the same.
    while (Slot1 == Slot2) {
        Slot2 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    while (Slot1 == Slot3) {
        Slot3 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    while (Slot1 == Slot4) {
        Slot4 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    while (Slot2 == Slot3) {
        Slot3 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    while (Slot2 == Slot4) {
        Slot4 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    while (Slot3 == Slot4) {
        Slot4 = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    

}  

function GiveUp() {

    alert("You Lose!");
    alert("The correct color was " + Slot1 + " " + Slot2 + " " + Slot3 + " " + Slot4);

}

function Reset() {

    Slot1 = "";
    Slot2 = "";
    Slot3 = "";
    Slot4 = "";
    SelectedColor = "";
    document.getElementById("SelectText").textContent = "";

    // Reset slot1, slot2, slot3, slot4.
    
    document.getElementById("slot1").value="";
    document.getElementById("slot2").value="";
    document.getElementById("slot3").value="";
    document.getElementById("slot4").value="";
    
}