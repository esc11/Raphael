"use strict";

window.onload = function() {

    // Creates canvas 500 × 500 at 50, 50
	var paper = new Raphael(50, 50, 500, 500);

	// // Creates circle at x = 50, y = 40, with radius 10
	// var circle = paper.circle(50, 40, 10);

	// // Sets the fill attribute of the circle to red (#f00)
	// circle.attr("fill", "#f00");

	// // Sets the stroke attribute of the circle to white
	// //circle.attr("stroke", "#fff");
	// circle.attr("stroke", "white");

	// Create pathways. M means to start drawing without a visible path at designated x and y coordinates.
	// l means to start drawing pathways between coordinates, and z means to close the path.
	var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");

	tetronimo.attr(
        {
            gradient: '90-#526c7a-#64a0c1',
            stroke: '#3b4449',
            'stroke-width': 10,
            'stroke-linejoin': 'round',
            rotation: -90
        }
    );



}