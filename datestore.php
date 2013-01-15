<?php
session_start();

//reject direct access eventually
//if (isset($_SERVER['HTTP_REFERER'])) {
if (isset($_SESSION["name"])  && isset($_GET["start"]) && isset($_GET["end"])) {
	$start = $_GET["start"];
	$end = $_GET["end"];
	$user = $_SESSION["name"];
	$connection = mysql_select_db("steve", mysql_connect("localhost", "steve", "password"));
	mysql_query("INSERT INTO availability VALUES ('$user','$start','$end')");
	echo ("Stored a start time of " . $start . " and an end time of " . $end . " successfully for " . $user);
} else {
	echo "broked";
	//header("Location: index.php"); //reject direct access to this page (low security)
}

?>