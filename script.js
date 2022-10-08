
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var click1 = this.innerHTML;
        sounds(click1);
    });
}
document.addEventListener("keypress", function(event){ //event of keypress    
    var pr = event.key;
    sounds(pr);//event.key ->which key was pressed 
});

function sounds(key){
    switch (key) {
        case "W":
            var s1 = new Audio("sounds/tom-1.mp3")
            s1.play();
            break;
        case "A":
            var s2 = new Audio("sounds/tom-2.mp3")
            s2.play();
            break;
        case "S":
            var s3 = new Audio("sounds/tom-3.mp3")
            s3.play();
            break;
        case "D":
            var s4 = new Audio("sounds/tom-4.mp3")
            s4.play();
            break;
        case "J":
            var s5 = new Audio("sounds/kick-bass.mp3")
            s5.play();
            break;
        case "K":
            var s6 = new Audio("sounds/snare.mp3")
            s6.play();
            break;

        case "L":
            var s7 = new Audio("sounds/crash.mp3")
            s7.play();
            break;
        default:
            console.log();
            break;
    }
}

