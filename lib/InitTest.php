<?php
session_start();
require_once "DbConnect.php";
$conn  = DbConnect();
$uid   = $_SESSION['userID'];
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER SET 'utf8'");

if(isset($_POST['submit'])) {

$camelEVAL      = $_POST["FinalCamel"];
$StressTest     = $_POST["StressPass"];
$successProb    = $_POST["StressSuccessProb"];
$RiskPercentage = $_POST["StressFailureProb"];
$SimScenario  	= $_POST["scenario"];
$SimDate 		= date("F j, Y, g:i a"); 
$SimPeriod  	= $_POST["period"];

	


//Initialzing test to database
$preparetest = "INSERT INTO tests(ID,SimDate,CAMEL,Outcome,Sprob,Risk,Period,Scenario) VALUES(:uid, :SimDate, :camelEVAL, :StressTest, :successProb, :RiskPercentage, :SimPeriod, :SimScenario);";

$query  = $conn->prepare($preparetest);

//PDO insert defence to sql injections
$create = $query->execute(array(
		":uid" 	  	      => $uid,
		":SimDate" 	      => $SimDate,
		":camelEVAL"      => $camelEVAL,
		":StressTest"     => $StressTest,
		":successProb"    => $successProb,
		":RiskPercentage" => $RiskPercentage,
		":SimPeriod"      => $SimPeriod,
		":SimScenario"    => $SimScenario
	));

	header("Location: userInterface");
	die();

}else{

	header("Location: Error404");
	die();

}
 ?>