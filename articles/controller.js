$(document).ready(function(){

	var menuBar = "<ul></ul>";
	$("nav").append(menuBar);

	var menu = [ 
		   "Home",
				 "Statement",
				 "Sketches",
				 "Reviews", 
				 "Stories", 
				 "View", 
				 "News", 
				  
				];

	var links = [ 
					  "../index.html",
				  "statement.html", 
				  "sketches.html", 
				  "book-reviews.html", 
				  "stories.html", 
				  "darkgreen.html", 
				  "salmon.html"
				];


	for(var i = 0; i < menu.length; i++){
		$("nav ul").append("<a href=" + links[i] + "><li class='menu'>" + menu[i] + "</li></a>");
	}

	$(".menu").css({
		"display": "inline-block",
		"margin-right": "10px",
		"border": "solid black 2px",
		"width": "130px",
		"height": "50px",
		"background-color": "darkgreen",
		"color": "white",
		"border-radius": "10px",
		"font-size": "20pt",
		"align-content": "center",
		"text-align": "center",
		"letter-spacing": "2px"
	});


	$("#return-link").html("<a href='../welcome.html'><p>Return</p></a>");
	$("#return-link a").css({
		"color":"white",
		"text-decoration":"none",
		"font-size": "3em"
	});


});





































