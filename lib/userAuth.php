<?php
session_start();
require "DbConnect.php";
$conn = DbConnect();

function authorizeUser($conn){

if(isset($_POST['submit'])) {

$email     = $_POST['mail'];
$password  = $_POST['password']; 	
$password  = sha1($password);
$userQuery = "Select Email,password FROM bankdetails WHERE password='$password' AND Email='$email'";
$result    = $conn->query($userQuery);

	if($result){
		$_SESSION['userID'] = $item['id'];
		header("Location: userInterface");
		die();
	}else
		header("Location: ../index");
		die();	
}else 
	header("Location: ../index");
	die();
}
authorizeUser($conn);
?>