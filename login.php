<?php
// TO DO: implement hashing and salting!
if (isset($_SERVER['HTTP_REFERER'])) {

	$connection = mysql_select_db("steve", mysql_connect("localhost", "steve", "password"));

	$name = get_parameter("name");
	$pw = get_parameter("password");

	$test = mysql_fetch_row(mysql_query("SELECT password FROM users_test WHERE username = '$name'"));
	if ($test != false && $pw == $test[0]) { //if name and pw are correct
		session_start();
		$_SESSION["name"] = $name; //start session with name (i.e. kkarpack)
		header("Location: index.php"); //redirect to the list
		die();
	} else {
		echo "broken";
		header("Location: loginpage.php?retry=yes"); //redirect back home if wrong
		die();
	}
} else {
	header("Location: index.php"); //reject direct access to this page (low security)
}

//helper function to check for valid data passed
function get_parameter($name) {
	if (isset($_POST[$name])) {		//if name/pw are valid parameters
		return mysql_real_escape_string($_POST[$name]);		//return those
	} else { 						//if nothing posted
		header("HTTP/1.1 400 Invalid Request");
		die("HTTP/1.1 400 Invalid Request - you forgot to pass the proper parameters");
	}
}
?>