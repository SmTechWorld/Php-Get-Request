<?php

$connection = mysql_connect("127.0.0.1", "root", "root");

// Selecting Database 
  $db = mysql_select_db("smtechworld", $connection);

//Fetching Values from URL  
$name2=$_POST['name1'];
$email2=$_POST['email1'];
$phone2=$_POST['phone1'];
$msg2=$_POST['msg1'];


//Insert query 
  $query = mysql_query("insert into register(Name,Phone_No, Email, Message) values ('$name2', '$email2', '$phone2','$msg2')");
  echo "Form Submitted succesfully";  
//connection closed
  mysql_close($connection);



?>
