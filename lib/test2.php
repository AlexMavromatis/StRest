<!DOCTYPE html>
<html lang="en">

<head>
	<title>Stress Testing</title>
  	<meta charset="utf-8" />
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>
    <script src="http://code.highcharts.com/modules/offline-exporting.js"></script>
    <script src="https://code.highcharts.com/modules/funnel.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/highcharts-3d.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/test.css" media="screen" />
    <script src="../js/graph.js"></script>
<style>
div #container{
	
	float: left;
	100000000
	}
	div #container1{
	float: right;
	
	}
	
	input { font-size: 18px; }
	
	#container3 {
    height: 500px; 
    min-width: 510px; 
    max-width: 800px;
    margin: 0 auto;
}

	</style>
	
	<script>$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})</script>
</head>

<body class="body" style="background-color:#1F566B">	

 <center><div class="panel panel-primary">
	 
 <ul>
  <li><a class="active" href="#"> <input class="btn btn-primary" type="submit" onclick="window.simple()" value="Run Simulation"></a></li>
  <li><a href="#"><button id="button"  class="btn btn-primary" >Export Monte Carlo</button></a></li>
  <li><a href="#"><button id="button2"  class="btn btn-primary" >Export CAMEL</button></a></li>
  <li><a href="#"><button id="button3"  class="btn btn-primary" >Export Quantitative Risk Analysis</button></a></li>
  <li><a href="/lib/userInterface" ><button class="btn btn-primary" >My Portofolio</button></a></li>
  <li><a href="../index" ><button class="btn btn-primary" >Go Back</button></a></li>
  <li><a href="#" data-toggle="modal" data-target="#info"><button id="button2"  class="btn btn-primary" >Info</button></a></li>
</ul>

       <div class="panel-heading"><center><h4>Stress Test Panel</h4></center></div>
       <div class="panel-body">
    
       <div class="right">
       <form method="post" action="saveSimulation.php">
		   
       Capital Adequacy Evaluation: <input type="text" id="shareEquity" name="shareEquityEval"  class="form-control"  readonly>
      
       Asset Quality Evaluation: <input type="text" id="AssetQEVal"  class="form-control"  readonly>
            
       Management Evaluation:    <input type="text" id="ManagementEval"  class="form-control" readonly>
            
       Earnings Evaluation: 	 <input type="text"   id="EarningsEval"  class="form-control"  readonly>
       
       Liquidity Evaluation: 	 <input type="text"  id="LiquitidyEval"  class="form-control"  readonly>
       
       General CAMEL Evaluation: <input type="text" name="FinalCamel" id="FinalCamel"  class="form-control"  readonly>
       
       Stress Test Outcome:   <img src="../img/info.jpg" width=18;  data-toggle="tooltip" data-placement="top" title="This probability is a first estimation of the stress test NOT to be very reliable since it is based on the Bank Tier ratios. Please check the graphical analysis for further and more acurate results."></img> <input type="text"  name="StressPass" id="StressPass"  class="form-control"  readonly>
       
       Probability of Success:<img src="../img/info.jpg" width=18;  data-toggle="tooltip" data-placement="top" title="This probability is a first estimation of the stress test NOT to be very reliable since it is based on the Bank Tier ratios. Please check the graphical analysis for further and more acurate results."></img>
	   <input type="text" name="StressSuccessProb"  id="StressSuccessProb"  class="form-control"  readonly>
      
       Risk Percentage:<img src="../img/info.jpg" width=18;  data-toggle="tooltip" data-placement="top" title="This probability is well analyzed below in the fourth graph. The percentage is an approximation of the real value which is comprised of multiple variables."></img>
	   <input type="text"  name="StressFailureProb" id="StressFailureProb"  class="form-control"  readonly> 
	   Max Drawdown: <img src="../img/info.jpg" width=18;  data-toggle="tooltip" data-placement="top" title="This probability is the drawdown estimation of the time period of the simulation. If any then see the graphical representation below, even if the result should not be accurate provisions are suggested to be made."></img><input type="text" name="Drawdown" id="Drawdown"  class="form-control"  readonly>
	   
	   <input type="hidden"  name="seedswon" id="seedswon"  class="form-control"  readonly>
	   <input type="hidden"  id="seedslost"  class="form-control"  readonly>
	   <input type="hidden"  name="period" 	 id="period"  class="form-control"  readonly>
	   <input type="hidden"  name="scenario" 	 id="sce"  class="form-control"  readonly>

       </br>
       <input type="submit" id="submit" class="btn btn-primary" value="Save Simulation" />
       </form>
       
       </div>
  
       <div class="left">

       Please select sensitivity Scenario:
       <select class="form-control" name="Scenario" id="scenario" style="width: 300px" >
       <option value="Standard">Standard</option>
       <option value="medium">Medium</option>
       <option value="Extreme">Extreme</option>
       </select>
</br>
	<input type="text" id="ShareholdersEQ"  class="form-control" placeholder="Please input Banks Common Stocks Amount:" min="1000000" max="5000000000000000000" >
    </br>        
     <input type="text" id="RetainedEarnigs"  class="form-control"  placeholder="Please input Retained Earnigns Amount:" >            
</br>    
	<input type="text" id="RiskwAssets"  class="form-control" placeholder="Please input Risk Weigheted Assets Amount: " >
 </br>
	 <input type="text" id="TotalCapital"  class="form-control" placeholder="Please input Total Capital Amount:">
</br>
	 <input type="text" id="TotalDeposits"  class="form-control" placeholder="Please input Total Customer Deposits Amount:">
</br>
	
 	<input type="text" id="NPL"  class="form-control" placeholder="Non Performing Loans Amount:" >
 </br>
	        
	   Non Performing Loans Provision Percentage:
	<select class="form-control" id="NPLprovision" style="width: 300px" >
       <option value="Standard">100%</option>
       <option value="Extreme"><100%</option>
       </select>
	   </br>   
 
    <input type="text" id="TotalEquityShares"  class="form-control" placeholder=" Please input Total Equity Shares Amount" >            
      
      
     </div>
      
      	    
     <div class="middle">
		 Simulation Time Period:
	<select class="form-control" name="period" id="SimulationTime" style="width: 300px" >
       <option value="1">6 Months</option>
       <option value="2">1 Year</option>  
       <option value="3">2 Years</option>
       <option value="4">3 Years</option>
       </select>
	   </br>   
     <input type="text" id="IncomeRate"  class="form-control" placeholder="Income Growth Rate Percentage" >  </br>
            
     <input type="text" id="NetInterestIncome"    class="form-control" placeholder="Net Interest Income Amount">  </br>
            
     <input type="text" id="AVGearningsAssets"  	class="form-control" placeholder="Average Earnings Assets Amount ANNUAL">  </br>
      
     <input type="text" id="OpExpenses"  class="form-control" placeholder="Opareting Expenses Amount">  </br>
            
     <input type="text" id="NonInterestIncome"  class="form-control" placeholder="Non Interest Income">  </br>

	 <input type="text" id="AssetRate"  class="form-control" placeholder="Assets Growth Rate">  </br>
     
     <input type="text" id="ShareHoldersRate"  class="form-control" placeholder="Shareholders Equity Growth Rate">  </br>
         
     <input type="text" id="TotalAssets"  class="form-control" placeholder="Please input Total Assets Amount:" >            
</br>    
	 <input type="text" id="TotalLoans"  class="form-control" placeholder="Please input Total Loans Amount:" ></br>
   
      </div>
               <div id="smooth"></div>
          
          </br>


</div>
    </div></center>


 <div class="panel panel-warning" >
      <div class="panel-heading" style="background-color:#77C4E1">Monte Carlo Graphical Representation Pie Chart</div>
      <div class="panel-body"><div id="container" style="height: 400px"></div>
      <div id="container1" style="height: 400px"></div>
</div></div>

    
    <div class="panel panel-warning">
      <div class="panel-heading" style="background-color:#77C4E1">Monte Carlo Methodology Graphical Representation Scatter Plot</div>
      <div class="panel-body"><div id="container2" style="height: 400px" ></div>
</div></div>
    
    
 <div class="panel panel-warning">
      <div class="panel-heading" style="background-color:#77C4E1">CAMEL BANK Rating Graphical Representation and Comparison with Best Ranking</div>
      <div class="panel-body"><div id="container3" style="height: 600px"></div>
  </div></div>
  
 <div class="panel panel-warning">
      <div class="panel-heading" style="background-color:#77C4E1">CAMEL BANK Rating Graphical Representation</div>
      <div class="panel-body"> <div id="container4" style="height: 400px"></div></div></div>


 <div class="panel panel-warning">
      <div class="panel-heading" style="background-color:#77C4E1">Stress Test Quantitative Risk Analysis</div>
      <div class="panel-body">    
<div id="container5" style="height: 400px"></div></div></div>


 <div class="panel panel-warning">
      <div class="panel-heading" style="background-color:#77C4E1" >Probability of Failure Graphical Representation</div>
      <div class="panel-body">    
<div id="container6" style="height: 400px"></div></div></div>



</div>
    </div>



    <script src="../js/bootstrap.min.js"></script>
    <script src="../bootstrap-waitingfor.js"></script>

    <script>
  // the button handler
    $('#button').click(function () {
        var chart = $('#container').highcharts();
        chart.exportChart({
            type: 'application/pdf',
            filename: 'MonteCarloseeds'
        });
    });
    </script>
 <script>
  // the button handler
    $('#button2').click(function () {
        var chart = $('#container3').highcharts();
        chart.exportChart({
            type: 'application/pdf',
            filename: 'CAMELranking'
        });
    });
    </script>
    <script>
  // the button handler
    $('#button3').click(function () {
        var chart = $('#container5').highcharts();
        chart.exportChart({
            type: 'application/pdf',
            filename: 'RiskAnalysis'
        });
    });
    </script>
<?php require_once "info.php" ?>
</body>

</html>
