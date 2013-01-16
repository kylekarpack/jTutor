"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	$(".register").bind("click", register);
	
	var calendar = $("#calendar").fullCalendar({
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
		//Make selected events stick, store then to database
		select:function(startDate, endDate) {
						store(startDate, endDate);
						calendar.fullCalendar('renderEvent',
								{
									title: "Available",
									start: startDate,
									end: endDate,
								},
								true // make the event "stick"
							);
						},
		eventResize:function(calEvent) {
			update(calEvent);
		},
		eventDrop:function(calEvent) {
			update(calEvent);
		},
		//delete on click (add functionality here?
		eventClick:function(calEvent) {
						$(this).fadeOut( function() {
							$.ajax({
								type: "GET",
								url: "datestore.php",
								data: { "delete": calEvent.id }
							});
						}
		)},
		
	});
});

function update(calEvent) {
	var id = calEvent.id;
	var start = $.fullCalendar.formatDate(calEvent.start, 'yyyy-MM-dd hh:mm:ss');
	var end = $.fullCalendar.formatDate(calEvent.end, 'yyyy-MM-dd hh:mm:ss');
	
	$.ajax({
		type: "POST",
		url: "datestore.php",
		data: { 	"update": id, //update the event with this ID (post to datestore.php)
					"start": start,
					"end": end 
			}
	});
}

function store(start,end) {
	start = $.fullCalendar.formatDate(start, 'yyyy-MM-dd hh:mm:ss');
	end = $.fullCalendar.formatDate(end, 'yyyy-MM-dd hh:mm:ss');

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