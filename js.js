"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	 $('#calendar').fullCalendar({
		events: "datestore.php",
		editable:true,
		"selectable":true,
		"selectHelper":true,
		"defaultView":"agendaWeek",
		allDayDefault:false,
		"slotMinutes":60,
		"allDaySlot":false,
		ignoreTimeZone:false,
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
	start = $.fullCalendar.formatDate(start, "yyyy-MM-dd hh:mm:ss");
	end = $.fullCalendar.formatDate(end, "yyyy-MM-dd hh:mm:ss");
	//
	$.ajax({
		type: "POST",
		url: "datestore.php",
		data: { "start": start,
				 "end": end 
			}
	});
	$.ajax({
		type: "GET",
		url: "datestore.php",
		success: function(data) {
			data = $.parseJSON(data);
			//console.log(data);
		}
	});
}

// utility functions
function logout() {
	window.location.href = "logout.php";
}

function stringToDate(str) {
	var t = str.split(/[- :]/);
	// Apply each element to the Date function
	return new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
}