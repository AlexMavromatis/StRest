<?php
    $id = $_GET['id'];
    require "DbConnect.php";
    require "GetUserData.php";
    $conn  = DbConnect();

	deleteTest($conn,$id);
	echo '<center><h1>Deleting Test....</h1></center>';
	$ref = $_SERVER['HTTP_REFERER'];
	header('refresh: 2; url=' . $ref);

?>