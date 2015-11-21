"use strict";

window.onload = function() {

    // Creates canvas 500 × 500 at 50, 50
	var paper = new Raphael(50, 50, 500, 500);

	// Creates circle at x = 50, y = 40, with radius 10
	var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#f00");

}