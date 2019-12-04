/* CSE3026 : Web Application Development
 * Lab 09 - Maze
 */
"use strict";
var loser = null;  // whether the user has hit a wall

window.onload = function() {
	//$("boundary1").onmouseover=overBoundary;
	for(var i = 0; i<$$("div#maze div.boundary").length; i++){
		$$("div#maze div.boundary")[i].onmouseover = overBoundary;
	}
	$("end").onmouseover=overEnd;
	$("start").onclick = startClick; //observe -> click
	$("maze").onmouseleave = overBody;
};

// called when mouse enters the walls; 
// signals the end of the game with a loss
function overBoundary(event) {
	//$("boundary1").style.backgroundColor="red";
	//$("boundary1").addClassName("youlose");
	$$("div#maze div.boundary").each(function(item){
		item.addClassName("youlose");
	});

	loser = 1;
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {
	$$("div#maze div.boundary").each(function(item){
		item.removeClassName("youlose");
	});
}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {
	if(loser==1){
		// alert("You lose! :(");
		$("status").innerHTML = "You lose! :(";
	}
	else{
		// alert("You win! :)");
		$("status").innerHTML = "You win! :)";
	}
}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {
	loser = 1;
	alert("no cheat!");
	overEnd();
}



