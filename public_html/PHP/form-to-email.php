<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="blackandgreen.css" media="screen">
  <title>peterarden.net/contact</title>
</head>

<body>
<section>
<div id="sidebar">
</div>

<div id="bodyborder">
<div id="header"><p>peterarden.net/contact</p></div>
</div>
</section>
<br>
<br>
<section>
<div id="sidebar">
<p><form action="index.html">
<input type="submit" value=" Home ">
</form></p>
<form action="code.html">
<p><input type="submit" value="Code">
</form></p>
<p><form action="contact.html">
<input type="submit" value="Contact">
</form></p>
<p><form target="_blank" action="https://github.com/pda87">
<input type="submit" value="Github">
</form></p>
</div>
<div id="bodyborder">
<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{

    echo "<h2>Form must not be empty...</h2>";
	echo "<p> </p>";
	echo "Something went wrong...";
	echo "<br><br>";
	echo "<br><br>";
	
	echo "<br><br><br><br></section><br><br><section><div id=\"sidebar\"></div><div id=\"bodyborder\"><div id=\"footer\"><small>peter arden 2015©</small></div></div>";
	echo "<section></body></html>";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'peterarden@peterarden.net';//<== update the email address
$email_subject = "peterarden.net Message From $name";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n \n $message\n \n Email: $visitor_email \n \n".
    
$to = "peterarden@peterarden.net";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thankyou page.
header('Location: http://www.peterarden.net/thankyou.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?>
<br>
<br>
</section>
<br>
<br>
<section>
<div id="sidebar">
</div>

<div id="bodyborder">
<div id="footer"><small>peter arden 2015©</small></div>
</div>
</section>

</body>
</html>
