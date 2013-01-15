"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	 $('#calendar').fullCalendar({
		"selectable":true,
		"selectHelper":true,
		"defaultView":"agendaWeek",
		"slotMinutes":60,
		"allDaySlot":false,
		header:{right:"month,agendaWeek",
				center:"title",
				left:"prev,next today",
				},
    });
});

function logout() {
	window.location.href = "logout.php";
}