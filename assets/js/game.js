// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var game = {
	wins: 0,
	losses: 0,
	userAmt: 0,
	compAmt: 0,
	red: 0,
	yellow: 0,
	blue: 0,
	green: 0,
	gameOver: false,
	init: function() {
		game.compAmt = getRandomInt(19, 120);
		game.userAmt = 0;
		game.gameOver = false;
		game.red = getRandomInt(1, 12);
		game.yellow = getRandomInt(1, 12);
		game.blue = getRandomInt(1, 12);
		game.green = getRandomInt(1, 12);
		$("#compAmt").html(game.compAmt.toString());
		$("#userAmt").html(game.userAmt.toString());
		$("#wins").html(game.wins.toString());
		$("#losses").html(game.losses.toString());
		$("#playAgain").css("display", "none");
	},
	addAmt: function(x) {
		if (game.gameOver) {
			return;
		}
		game.userAmt += x;
		$("#userAmt").html(game.userAmt.toString());
		if (game.userAmt > game.compAmt) {
			game.gameOver = true;
			game.losses++;
			$("#losses").html(game.losses.toString());
			$("#playAgain").css("display", "block");
		}
		else if (game.userAmt === game.compAmt) {
			game.gameOver = true;
			game.wins++;
			$("#wins").html(game.wins.toString());
			$("#playAgain").css("display", "block");
		}
	}
}

window.onload = function() {
	game.init();

	$("#btnRed").on("click", function() {
		game.addAmt(game.red);
	});
	$("#btnYellow").on("click", function() {
		game.addAmt(game.yellow);
	});
	$("#btnBlue").on("click", function() {
		game.addAmt(game.blue);
	});
	$("#btnGreen").on("click", function() {
		game.addAmt(game.green);
	});
	$("#playAgain").on("click", function() {
		$("#playAgain").css("display", "none");
		game.init();
	});
	$("#instructions").on("click", function() {
		$("#instrOverlay").css("display", "block");
	});
	$("#instrOverlay").on("click", function() {
		$("#instrOverlay").css("display", "none");
	});
	$("#reset").on("click", function() {
		if (confirm("This will reset the entire game.\nAre you sure?")) {
			game.wins = 0;
			game.losses = 0;
			game.init();
		}
	});
}