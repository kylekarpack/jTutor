<?php session_start();
if (isset($_SESSION["name"]) ) { # User is logged in
	include("common.php"); ?>
	<p>Hi, <?php echo $_SESSION["name"] ?>!</p>
	<button onclick="window.location.href = availability.php">Set Your Availability</button>

<?php } else { # User is not logged in
	header("Location: loginpage.php");
} ?>

<?php include("footer.html"); ?>