/*
  author:   Peter A. Martin
  name:     molecular-geometry.js
  date:     Sunday, December 05, 2021
  purpose:  source file for canvas javascript code
*/

function main() {
	draw();
}
function draw() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	linear(ctx);
	tetrahedral(ctx);
	trigonalBipyramidal(ctx);
}
function linear(ctx) {

	canvasText(ctx, 'linear', new Point(60, 20), 'black');
	canvasCircle(ctx, new Point(150, 50), 'cornflowerblue');
	canvasCircle(ctx, new Point(100, 50), 'firebrick');
	canvasCircle(ctx, new Point(200, 50), 'firebrick');
	canvasLine(ctx, new Point(110, 50), new Point(140, 50), 1, 'black');
	canvasLine(ctx, new Point(160, 50), new Point(190, 50), 1, 'black');
}
function tetrahedral(ctx) {

	canvasCircle(ctx, new Point(150, 200), 'cornflowerblue');
	canvasCircle(ctx, new Point(100, 230), 'firebrick');
	canvasCircle(ctx, new Point(200, 230), 'firebrick');
	canvasCircle(ctx, new Point(150, 140), 'firebrick');

	canvasLine(ctx, new Point(150, 190), new Point(150, 150), 1, 'black');
	canvasLine(ctx, new Point(108, 225), new Point(142, 205), 1, 'black');
	canvasLine(ctx, new Point(157, 206), new Point(192, 225), 1, 'black');

	canvasText(ctx, 'trigonal planar', new Point(60, 105), 'black');
}

function trigonalBipyramidal(ctx) {
	canvasText(ctx, 'tetrahedral', new Point(60, 290), 'black');

	canvasCircle(ctx, new Point(150, 375), 'cornflowerblue');
	canvasCircle(ctx, new Point(150, 320), 'firebrick');

	canvasLine(ctx, new Point(150, 365), new Point(150, 330), 1, 'black');
}



function canvasText(context, text, p1, colour) {
	context.fillStyle = colour;
	context.font = '20px serif';
	context.fillText(text, p1.x, p1.y);
	context.fill();
}
function canvasCircle(context, p1, colour) {
	context.fillStyle = colour;
	context.beginPath();
	context.arc(p1.x, p1.y, 10, 0, Math.PI * 2);
	context.fill();
	context.closePath();
}
function canvasLine(context, p1, p2, w, colour) {
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




