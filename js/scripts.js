/*
/
/ Dice Functionality
/
*/

var f = true;


function globalJS() {
	//Get random numbers
	function randomDice() { return Math.floor(Math.random() * 6 + 1); }

	//Random number to big dice image
	function numberToBigImg(i) {
		if (i == 1) { return dice01 }
		else if (i == 2) { return dice02 }
		else if (i == 3) { return dice03 }
		else if (i == 4) { return dice04 }
		else if (i == 5) { return dice05 }
		else { return dice06 }
	}

	//Random number to dice character
	function numberToImg(i) {
		if (i == 1) { return dice1 }
		else if (i == 2) { return dice2 }
		else if (i == 3) { return dice3 }
		else if (i == 4) { return dice4 }
		else if (i == 5) { return dice5 }
		else { return dice6 }
	}

	//Print innerHTML
	function print(message) {
		var outputDiv = document.getElementById('output');
		outputDiv.innerHTML = message;
	}

	// Html output
	var html = '';

	//Dice Images (Big)
	var dice01 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M48,43.302c-2.59,0-4.698,2.107-4.698,4.698S45.41,52.697,48,52.697c2.591,0,4.698-2.107,4.698-4.698   S50.591,43.302,48,43.302z"/><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.6,34.604   v26.792v0.001c0,4.524-4.103,8.203-9.146,8.203H35.545c-5.043,0-9.146-3.679-9.146-8.203v-0.001V34.604v-0.001   c0-4.522,4.103-8.203,9.146-8.203h24.909C65.497,26.4,69.6,30.08,69.6,34.604L69.6,34.604z"/></g></svg>';
	var dice02 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M57.931,53.231c-2.591,0-4.698,2.107-4.698,4.698s2.107,4.698,4.698,4.698s4.698-2.107,4.698-4.698   S60.521,53.231,57.931,53.231z"/><path d="M38.069,33.37c-2.591,0-4.698,2.107-4.698,4.698c0,2.59,2.107,4.698,4.698,4.698c2.59,0,4.698-2.107,4.698-4.698   C42.767,35.477,40.659,33.37,38.069,33.37z"/><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.6,61.396   c0,4.524-4.103,8.203-9.146,8.203H35.545c-5.043,0-9.146-3.679-9.146-8.203V34.603c0-4.523,4.103-8.203,9.146-8.203h24.909   c5.043,0,9.146,3.68,9.146,8.203V61.396z"/></g></svg>';
	var dice03 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.333,61.232   c0,4.467-4.052,8.101-9.032,8.101H35.7c-4.981,0-9.033-3.634-9.033-8.102V34.768c0-4.467,4.052-8.101,9.033-8.101h24.6   c4.981,0,9.033,3.634,9.033,8.102V61.232z"/><path d="M38.191,33.545c-2.562,0-4.646,2.084-4.646,4.646s2.084,4.646,4.646,4.646s4.646-2.084,4.646-4.646   S40.753,33.545,38.191,33.545z"/><path d="M57.809,53.161c-2.563,0-4.647,2.085-4.647,4.647s2.085,4.646,4.647,4.646s4.646-2.084,4.646-4.646   S60.371,53.161,57.809,53.161z"/><path d="M48.001,43.353c-1.242,0-2.409,0.483-3.287,1.362c-0.878,0.877-1.361,2.044-1.361,3.285c0,1.241,0.483,2.407,1.361,3.285   s2.044,1.361,3.285,1.361c1.241,0,2.408-0.483,3.288-1.363c0.112-0.113,0.218-0.23,0.316-0.352   c1.512-1.853,1.376-4.526-0.317-6.218C50.409,43.836,49.242,43.353,48.001,43.353z"/></g></svg>';
	var dice04 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M57.932,33.369c-2.591,0-4.699,2.108-4.699,4.699s2.108,4.698,4.699,4.698s4.698-2.107,4.698-4.698   S60.522,33.369,57.932,33.369z"/><path d="M38.069,42.766c2.59,0,4.698-2.107,4.698-4.698c0-2.591-2.107-4.698-4.698-4.698c-2.591,0-4.698,2.107-4.698,4.698   C33.371,40.658,35.478,42.766,38.069,42.766z"/><path d="M38.069,53.231c-2.59,0-4.698,2.107-4.698,4.697c0,2.591,2.107,4.698,4.698,4.698s4.698-2.107,4.698-4.698   C42.767,55.339,40.66,53.231,38.069,53.231z"/><path d="M57.931,53.231c-2.591,0-4.698,2.107-4.698,4.697c0,2.591,2.107,4.698,4.698,4.698s4.698-2.107,4.698-4.698   C62.629,55.339,60.521,53.231,57.931,53.231z"/><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.6,61.396   c0,4.524-4.103,8.203-9.146,8.203H35.545c-5.043,0-9.146-3.679-9.146-8.203V34.603c0-4.523,4.103-8.203,9.146-8.203h24.909   c5.043,0,9.146,3.68,9.146,8.203V61.396z"/></g></svg>';
	var dice05 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M38.069,42.767c2.59,0,4.698-2.107,4.698-4.698s-2.107-4.698-4.698-4.698c-2.591,0-4.698,2.107-4.698,4.698   S35.478,42.767,38.069,42.767z"/><path d="M38.069,53.232c-2.59,0-4.698,2.107-4.698,4.698s2.107,4.698,4.698,4.698s4.698-2.107,4.698-4.698   S40.66,53.232,38.069,53.232z"/><path d="M57.931,53.232c-2.591,0-4.698,2.107-4.698,4.698s2.107,4.698,4.698,4.698s4.698-2.107,4.698-4.698   S60.521,53.232,57.931,53.232z"/><path d="M48,43.302c-2.59,0-4.698,2.107-4.698,4.698c0,2.591,2.107,4.698,4.698,4.698c2.591,0,4.698-2.107,4.698-4.698   C52.698,45.41,50.591,43.302,48,43.302z"/><path d="M57.932,33.371c-2.591,0-4.699,2.108-4.699,4.699s2.108,4.698,4.699,4.698s4.698-2.107,4.698-4.698   S60.522,33.371,57.932,33.371z"/><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.6,61.396   c0,4.523-4.103,8.203-9.146,8.203H35.545c-5.043,0-9.146-3.68-9.146-8.203V34.603c0-4.523,4.103-8.203,9.146-8.203h24.909   c5.043,0,9.146,3.68,9.146,8.203V61.396z"/></g></svg>';
	var dice06 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="300px" width="300px" fill="#e35f75" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path d="M38.069,51.698c2.039,0,3.698-1.659,3.698-3.698s-1.659-3.698-3.698-3.698S34.371,45.961,34.371,48   S36.03,51.698,38.069,51.698z"/><path d="M38.069,34.372c-0.987,0-1.917,0.385-2.616,1.083c-1.442,1.442-1.442,3.789,0,5.231c1.397,1.396,3.834,1.396,5.231-0.001   c0.698-0.698,1.083-1.627,1.083-2.615c0-0.988-0.385-1.917-1.083-2.616C39.987,34.756,39.059,34.372,38.069,34.372z"/><path d="M57.936,54.233h-0.008c-0.987,0-1.915,0.385-2.612,1.083c-0.698,0.698-1.083,1.627-1.083,2.615s0.385,1.917,1.083,2.615   c0.524,0.524,1.185,0.875,1.907,1.014c1.21,0.235,2.458-0.148,3.324-1.014c1.441-1.443,1.441-3.79,0-5.23   C59.849,54.618,58.921,54.233,57.936,54.233z"/><path d="M38.073,54.233h-0.008c-0.986,0-1.914,0.385-2.612,1.083s-1.083,1.627-1.083,2.615c0,0.988,0.385,1.917,1.083,2.615   c0.866,0.866,2.118,1.249,3.321,1.014c0.725-0.139,1.385-0.489,1.91-1.014c0.698-0.698,1.083-1.627,1.083-2.615   s-0.385-1.917-1.083-2.615C39.986,54.618,39.059,54.233,38.073,54.233z"/><path d="M60.547,40.685c1.441-1.44,1.441-3.787,0-5.23c-0.698-0.698-1.628-1.083-2.616-1.083s-1.917,0.384-2.615,1.083   c-1.442,1.442-1.442,3.789,0,5.23C56.712,42.082,59.148,42.083,60.547,40.685z"/><path d="M57.932,44.302c-2.039,0-3.698,1.659-3.698,3.698s1.659,3.698,3.698,3.698s3.697-1.659,3.697-3.698   S59.971,44.302,57.932,44.302z"/><path d="M48,8C25.909,8,8,25.908,8,48c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40C88,25.908,70.091,8,48,8z M69.6,61.396   c0,0.282-0.016,0.562-0.048,0.838c-0.469,4.132-4.369,7.365-9.098,7.365H35.546c-4.728,0-8.629-3.234-9.099-7.365   c-0.032-0.275-0.047-0.556-0.047-0.838V34.603c0-0.283,0.016-0.562,0.047-0.837c0.469-4.131,4.371-7.365,9.099-7.365h24.909   c4.729,0,8.629,3.234,9.098,7.365c0.031,0.275,0.048,0.555,0.048,0.837V61.396z"/></g></svg>';

	//Dice Images (Small)
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
	var res1a = d1 + d2;
	var res1b = d3 + d4;
	var res2a = d1 + d3;
	var res2b = d2 + d4;
	var res3a = d1 + d4;
	var res3b = d2 + d3;

	//Dices
	html = '<div id="roll">' + numberToBigImg(d1) + ' ' + numberToBigImg(d2) + ' ' + numberToBigImg(d3) + ' ' + numberToBigImg(d4) + '</div>';

	//Combinations

	//First combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res1a + ' <span>and</span> ' + res1b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d2) + ' </strong>/<strong> ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Second combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res2a + ' <span>and</span> ' + res2b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d3) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Third combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res3a + ' <span>and</span> ' + res3b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d4) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d3) + '</strong></p></div>';

	print(html);

	//Add animation
	if (!f) {
		document.getElementById('container').classList.add("shake");
		setTimeout(function(){
			document.getElementById('container').classList.remove("shake");
		}, 600);

		let svgs = document.getElementById('roll').querySelectorAll("svg");
		for (var i = 0; i < svgs.length; ++i) {
			svgs[i].classList.add('shake2');
			svgs[i].getElementsByTagName("g")[0].classList.add('cover');
		}
		setTimeout(function(){
			for (var i = 0; i < svgs.length; ++i) {
				svgs[i].classList.remove('shake2');
			}
		}, 850);
		setTimeout(function(){
			for (var i = 0; i < svgs.length; ++i) {
				svgs[i].getElementsByTagName("g")[0].classList.remove('cover');
			}
		}, 650);

		let combs = document.querySelectorAll(".combination");
		for (var i = 0; i < combs.length; ++i) {
			combs[i].classList.add('hidden', 'shake');
		}
		setTimeout(function(){
			for (var i = 0; i < combs.length; ++i) {
				combs[i].classList.remove('hidden');
			}
		}, 650);
		setTimeout(function(){
			for (var i = 0; i < combs.length; ++i) {
				combs[i].classList.remove( 'shake');
			}
		}, 850);
	}
	f = false;

}


function changeTheme() {
	var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
}