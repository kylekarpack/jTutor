"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	 $('#calendar').fullCalendar({
		"selectable":true,
		"selectHelper":true,
		"defaultView":"agendaWeek",
		"header":{"month"},
        // put your options and callbacks here
    });
});

function logout() {
	window.location.href = "logout.php";
}