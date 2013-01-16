<?php 
if (isset($_SESSION["name"])) { # User is logged in
	header("Location: index.php"); //redirect to the index
} else { //user is not logged in
	include("common.php");
	?>
<!-- #wrapper opens here -->
	<div id="main">
		<p>
			Find a conversation partner!<br />
		</p>
		<p>
			Log in now to find someone or schedule your availablity!
		</p>
		<form id="loginform" action="login.php" method="post">
			<table>
				<tr><td>Username:</td> <td><input id="name" name="name" type="text" size="12" autofocus /></td></tr>
				<tr><td>Password:</td>  <td><input id="password" name="password" type="password" size="12" /></td></tr>
			</table>
				<div><input id="submitbutton" type="submit" value="Log in" /></div>
		</form>
		<?php //show an error if redirected to this page from login.php
			if (isset($_GET["retry"])) { ?>
				<p class="fail">Invalid username / password combination. Try again.</p>		
			<?php }	?>
	</div> <!-- a bit nasty on the indentation with the include -->
	<?php include("footer.html"); 
} ?>
