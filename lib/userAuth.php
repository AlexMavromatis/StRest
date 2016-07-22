<?php

session_start();
require_once "DbConnect.php";
$conn = DbConnect();
function authorizeUser($conn){

if(isset($_POST['submit'])) {

$email    = $_POST['mail'];
$password = $_POST['password']; 	
$password  = sha1($password);
$userQuery = "Select Email,password FROM bankdetails";
$result    = $conn->query($userQuery);

if($result->rowCount() > 0){
	foreach ($result as $item) {
		if($email == $item['Email'] && $password == $item['password']){
			$_SESSION['userID'] = $item['id'];
			header("Location: userInterface.php");
			die();
		}else
		
		header("Location: index.php");
		die();	
	}

}else

	header("Location: wrong.php");
	die();

}else 

	header("Location: index.php");
	die();
}

authorizeUser($conn);
?>