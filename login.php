<?php
if (isset($_SERVER['HTTP_REFERER'])) {

	$connection = mysql_select_db("steve", mysql_connect("localhost", "steve", "password"));
	
	$mail= get_parameter("email");
	$pw = get_parameter("password");

	$test = mysql_fetch_assoc(mysql_query("SELECT * FROM users_test WHERE email = '$email'"));
	if ($test != false && hash("sha256",$test['pass_salt'].$pw == $test['pass_hash'])) { //if username/pw are correct
		$_SESSION["name"] = $email; //start session with name (i.e. kkarpack)
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
function get_parameter($param) {
	if (isset($_POST[$param])) {		//if name/pw are valid parameters
		return mysql_real_escape_string($_POST[$param]);		//return those
	} else { 						//if nothing posted
		header("HTTP/1.1 400 Invalid Request");
		die("HTTP/1.1 400 Invalid Request - you forgot to pass the proper parameters");
	}
}
?>