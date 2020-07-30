$(document).ready(function(){

	var list = $("#old-list").html();
	$("#new-list").append(list);

	$("#new-list").css({"background-color":"rgba(200,10,150,0.5)"});

	var menuBar = "<ul></ul>";
	$("nav").append(menuBar);

	var menu = [ "File", "Edit", "Refactor", "Format", "View", "News", "Help" ];
	var links = [ "red.html", "yellow.html", "blue.html", "orange.html", "green.html", "salmon.html", "purple.html" ];
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




	$("#return-link").html("<a href='red.html'><p>Return</p></a>");//.css({"color":"yellow","text-decoration":"none"});
	$("#return-link a").css({
		"color":"white",
		"text-decoration":"none",
		"font-size": "3em"
	});







});





































