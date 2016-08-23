<?php

session_start();
require_once "DbConnect.php";
$conn = DbConnect();

function authorizeUser($conn){

if(isset($_POST['submit'])) {

$email     = $_POST['mail'];
$password  = $_POST['password']; 	
$password  = sha1($password);
$userQuery = "Select * FROM bankdetails WHERE Email='$email' AND password='$password'";
$result    = $conn->query($userQuery);

if($result->rowCount() > 0){
	foreach ($result as $item) {
			$_SESSION['userID'] = $item['id'];
			header("Location: userInterface");
			die();
		}
	
}else 

	header("Location: Error404");
	die();
}else 

	header("Location: Error404");
	die();
}
authorizeUser($conn);
?>