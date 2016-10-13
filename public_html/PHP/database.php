<?php
    
$dbhost = 'localhost:3036';
$dbuser = 'cl54-petedb';
$dbpass = 'gYCMX/Y42';

// $conn = mysql_connect($dbhost, $dbuser, $dbpass);
 $conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
	echo "Could not connect to database...";
}
else
{
  $sql = 'SELECT * FROM TestTable';

	mysql_select_db('cl54-petedb');
	$retval = mysql_query( $sql, $conn );
	if(! $retval )
	{
		echo "Could not get data...";
	}
while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
    echo "ID :{$row['ID']}  <br> ".
         "Name: {$row['Name']} <br> ".
         "Number: {$row['Number']} <br> ".
         "--------------------------------<br>";
		
} 

mysql_close($conn);

  
}
?>