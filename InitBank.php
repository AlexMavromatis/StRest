<?php

require_once("DbConnect.php");
$conn = DbConnect();

mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER SET 'utf8'");

if(isset($_POST['submit'])) {

$name   	= $_POST['Bname'];
$coutry 	= $_POST['Country'];
$year   	= $_POST['year'];
$HDquarters = $_POST['HDcity'];
$mail		= $_POST['mail'];
$password	= $_POST['password'];
$password = sha1($password);		


//Initialzing bank to database
$preparebank = "INSERT INTO bankdetails(Name,Country,YearFounded,Headquarters,Email,password) VALUES(:name, :coutry, :year, :HDquarters, :mail, :password);";

$query  = $conn->prepare($preparebank);

//PDO insert defence to sql injections
$create = $query->execute(array(
		":name" 	  => $name,
		":coutry" 	  => $coutry,
		":year" 	  => $year,
		":HDquarters" => $HDquarters,
		":mail"		  => $mail,
		":password"   => $password
	));

	header("Location: Welcome.php");
	die();

}else{

	header("Location: Wrong.php");
	die();

}
 ?>