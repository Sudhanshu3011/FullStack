// alert("Working");
// function random_Number(){

//     var randomNumber = Math.random() * 6;
// randomNumber=Math.floor(randomNumber);
// randomNumber++;

// return randomNumber

// }
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1++;
var imagePath1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imagePath1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2++;
var imagePath2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imagePath2);

if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "Winner is Player1!";

}
else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "Winner is Player2!";
}
else {

    document.querySelector("h1").innerHTML = "Draw!";

}

