/*
 File name:  main.js
 Created:    Monday, November 24, 2025
 Author:     Peter A. Martin
 Purpose:    Functions for layout
*/


let navOpen, navClose, navLinks, navAchor, navFlag;
function nav() {
 navOpen = document.querySelector("#open");
 navClose = document.querySelector("#close");
 navLinks = document.querySelector("#links");
 navAchor = document.querySelector("#links a");

 navClose.style.visibility = "hidden";
 navLinks.style.visibility = "hidden";
 navFlag = false;

 navOpen.addEventListener('click', ()=> {
  if( !navFlag ) {
   navOpen.style.visibility = "hidden";
   navClose.style.visibility = "visible";
   navLinks.style.visibility = "visible";
   navFlag = true;
  }
 });

 navClose.addEventListener('click', ()=>{
  if( navFlag ) {
   navOpen.style.visibility = "visible";
   navClose.style.visibility = "hidden";
   navLinks.style.visibility = "hidden";
   navFlag = false;
  }
 });
/*
 navAchor.addEventListener('mouseover', ()=>{
  navAchor
 });
*/
}







