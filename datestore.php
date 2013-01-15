<?php

//reject direct access eventually
//if (isset($_SERVER['HTTP_REFERER']) && isset($_SESSION["name"])) {
	session_start();
	$user = $_SESSION["name"];
	$connection = mysql_select_db("steve", mysql_connect("localhost", "steve", "password"));
	if ($_SERVER['REQUEST_METHOD'] == "POST") { //logging user input
		if (isset($_POST["start"]) && isset($_POST["end"])) {
			$start = $_POST["start"];
			$end = $_POST["end"];
			mysql_query("INSERT INTO availability VALUES ('$user','$start','$end')");
			echo ("Stored a start time of " . $start . " and an end time of " . $end . " successfully for " . $user);
		} else {
			header("HTTP/1.0 400 Invalid Request");
		}
	} else { //get request, load up the calendar with JSON data
		$query = mysql_query("SELECT start, end FROM availability WHERE username = '$user'");
		$events = array();
		for ($x = 0, $numrows = mysql_num_rows($query); $x < $numrows; $x++) {
			$row = mysql_fetch_assoc($query);
			// array in the form (startdatetime, enddatetime)
			$events[] = array($row["start"], $row["end"]); 			
		}
		//var_dump($events);
		$response = json_encode($events); 
		echo $response;
	}
//} else {
	// header("Location: index.php"); //reject direct access to this page (low security)
// }

?>