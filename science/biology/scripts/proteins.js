/*
author:   Peter A. Martin
name:     proteins.js
date:     Friday, November 19, 2021
purpose:  program code for biology section

*/

class AminoAcid {
  constructor(s) {
    this.symbol = s;
  }

}
class AminoAcidType extends AminoAcid {
  constructor(s, n) {
    super(s);
    this.name = n;
  }

  printAminoAcidType() {
    document.getElementById("protein-properties").innerHTML = this.symbol + " " + this.name;
  };  
}










