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

	ctx.fillStyle = 'cornflowerblue';
	ctx.beginPath();
	ctx.arc(150, 150, 10, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.closePath();
	ctx.fillStyle = 'firebrick';
	ctx.beginPath();
	ctx.arc(100, 180, 10, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(200, 180, 10, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = 'black';
  ctx.lineWidth = '3';
	ctx.beginPath();
	ctx.moveTo(108, 175);
	ctx.lineTo(142, 155);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(157, 156);
	ctx.lineTo(195, 175);
	ctx.stroke();
	ctx.closePath();

}