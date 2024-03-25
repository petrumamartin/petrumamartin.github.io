/*
author:   Peter A. Martin
name:     proteins.js
date:     Friday, November 19, 2021
purpose:  program code for biology section

*/
var aminoacidName = [
  "Histidine", "Isoleucine", "Leucine", "Lysine", "Methionine", "Phenylalanine", "Threonine", "Tryptophan", "Valine", "Arginine", "Cysteine", "Glutamine", "Glycine", "Proline", "Tyrosine", "Alanine", "Aspartic acid", "Asparagine", "Glutamic acid", "Serine"
];
var aminoacidSymbol = [
  "His", "Ile", "Leu", "Lys", "Met", "Phe", "Thr", "Trp", "Val", "Arg", "Cys", "Gln", "Gly", "Pro", "Tyr", "Ala", "Asp", "Asp", "Glu", "Ser"
];

var aminoacidEssentiality = [
  "E", "E", "E", "E", "E", "E", "E", "E", "E", "C", "C", "C", "C", "C", "C", "N", "N", "N", "N", "N"
];

printProteins();
function printProteins() {
  var text = "";

  text += "<ul>";
  for(var i = 0; i < aminoacidName.length; i++)
    text += "<li><span onclick=\"proteininfo(" + i + ")\">" + aminoacidSymbol[i] + " " + aminoacidEssentiality[i] + " " + aminoacidName[i] + "</span></li>";
  text += "</ul>";

  document.getElementById("proteins").innerHTML = text;
};


function proteininfo(n){
  var symbol = aminoacidSymbol[n];
  var name = aminoacidName[n];
  var aminoacid = new AminoAcidType(symbol, name);
  aminoacid.printAminoAcidType();
  
};
function clearData(){
  document.getElementById("protein-properties").innerHTML = "";
};

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










