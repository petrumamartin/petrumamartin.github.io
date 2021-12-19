/*
author:   Peter A. Martin
name:     draw-program.js
date:     Friday, December 17, 2021
purpose:  draw program for pages
*/




function canvasText(text, p1, colour) {
	context.fillStyle = colour;
	context.font = '20px serif';
	context.beginPath();
	context.fillText(text, p1.x, p1.y);
	context.fill();
	context.closePath();
}
function canvasArc(p, r, w, colour) {
  context.strokeStyle = colour;
  context.lineWidth = w;

  context.beginPath();
  context.arc(p.x, p.y, r, 0, Math.PI * 2);
  context.stroke();
  context.closePath();
}
function canvasCircle(p1, r, colour) {
	context.fillStyle = colour;
	context.beginPath();
	context.arc(p1.x, p1.y, r, 0, Math.PI * 2);
	context.fill();
	context.closePath();
}
function canvasLine(p1, p2, w, colour) {
	context.strokeStyle = colour;
	context.lineWidth = w;

	context.beginPath();
	context.moveTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.stroke();
	context.closePath();
}
function canvasFillTriangle(a, b, c, colour) {
	context.fillStyle = colour;
	
	context.beginPath();
	context.moveTo(a.x, a.y);
	context.lineTo(b.x, b.y);
	context.lineTo(c.x, c.y);
	context.fill();
	context.closePath();
}
function canvasQuadraticCurve(begin, control, end, width, colour) {
  context.strokeStyle = colour;
  context.lineWidth = width;
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.quadraticCurveTo(control.x, control.y, end.x, end.y);
  context.stroke();
  //context.quadraticCurveTo(230, 240, 250, 240);
  //context.stroke();
  context.closePath();
}




class Point{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}










