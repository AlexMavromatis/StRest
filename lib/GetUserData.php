<?php
 session_start();

function GetUserData($conn,$uid){

$userQuery = "Select * FROM bankdetails WHERE id='$uid'";
$result    = $conn->query($userQuery);
	
	
if($result->rowCount() > 0){
		foreach ($result as $item) {
			return $item;
}

}else
	 return "Error";
}

function GetTestData($conn,$uid){

     $userQuery = "Select * FROM tests WHERE ID='$uid'";
     $result    = $conn->query($userQuery);
	
     return $result;

} 


function deleteTest($conn,$Tid) {
	$userQuery = "delete from tests where TestID ='$Tid'";
 	$result = $conn->query($userQuery);

	    if (!$result) {
	        echo(mysql_error());
		exit();
	    }
		
	return $result;
	}



?>
