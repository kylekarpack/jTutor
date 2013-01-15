"use strict";

$(window).load(function() {
	$(".logout").bind("click", logout);
	scheduler.init('scheduler_here',null,"week");
});

function logout() {
	window.location.href = "logout.php";
}