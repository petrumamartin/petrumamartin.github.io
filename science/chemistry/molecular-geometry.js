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
	tetrahedral();
	trigonalBipyramidal();
}
function linear() {
	canvasText('linear', new Point(60, 20), 'black');
	canvasCircle(new Point(150, 50), 'cornflowerblue');
	canvasCircle(new Point(100, 50), 'firebrick');
	canvasCircle(new Point(200, 50), 'firebrick');
	canvasLine(new Point(110, 50), new Point(140, 50), 1, 'black');
	canvasLine(new Point(160, 50), new Point(190, 50), 1, 'black');
}
function tetrahedral() {

	canvasCircle(new Point(150, 200), 'cornflowerblue');
	canvasCircle(new Point(100, 230), 'firebrick');
	canvasCircle(new Point(200, 230), 'firebrick');
	canvasCircle(new Point(150, 140), 'firebrick');

	canvasLine(new Point(150, 190), new Point(150, 150), 1, 'black');
	canvasLine(new Point(108, 225), new Point(142, 205), 1, 'black');
	canvasLine(new Point(157, 206), new Point(192, 225), 1, 'black');

	canvasText('trigonal planar', new Point(60, 105), 'black');
}

function trigonalBipyramidal() {
	canvasText('tetrahedral', new Point(60, 290), 'black');

	canvasCircle(new Point(150, 375), 'cornflowerblue');
	canvasCircle(new Point(150, 320), 'firebrick');

	canvasLine(new Point(150, 365), new Point(150, 330), 1, 'black');
}

function canvasText(text, p1, colour) {
	context.fillStyle = colour;
	context.font = '20px serif';
	context.fillText(text, p1.x, p1.y);
	context.fill();
}
function canvasCircle(p1, colour) {
	context.fillStyle = colour;
	context.beginPath();
	context.arc(p1.x, p1.y, 10, 0, Math.PI * 2);
	context.fill();
	context.closePath();
}
function canvasLine(p1, p2, w, colour) {
	context.fillStyle = colour;
	context.lineWidth = w;

	context.beginPath();
	context.moveTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.stroke();
	context.closePath();
}
class Point{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}




