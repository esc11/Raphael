"use strict";

$(document).ready(function() {

    // Creates canvas 500 × 500 at 50, 50
	var paper = new Raphael(50, 50, 500, 500);

	// //Creates circle at x = 50, y = 40, with radius 10
	// var circle = paper.circle(50, 40, 10);

	// // Sets the fill attribute of the circle to red (#f00)
	// circle.attr("fill", "#f00");

	// // // // Sets the stroke attribute of the circle to white
	// circle.attr("stroke", "#fff");
	// circle.attr("stroke", "white");

	// Create pathways. M means to start drawing without a visible path at designated x and y coordinates.
	// l means to start drawing pathways between coordinates, and z means to close the path.
	var tetrisPiece = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
	
	tetrisPiece.attr(
        {
        	// 90 degree gradient from dark blue to light blue
            gradient: '90-#526c7a-#64a0c1',
            // navy blue border
            stroke: '#3b4449',
            // width of border
            'stroke-width': 10,
            // round the corners
            'stroke-linejoin': 'round'
        }
    );

    //tetrisPiece.rotate(-90);

    // bounce easing formula, the default is linear
    // tetrisPiece.animate({ stroke: '#3b4449'}, 1000, 'bounce', function() {
    // 	this.rotate(-90);
    // });

    tetrisPiece.animate({stroke: '#3b4449'}, 1000, 'bounce', function() {
    	this.animate({
	        stroke: 'purple'
	    }).rotate(-90);
    });

	//** Shift tetris object**//

    $(document).keydown(function(event) {
        if (event.which == 37) {
            tetrisPiece.animate({transform: "t-10,0"},'linear', 2000)
        }
    })

    //**spin demo**//
    var spin = Raphael.animation({transform: "...r360"}, 4000).repeat(Infinity);
    tetrisPiece.animate(spin, 'linear');
});