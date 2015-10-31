/*
/
/ Dice Functionality
/
*/
//Get random numbers
function randomDice(){return Math.floor(Math.random() * 6 + 1 );}

function numberToImg(i){
  if (i == 1){return dice1}
  else if (i == 2){return dice2}
  else if (i == 3){return dice3}
  else if (i == 4){return dice4}
  else if (i == 5){return dice5}
  else {return dice6}
}

//Dice Images
var dice1 = '⚀';
var dice2 = '⚁';
var dice3 = '⚂';
var dice4 = '⚃';
var dice5 = '⚄';
var dice6 = '⚅';

//Random dices
var d1 = randomDice();
var d2 = randomDice();
var d3 = randomDice();
var d4 = randomDice();

//Dice combinations
var res1a = d1+d2;
var res1b = d3+d4;
var res2a = d1+d3;
var res2b = d2+d4;
var res3a = d1+d4;
var res3b = d2+d3;

//Dices
document.write('<h2 id="roll">' + numberToImg(d1) + ' ' + numberToImg(d2) + ' ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</h2>');

//Combinations

//First combination
document.write( '<div class="combination"><h2 class="combinationDice">' + numberToImg(d1) + ' ' + numberToImg(d2) + ' <span>/</span> ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</h2>');
document.write('<p>You can move on: <br>');
document.write('<strong>' + res1a + ' </strong>and<strong> ' + res1b + '</strong></p></div>');

//Second combination
document.write( '<div class="combination"><h2 class="combinationDice">' + numberToImg(d1) + ' ' + numberToImg(d3) + ' <span>/</span> ' + numberToImg(d2) + ' ' + numberToImg(d4) + '</h2>');
document.write('<p>You can move on: <br>');
document.write('<strong>' + res2a + ' </strong>and<strong> ' + res2b + '</strong></p></div>');

//Third combination
document.write( '<div class="combination c3"><h2 class="combinationDice">' + numberToImg(d1) + ' ' + numberToImg(d4) + ' <span>/</span> ' + numberToImg(d2) + ' ' + numberToImg(d3) + '</h2>');
document.write('<p>You can move on: <br>');
document.write('<strong>' + res3a + ' </strong>and<strong> ' + res3b + '</strong></p></div>');
