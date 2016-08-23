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
	 return "cunt";
}


?>