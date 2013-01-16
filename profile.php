<?php session_start();
if (isset($_SESSION["name"]) ) { # User is logged in
	include("common.php"); ?>
	<p>Hi, <?php echo $_SESSION["name"] ?>!</p>
	<form action="profilestore.php">
		<table class="info">
			<tr><td>Username:</td><td>kkarpack</td></tr>
			<tr><td>First Name:</td><td><input type="text" value="Kyle"></input></td></tr>
			<tr><td>Last Name:</td><td><input type="text" value="Karpack"></input></td></tr>
			<tr><td>Schedule:</td>
			<td>
			<a href="availability.php">
			<div id="minical">
			<script>
			$("#minical").fullCalendar({
				events: "datestore.php",
				editable:false,
				selectable:false,
				defaultView:"month",
				allDaySlot:false,
				ignoreTimeZone:false,
				header:false,
			});
			</script>
			</div>
			</a>
			</td></tr>
			<tr><td><input type="submit" value="Save Changes"></input></td>	</tr>
		</table>
	</form>

<?php } else { # User is not logged in
	header("Location: loginpage.php");
} ?>

<?php include("footer.html"); ?>