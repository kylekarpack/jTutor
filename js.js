"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	 $('#calendar').fullCalendar({
		"editable":true,
		"selectable":true,
		"selectHelper":true,
		"defaultView":"agendaWeek",
		"slotMinutes":60,
		"allDaySlot":false,
		header:{right:"month,agendaWeek",
				center:"title",
				left:"prev,next today",
				},
		select:function(startDate,endDate) { 
			store(startDate, endDate);
		},		
    });
});

function store(start,end) {
	start = toDateString(start);
	end = toDateString(end);
	$.get("datestore.php",
				{ "start": start,
					"end": end 
				}
		);
}

// utility functions
function logout() {
	window.location.href = "logout.php";
}

function toDateString(start) {
	return start.getUTCFullYear() + '-' + ('00' + (start.getUTCMonth()+1)).slice(-2) + '-' + start.getUTCDate() + ' ' + ('00' + start.getUTCHours()).slice(-2) + ':' + ('00' + start.getUTCMinutes()).slice(-2) + ':' + ('00' + start.getUTCSeconds()).slice(-2);
}