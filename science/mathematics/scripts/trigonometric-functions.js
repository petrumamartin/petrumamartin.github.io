/*
author: Peter A. Martin
name: trigonometric-functions.js
date: Friday, January 14, 2021
purpose: code for solution to right triangles
*/

var angle, degree, radian, gradiant;
var sinDegree = 0, cosDegree = 0, tanDegree = 0;
var sinRadian = 0, cosRadian = 0, tanRadian = 0;
var sinGradiant = 0, cosGradiant = 0, tanGradian = 0;
function displaySolutions() {
	angle = document.querySelector("#angle").value;
	displayDegrees(angle);
	displayRadians(angle);
	displayGradiants(angle);
}
function displayDegrees(angle) {
	degree =  angle / ( 180 / Math.PI );

	sinDegree = Math.round(Math.sin(degree)*10000)/10000;
	document.querySelector("#sinDegree").innerHTML = sinDegree;

	cosDegree = Math.round(Math.cos(degree)*10000)/10000;
	document.querySelector("#cosDegree").innerHTML = cosDegree;

	if ( angle == 90 || angle == 270 )
		document.querySelector("#tanDegree").innerHTML = "NaN";
	else {
		tanDegree = Math.round(Math.tan(degree)*10000)/10000;
		document.querySelector("#tanDegree").innerHTML = tanDegree;
	}
}
function displayRadians(angle) {
	radian = angle;

	sinRadian = Math.round(Math.sin(radian)*10000)/10000;
	document.querySelector("#sinRadian").innerHTML = sinRadian;

	cosRadian = Math.round(Math.cos(radian)*10000)/10000;
	document.querySelector("#cosRadian").innerHTML = cosRadian;

	if ( angle == 90 || angle == 270 )
		document.querySelector("#tanRadian").innerHTML = "NaN";
	else {
		tanRadian = Math.round(Math.tan(radian)*10000)/10000;
		document.querySelector("#tanRadian").innerHTML = tanRadian;
	}
}
function displayGradiants(angle) {
	gradiant = ( angle / ( 180 / Math.PI ) ) * ( 90 / 100 );

	sinGradiant = Math.round(Math.sin(gradiant)*10000)/10000;
	document.querySelector("#sinGradiant").innerHTML = sinGradiant;

	cosGradiant = Math.round(Math.cos(gradiant)*10000)/10000;
	document.querySelector("#cosGradiant").innerHTML = cosGradiant;

	if ( angle == 90 || angle == 270 )
		document.querySelector("#tanGradiant").innerHTML = "NaN";
	else {
		tanGradiant = Math.round(Math.tan(gradiant)*10000)/10000;
		document.querySelector("#tanGradiant").innerHTML = tanGradiant;
	}
}
































