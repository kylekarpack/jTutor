"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	 $('#calendar').fullCalendar({
        // put your options and callbacks here
    });
});

function logout() {
	window.location.href = "logout.php";
}