var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).keypress(function () {
    if (!gameStarted) {


        $("#level-title").text("level" + level);
        newSequence();
        gameStarted = true;



    }
})

// if(gameStarted===true)
// {
//     document.addEventListener("keypress", function (event) {

//         if(event.key=='a')
//         {

//         }
//         makeSound(event.key);
    
//         animationButton(event.key);
//     });
// }
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);

});
function checkAnswer(currentlevel) {
    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
        console.log("success");

        if (gamePattern.length === userClickedPattern.length) {

            setTimeout(function () {
                newSequence();
            }, 1000);

        }
    }
    else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

       
        // setTimeout(function () {
        //     $("#level-title").text("level"+level+"Achieved Better luck next time");
        // }, 50);
        $("#level-title").text("Game over! Press any key to start");
       



        startOver();

    }

}
function newSequence() {

    // if (gameStarted === true) {
    //     $("#backGround").play();

    // }
    userClickedPattern = [];
    level++;
    $("#level-title").text("level" + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);


};
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
    
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
















