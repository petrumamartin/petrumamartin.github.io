/*
  author:   Peter A. Martin
  name:     molecular-geometry.js
  date:     Sunday, December 05, 2021
  purpose:  source file for canvas javascript code
*/
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function main() {
	draw();
}
function draw() {
	linear();
	trigonalPlanar();
	tetrahedral();
	trigonalBipyramidal();
}
function linear() {
	canvasText('linear', new Point(60, 20), 'black');
	canvasCircle(new Point(150, 50), 10, 'cornflowerblue');
	canvasCircle(new Point(100, 50), 10, 'firebrick');
	canvasCircle(new Point(200, 50), 10, 'firebrick');
	canvasLine(new Point(110, 50), new Point(140, 50), 1, 'black');
	canvasLine(new Point(160, 50), new Point(190, 50), 1, 'black');
}
function trigonalPlanar() {

	canvasCircle(new Point(150, 200), 10, 'cornflowerblue');
	canvasCircle(new Point(100, 230), 10, 'firebrick');
	canvasCircle(new Point(200, 230), 10, 'firebrick');
	canvasCircle(new Point(150, 140), 10, 'firebrick');

	canvasLine(new Point(150, 190), new Point(150, 150), 1, 'black');
	canvasLine(new Point(108, 225), new Point(142, 205), 1, 'black');
	canvasLine(new Point(157, 206), new Point(192, 225), 1, 'black');

	canvasText('trigonal planar', new Point(60, 105), 'black');
}

function tetrahedral() {
	canvasText('tetrahedral', new Point(60, 290), 'black');
	canvasCircle(new Point(150, 375), 10, 'cornflowerblue');
	canvasCircle(new Point(150, 320), 10, 'firebrick');
	canvasLine(new Point(150, 365), new Point(150, 330), 1, 'black');	
	canvasCircle(new Point(200, 395), 10, "firebrick");
	canvasLine(new Point(160, 377), new Point(191, 391), 1, "black");
	canvasCircle(new Point(110, 410), 10.5, "firebrick");	
	canvasFillTriangle(new Point(147, 378), new Point(115, 400), new Point(120, 405), "black");
	canvasCircle(new Point(95, 385), 8, "firebrick");
	canvasLine(new Point(140, 377), new Point(103, 384), 1, 'black');
}
function trigonalBipyramidal() {
	canvasText('trigonal bipyramidal', new Point(60, 470), 'black');
	canvasCircle(new Point(150, 580), 10, 'cornflowerblue');
	canvasCircle(new Point(150, 520), 10, 'firebrick');

	canvasCircle(new Point(150, 640), 10, 'firebrick');

	canvasCircle(new Point(215, 580), 9, 'firebrick');

	canvasCircle(new Point(90, 600), 10.5, 'firebrick');

	canvasCircle(new Point(110, 565), 9, 'firebrick');
}




