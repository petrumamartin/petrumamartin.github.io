/*==========     Controller for web page     ==========*/
$(document).ready(function(){
/*==========     ?     ==========*/


	/*==========     global variables     ==========*/
	var pages = [ "civilization.html", "communication.html", "education.html", "government.html", "orange.html", "green.html", "salmon.html","purple.html" ];
	var subjects = [ "Civilization", "Communication", "Education", "Government", "Orange", "Green", "Salmon", "Purple" ];

	$("body").css({
		"margin": "50px 100px",
		"font-size": "1.3em"
	});

	/*==========     website title     ==========*/
	var mainTitle = "<h1 id='main-title'>Civilization</h1>";
	$("body").append(mainTitle);
	$("#main-title").css({
		"text-align": "center",
		"font-family":"Footlight MT",
		"font-size": "4em"
	});

	/*==========     web page title     ==========*/
	var subject = "<h1 id='subject-title'></h1>";
	$("body").append(subject);
	for(var i = 0; i < pages.length; i++) {
		if ($("title").text() === subjects[i])
			$("h1#subject-title").html(subjects[i]);
	}
	$("h1#subject-title").css({
		"text-align": "center",
		"font-family": "Footlight MT"
	})

	/*==========     navigation menu     ==========*/
	var navBar = "<nav></nav>";
	$("body").append(navBar);
	var menuBar = "<ul></ul>";
	$("nav").append(menuBar);
	var menu = [ "Communication", "Education", "Government", "Orange", "Green", "Salmon", "Purple" ];
	for(var i = 0; i < menu.length; i++){
		$("nav ul").append("<a href=" + pages[i + 1] + "><li class='menu'>" + menu[i] + "</li></a>");
	}
	$(".menu").css({
		"display": "inline-block",
		"padding": "5px",
		"padding-right": "5px",
		"padding-left": "15px",
		"margin-right": "10px",
		"margin-bottom": "5px",
		"border": "solid black 2px",
		"border-radius": "10px",
		"width": "180px",
		"background-color": "rgb(255, 255, 255)",
		"text-align": "center", 
		"font-size": "1.2em"
	});

	/*==========     return link     ==========*/
	var returnHome = "<div id='return-link'></div>";
	$("body").append(returnHome);
	if($("title").html() === "Civilization") {
		$("#return-link").html("<a href='../index.html'><p>E.T. go Home</p></a>");

		
	}
	else {
		$("#return-link").html("<a href='civilization.html'><p>Return to Civilization</p></a>");
		$("#return-link a").css({
		"color":"white",
		"text-decoration":"none",
		"font-size": "3em"
		
	});
}
/*==========     civilization     ==========*/




});





































