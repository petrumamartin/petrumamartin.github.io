$(document).ready(function(){

	var menuBar = "<ul></ul>";
	$("nav").append(menuBar);

	var menu = [ 
				 "Statement",
				 "Sketches",
				 "Book Reviews", 
				 "Stories", 
				 "View", 
				 "News", 
				 "Home" 
				];

	var links = [ 
				  "statement.html", 
				  "sketches.html", 
				  "book-reviews.html", 
				  "stories.html", 
				  "forestgreen.html", 
				  "salmon.html", 
				  "../index.html" 
				];


	for(var i = 0; i < menu.length; i++){
		$("nav ul").append("<a href=" + links[i] + "><li class='menu'>" + menu[i] + "</li></a>");
	}

	$(".menu").css({
		"display": "inline-block",
		"padding": "5px",
		"padding-right": "5px",
		"padding-left": "15px",
		"margin-right": "10px",
		"border": "solid black 2px",
		"width": "110px"
	});


	$("#return-link").html("<a href='../welcome.html'><p>Return</p></a>");
	$("#return-link a").css({
		"color":"white",
		"text-decoration":"none",
		"font-size": "3em"
	});


});





































