// start dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageSource);
// end dice 1


// start dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);
// end dice 2


// result
if(randomNumber1 > randomNumber2){
       document.querySelector('h1').innerHTML="Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
       document.querySelector('h1').innerHTML="Player 2 Wins!";
}
else {
       document.querySelector('h1').innerHTML="Draw!";
}
