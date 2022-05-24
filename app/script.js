const map = new Map();
map.set('red', '#ff0000');
map.set('blue', '#0000ff');
map.set('green', '#00ff00');
map.set('yellow', '#ffff00');
map.set('orange', '#ffa500');
map.set('purple', '#800080');


document.addEventListener('DOMContentLoaded', function () {
Array.from(map.keys()).forEach(key => {
    console.log(document.getElementById(key))

    document.getElementById(key).addEventListener('click', handleColorInput);
})});



function handleColorInput(event) {

    const id = event.target.id;

    const concurentColor = id;

    document.getElementById("MainBox").style.backgroundColor = concurentColor;

    document.getElementById("testConcurentColor").innerHTML.value = concurentColor;
};



