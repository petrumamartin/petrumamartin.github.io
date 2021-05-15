/*==========     controller for web page:  Civilization.html     ==========*/
$(document).ready(function(){
/*==========     I     ==========*/

/*==========     body     ==========*/
$("body").css({
  "margin-bottom": "100px"
});


/*==========     main article     ==========*/
$("#return-link a").css({
  "color": "black",
  "text-decoration":"none",
  "font-size": "3em"
});

  var mainArticle = 
  "<article>" + 
    "<p>" + 
      "What is <cite>civilization</cite>?<sup>[1]</sup>  So " + 
      "Why do humans build civilization?  " + 
      "There are many reasons, peace, comfort, easy of living etc., " + 
      "but the purpose of civilization may simply the facination with " + 
      "what humans can do with civilization.  "
    "</p>" + 
  "</article>"
  
  
  
  ;

  
  
  
  
  $("body").append(mainArticle);

 $("article").css({
   "width":"400px",
   "background-color":"powderblue"
 })
 $("article p").css({
   "line-height":"1.5em",
   "letter-spacing":"0.05em"
 });


});
