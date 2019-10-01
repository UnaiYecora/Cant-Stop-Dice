/*
/
/ Dice Functionality
/
*/
function globalJS(){
	//Get random numbers
	function randomDice(){return Math.floor(Math.random() * 6 + 1 );}

	//Random number to dice character
	function numberToImg(i){
	  if (i == 1){return dice1}
	  else if (i == 2){return dice2}
	  else if (i == 3){return dice3}
	  else if (i == 4){return dice4}
	  else if (i == 5){return dice5}
	  else {return dice6}
	}

	//Print innerHTML
	function print(message) {
	  var outputDiv = document.getElementById('output');
	  outputDiv.innerHTML = message;
	}

	// Html output
	var html = '';

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
	html = '<h2 id="roll">' + numberToImg(d1) + ' ' + numberToImg(d2) + ' ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</h2>';

	//Combinations

	//First combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res1a + ' <span>and</span> ' + res1b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d2) + ' </strong>/<strong> ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Second combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res2a  + ' <span>and</span> ' + res2b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d3) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Third combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res3a + ' <span>and</span> ' + res3b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d4) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d3) + '</strong></p></div>';

	return print(html);
}
