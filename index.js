
// playing sounds by clicking the buttons.

var length = document.querySelectorAll("button").length;

for (var i = 0 ; i < length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", clickTest);

    function clickTest () {
        
        var buttonClick = this.innerHTML;

        switch (buttonClick) {
            case "w":
                var tom4 = new Audio("sounds/tom-4.mp3"); 
                tom4.play();
                break;
            case "a":
                var snare = new Audio("sounds/snare.mp3"); 
                snare.play();
                break;
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3"); 
                tom2.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3"); 
                tom1.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3"); 
                crash.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3"); 
                tom3.play();
                break;
            case "l":
                var bass = new Audio("sounds/bass.mp3"); 
                bass.play();
                break;
            default :
                console.log (buttonClick);
            
        }
    }
}

// Playing sounds by pressing keyboard.

document.addEventListener("keydown", keyPress);

    function keyPress (check) {
        
        var keyName = check.key;

        switch (keyName) {
            case "w":
                var tom4 = new Audio("sounds/tom-4.mp3"); 
                tom4.play();
                break;
            case "a":
                var snare = new Audio("sounds/snare.mp3"); 
                snare.play();
                break;
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3"); 
                tom2.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3"); 
                tom1.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3"); 
                crash.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3"); 
                tom3.play();
                break;
            case "l":
                var bass = new Audio("sounds/bass.mp3"); 
                bass.play();
                break;
            default :
                console.log (keyName);
            
        }
        
    }
