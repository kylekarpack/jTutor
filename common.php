<?php
	if (!isset($_SESSION["name"])) {
		session_start();
	}

	//this function is to perform redirects based on whether the user is logged in
	//takes a redirect header location and a true/false value to determine logged in or not
	function check($dir, $flag) {
		if (isset($_SESSION["name"]) == $flag) {
			header($dir);	
		}
	}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5 Transitional//EN" "http://www.w3.org/TR/html5/loose.dtd">

<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html" charset="utf-8">
	<title>Find a Conversation Partner!</title>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
	<link rel="stylesheet" href="style.css">
	<link rel='stylesheet' type='text/css' href='fullcalendar.css' />
	<link rel="shortcut icon" href="./assets/favicon.png">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
	<script src="js.js"></script>
	<script type='text/javascript' src='fullcalendar.js'></script></head>

<body>
	<div id="menu">
		<a href="index.php"><img src="assets/logo.png" class="logo" alt="Revercipe"></a>
		<?php if (isset($_SESSION["name"])) { ?>
			<button class="logout">Log Out</button>
		<?php } else { ?>
			<button class="register">Sign Up!</button>
		<?php } ?>
		
	</div>
	<div id="wrapper">