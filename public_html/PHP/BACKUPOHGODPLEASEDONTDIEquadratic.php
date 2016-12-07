<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="style.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </head>
  <body onload="getPageTitle()">
  
  <div id="wrapper">
    <div class="container-fluid">
				<div class="page-header">
		  <div class="btn-group btn-group-justified" id="headerbuttons">
			<a href='http://www.peterarden.net' class="btn btn-primary">Home</a>
			<a href='http://www.peterarden.net/code.html' class="btn btn-primary">Code</a>
			<a href='http://www.peterarden.net/contact.html' class="btn btn-primary">Contact</a>
			<a href='http://flickr.com/photos/pda87' target="_blank" class="btn btn-primary">Flickr</a>
			<a href='http://github.com/pda87' target="_blank" class="btn btn-primary">Github</a>
		</div>
		</div>
				<div class="page-header">
		<h1 class="text-uppercase">
		<p id="websitetitle">peterarden.net/</p>
		<p><a href="http://www.peterarden.net/contact.html"><span class="glyphicon glyphicon-envelope" id="mailenvelope"></span></a></h1></p>
		</div>
		</div>
		
		<?php
		$a = $_GET["a"];
		$b = $_GET["b"];
		$c = $_GET["c"];

		$discriminant = (($b * $b) - (4 * $a * $c));

		if ($a == null || $b == null || $c == null)
		{
		  echo "<h2>QuadraticEquationSolver:</h2>";
			echo "Something went wrong... Make sure you enter numbers...";
			
		}

		else

		{

		if ($discriminant < 0)
			{
			$b = -$b;
			$a = 2 * $a;
			$imaginarycomponent = sqrt(-$discriminant);
			echo "<h2>Here are the imaginary solutions to the equation:</h2>";
								
			echo "<p>x1 = [($b + (($imaginarycomponent)i)/$a]";
			echo "</p>";
			echo "<p>x2 = [($b - (($imaginarycomponent)i)/$a]";
			echo "</p>";
			
			}
			

		else if ($discriminant > 0)
		{
		$x1 = ((-$b + (sqrt(($b * $b) - (4 * $a * $c))))/(2*$a));
		$x2 = ((-$b - (sqrt(($b * $b) - (4 * $a * $c))))/(2*$a));

		echo "<h2>Here are the solutions to the equation:</h2>";
		echo "<p>x1 = ", $x1;
		echo "</p>";
		echo "<p>x2 = ", $x2;
		echo "</p>";
		}

		else if ($discriminant == 0)
		{
		$x = ((-$b + (sqrt(($b * $b) - (4 * $a * $c))))/(2*$a));
		echo "<h2>The equation has one solution:</h2>";
		echo "<p>x = ", $x;
		echo "</p>";
		}

		else {
			echo "<h2>QuadraticEquationSolver:</h2>";
			echo "Something went wrong... Make sure you enter numbers...";
			 }
		}

		?> 
		

	</div>
  </div>
  <div id="pagefooter">
  <small>PETERARDEN.NET 2015©</small>
  </div>
  </body>
  <script type="text/JavaScript" src="JavaScript/scripts.js"></script>
</html>