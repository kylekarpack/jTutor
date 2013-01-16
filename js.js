"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	$(".register").bind("click", register);
	
	$("#calendar").fullCalendar({
		events: "datestore.php",
		editable:true,
		selectable:true,
		selectHelper:true,
		defaultView:"agendaWeek",
		allDayDefault:false,
		slotMinutes:60,
		allDaySlot:false,
		ignoreTimeZone:false,
		header:{right:"month,agendaWeek",
				center:"title",
				left:"prev,next today",
				},
		select:function(startDate,endDate) { 
			store(startDate, endDate);
		},
		eventClick:function(calEvent) {
								$(this).fadeOut( function() {
									$.ajax({
										type: "GET",
										url: "datestore.php",
										data: { "delete": calEvent.id }
									});
								}
							)}
    });
});

function store(start,end) {
	start = $.fullCalendar.formatDate(start, 'yyyy-MM-dd hh:mm:ss');
	end = $.fullCalendar.formatDate(end, 'yyyy-MM-dd hh:mm:ss');
	//
	$.ajax({
		type: "POST",
		url: "datestore.php",
		data: { "start": start,
				 "end": end 
			}
	});
}

// utility functions
function logout() {
	window.location.href = "logout.php";
}

function register() {
	window.location.href = "register.php";
}