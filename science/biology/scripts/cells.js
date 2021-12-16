/*
author:   Peter A. Martin
name:     cells.js
date:     Thursday, December 16, 2021
purpose:  class library for cell properties and behaviours
*/

function main() {
  let nucleolus = new Nucleolus();
  let chromatin = new Chromatin(new Point(205, 220), new Point(220, 200), new Point(230, 230), "rebeccapurple");
}

class Cell {
  constructor() {

  }
}

class Membrane {
  constructor() {
    
  }
}

class Nucleus {
  constructor(nuclearEnvelope, nucleolus) {
    this.nuclearEnvelope = nuclearEnvelope;
    this.nucleolus = nucleolus;
  }
}
class NuclearEnvelope {
  constructor() {

  }
}

class Nucleolus {
  constructor() {
    this.makeNucleolus();
  }
  makeNucleolus() {
    canvasFillArc(new Point(230, 260), 20, "rebeccapurple");
  }
}

class Chromatin {
  constructor(begin, control, end, colour) {
    this.begin = begin;
    this.control = control;
    this.end = end;
    this.width = Math.random() * 3;
    this.colour = colour;
    this.makeChromatin();
  }
  makeChromatin() {
    canvasQuadraticCurve(this.begin, this.control, this.end, this.width, this.colour);
  }
}




