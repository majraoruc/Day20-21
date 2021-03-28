var textArea = document.getElementById("display");
var keyboardRow=document.getElementsByClassName("kb-row");
var string = "";
var capsLockValue = false;
var shiftValue = false;
var value = "";
var result = "";

function buttonClick(id) {
    value = document.getElementById(id).innerHTML;
    if (shiftValue === true) {
        // capsLockValue = false;
        result = value.toUpperCase();
        textArea.innerHTML += result;
        shiftValue = false;
    }
    else if (capsLockValue === true) {
        textArea.innerHTML += value.toUpperCase();
    }
    else {
        textArea.innerHTML += value;
        string = textArea.innerHTML;
    }
}
function capsLockButton() {
    capsLockValue = !capsLockValue;
   
}
function shiftButton() {
    shiftValue = true;
}
function enterButton() {
    textArea.innerHTML += '\r\n';
}

function okButton() {
    alert(textArea.innerHTML);
}
function backSpace(){
    var newStr = "";
    for(var i = 0; i < string.length-1; i++){
        newStr += string[i];
    }
    string = newStr;
    
    textArea.innerHTML = "";    
    textArea.innerHTML = newStr;
}
function spaceButton() {
    textArea.innerHTML += " ";
}