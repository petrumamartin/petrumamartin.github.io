$(document).ready(function(){

	var menuBar = "<ul></ul>";
	$("nav").append(menuBar);

	var menu = [ "Statement",
				 "Edit",
				 "Refactor", 
				 "Format", 
				 "View", 
				 "News", 
				 "Home" 
				];

	var links = [ "statement.html", 
				  "yellow.html", 
				  "blue.html", 
				  "orange.html", 
				  "green.html", 
				  "salmon.html", 
				  "../welcome.html" 
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
		"width": "80px"
	});


	$("#return-link").html("<a href='../welcome.html'><p>Return</p></a>");
	$("#return-link a").css({
		"color":"white",
		"text-decoration":"none",
		"font-size": "3em"
	});


});





































