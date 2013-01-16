<?php session_start();
if (isset($_SESSION["name"]) ) { # User is logged in
	include("common.php"); ?>
	<p>Hi, <?php echo $_SESSION["name"] ?>!</p>
	<form action="availability.php">
		<input type="submit" value="Set Your Availability"></input>
	</form>

<?php } else { # User is not logged in
	header("Location: loginpage.php");
} ?>

<?php include("footer.html"); ?>