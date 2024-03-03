
var numberButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberButtons; i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonHtml = this.innerHTML;

        makeSound(buttonHtml);
        animationButton(buttonHtml);


    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    animationButton(event.key);
});

function makeSound(buttonHtml) {
    switch (buttonHtml) {
        case ("w"):

            var tom1 = new Audio("./sounds/tom1.mp3");
            tom1.play();

        case ("a"):
            var tom2 = new Audio("./sounds/tom2.mp3");
            tom2.play();

        case ("s"):
            var tom3 = new Audio("./sounds/tom3.mp3");
            tom3.play();

        case ("d"):
            var tom4 = new Audio("./sounds/tom4.mp3");
            tom4.play();

        case ("j"):
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();

        case ("k"):
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();

        case ("l"):
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();



        default: console.log(buttonHtml);
    }
}


function animationButton(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}