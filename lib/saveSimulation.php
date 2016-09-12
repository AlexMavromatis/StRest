<?php


$camelEVAL      = $_POST["FinalCamel"];
$StressTest     = $_POST["StressPass"];
$successProb    = $_POST["StressSuccessProb"];
$RiskPercentage = $_POST["StressFailureProb"];
$SimScenario  	= $_POST["scenario"];
$SimDate 		= date("F j, Y, g:i a"); 
$SimPeriod  	= $_POST["period"];

echo "Simulation Date "        .  $SimDate       .   "</br>"; 
echo "Test Camel Evaluation "  .  $camelEVAL     .   "</br>";
echo "Stress Test " 		   .  $StressTest    . 	 "</br>";
echo "Probability of Success " .  $successProb   .	 "</br>";
echo "Risk Percentage "        .  $RiskPercentage.   "</br>";
echo "Simulation Period "      .  $SimPeriod     .	 "</br>"; 
echo "Simulation Scenario "    .  $SimScenario   .   "</br>"; 




?>
