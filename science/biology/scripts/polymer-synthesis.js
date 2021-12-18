/*
author:   Peter A. Martin
name:     polymer-synthesis.js
date:     Friday, December 17, 2021
purpose:  demonstrate polymer synthesis
*/

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function main() {
  draw();
}
function draw() {
  aminoAcidDraw();
}
function aminoAcidDraw() {
  const points = []; points[0] = new Point(130, 170); points[1] = new Point(130, 140);
  alphaCarbon(points);
  aminoGroup();
  carboxylGroup();
  peptideBond();
}
function alphaCarbon(p) {
  canvasCircle(new Point(130, 180), "10", "rgb(34,34,34)");

  canvasArc(new Point(130, 130), "10", "2", "rgb(0,0,0)");
  canvasCircle(new Point(130, 130), "9", "rgb(255,255,255)");
  canvasLine(p[0], p[1], "1", 'rgb(0,0,0)');

  canvasCircle(new Point(130, 230), "10", "rgb(221, 119, 255)");
  canvasText("R", new Point(124, 236), 'rgb(0,0,0)');
  canvasLine(new Point(130, 220), new Point(130, 190), "1", 'rgb(0,0,0)');
}
function aminoGroup() {
  canvasCircle(new Point(80, 180), "10", "rgb(34, 51, 255)");
  canvasLine(new Point(120, 180), new Point(90, 180), "1", "rgb(0,0,0)");

  canvasArc(new Point(40, 150), "10", "2", "rgb(0,0,0)");
  canvasCircle(new Point(40, 150), "9", "rgb(255,255,255)");
  canvasLine(new Point(72, 174), new Point(48, 157), "1", "black");
  
  canvasArc(new Point(40, 210), "10", "2", "rgb(0,0,0)");
  canvasCircle(new Point(40, 210), "9", "rgb(255,255,255)");
  canvasLine(new Point(72, 186), new Point(49, 204), "1", "rgb(0,0,0)");
}
function carboxylGroup() {
  canvasCircle(new Point(180, 180), '10', 'rgb(34,34,34)');
  canvasLine(new Point(140, 180), new Point(170, 180), '1', 'rgb(0,0,0)');

  canvasCircle(new Point(220, 150), '10', 'rgb(255, 34, 0)');
  canvasLine(new Point(187, 175), new Point(212, 156), '5', 'rgb(0,0,0)');

  canvasCircle(new Point(220, 210), '10', 'rgb(255, 34, 0)');
  canvasLine(new Point(188, 186), new Point(213, 205), '1', 'rgb(0,0,0)');

  canvasArc(new Point(250, 210), '10', '2', 'rgb(0,0,0)');
  canvasCircle(new Point(250, 210), '9', 'rgb(255,255,255)');
  canvasLine(new Point(230, 210), new Point(240, 210), '1', 'rgb(0,0,0)');
}
function peptideBond() {
  canvasCircle(new Point(650, 180), '10', 'rgb(0,0,0)');

  canvasCircle(new Point(700, 180), '10', 'rgb(34, 51, 255)');
  canvasLine(new Point(660, 180), new Point(690, 180), '1', 'rgb(0,0,0)');

  canvasCircle(new Point(650, 130), '10', 'rgb(255, 34, 0)');
  canvasLine(new Point(650, 170), new Point(650, 140), '5', 'rgb(0,0,0)');

  canvasArc(new Point(700, 130), '10', '2', 'rgb(0,0,0)');
  canvasCircle(new Point(700, 130), '9', 'rgb(255,255,255)');
  canvasLine(new Point(700, 170), new Point(700, 140), '1', 'rgb(0,0,0)');
}









