/*
name: cells.js
date: Tuesday, December 14, 2021
*/

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

function main() {
  draw();
}

function draw() {
  createCell();
}
function createCell() {
  canvasText(new Point(200, 75), "Animal Cell", "black");
  cellMembrane();
  nucleus();
  canvasText(new Point(600, 75), "Plant Cell", "black");
  cellMembrane();
  nucleus();
}

function cellBody() {

}
function cellMembrane() {
  canvasArc(new Point(250, 250), 150, "salmon");
  canvasRectangle(new Point(550, 100), new Point(300, 300), "5", "forestgreen");
}
function nucleus() {
  canvasArc(new Point(230, 240), 50, "mediumslateblue");
  canvasArc(new Point(650, 240), 50, "mediumslateblue");
}

function canvasText(p, text, colour) {
  context.fillStyle = colour;
  context.font = '20px serif';
  context.beginPath();
  context.fillText(text, p.x, p.y);
  context.fill();
  context.closePath();
}
function canvasRectangle(p1, p2, lineWidth, colour) {
  context.strokeStyle = colour;
  context.strokeStyle = lineWidth;
  context.beginPath();
  context.strokeRect(p1.x, p1.y, p2.x, p2.y);
  context.stroke();
  context.closePath();
}
function canvasArc(p, r, colour) {
  context.strokeStyle = colour;
  context.lineWidth = "5";
  context.beginPath();
  context.arc(p.x, p.y, r, 0, Math.PI * 2);
  context.stroke();
  context.closePath();
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}















