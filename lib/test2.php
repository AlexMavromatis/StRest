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
	
	}
	div #container1{
	
	float: right;
	
	}
	
	#container3 {
    height: 500px; 
    min-width: 510px; 
    max-width: 800px;
    margin: 0 auto;
}

	</style>
</head>

<body class="body" style="background-color:#e6fff2">	

 <center><div class="panel panel-primary">
	 
 <ul>
  <li><a class="active" href="#"> <input class="btn btn-primary" type="submit" onclick="window.simple()" value="Run Simulation"></a></li>
  <li><a href="#"><button id="button"  class="btn btn-primary" >Export Monte Carlo</button></a></li>
  <li><a href="#"><button id="button2"  class="btn btn-primary" >Export CAMEL</button></a></li>
  <li><a href="#" data-toggle="modal" data-target="#info"><button id="button2"  class="btn btn-primary" >Info</button></a></li>
  <li><a href="../index" ><button class="btn btn-primary" >Go Back</button></a></li>
</ul>

      <div class="panel-heading"><center><h4>Stress Test Panel</h4></center></div>
      <div class="panel-body">
    
      <div class="right">
       <form method="post" action="saveSimulation.php">
		   
       Capital Adequacy Evaluation: <input type="text" id="shareEquity" name="shareEquityEval"  class="form-control"  readonly>
      
       Asset Quality Evaluation: <input type="text" id="AssetQEVal"  class="form-control"  readonly>
            
       Management Evaluation: <input type="text" id="ManagementEval"  class="form-control" readonly>
            
       Earnings Evaluation: <input type="text"   id="EarningsEval"  class="form-control"  readonly>
       
       Liquidity Evaluation: <input type="text"  id="LiquitidyEval"  class="form-control"  readonly>
       
       General CAMEL Evaluation: <input type="text"  id="FinalCamel"  class="form-control"  readonly>
       
       Stress Test Outcome: <input type="text"  id="StressPass"  class="form-control"  readonly>
       
       Probability of Success: <input type="text"  id="StressSuccessProb"  class="form-control"  readonly>
      
       Probability of Failure: <input type="text"  id="StressFailureProb"  class="form-control"  readonly>

	   Max Drawdown: <input type="text"  id="Drawdown"  class="form-control"  readonly>
	   
	   <input type="hidden"  id="seedswon"  class="form-control"  readonly>
	   <input type="hidden"  id="seedslost"  class="form-control"  readonly>

       </br>
       <input type="submit" id="submit" class="btn btn-primary" value="Save Simulation" />
       </form>
       
       </div>
  
       <div class="left">

       Please select sensitivity Scenario:
       <select class="form-control" id="scenario" style="width: 300px" >
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
	<select class="form-control" id="SimulationTime" style="width: 300px" >
       <option value="Standard">6 Months</option>
       <option value="Extreme">1 Year</option>  
       <option value="Extreme">2 Years</option>
       <option value="Extreme">3 Years</option>
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
               
          
          </br>


</div>
    </div></center>


 <div class="panel panel-warning">
      <div class="panel-heading">Monte Carlo Graphical Representation Pie Chart</div>
      <div class="panel-body"><div id="container" style="height: 400px"></div>
      <div id="container1" style="height: 400px"></div>
</div></div>

    
    <div class="panel panel-warning">
      <div class="panel-heading">Monte Carlo Methodology Graphical Representation Scatter Plot</div>
      <div class="panel-body"><div id="container2" style="height: 400px" ></div>
</div></div>
    
    
 <div class="panel panel-warning">
      <div class="panel-heading">CAMEL BANK Rating Graphical Representation</div>
      <div class="panel-body"><div id="container3" style="height: 600px"></div>
  </div></div>
  
 <div class="panel panel-warning">
      <div class="panel-heading">CAMEL BANK Rating Graphical Representation and Comparison with Best Ranking</div>
      <div class="panel-body"> <div id="container4" style="height: 400px"></div></div></div>


 <div class="panel panel-warning">
      <div class="panel-heading">Probability of Success Graphical Representation</div>
      <div class="panel-body">    
<div id="container5" style="height: 400px"></div></div></div>


 <div class="panel panel-warning">
      <div class="panel-heading">Probability of Failure Graphical Representation</div>
      <div class="panel-body">    
<div id="container6" style="height: 400px"></div></div></div>


 <div class="panel panel-warning">
      <div class="panel-heading">Drawdown of Assets Graphical Representation</div>
      <div class="panel-body">    
<div id="container7" style="height: 400px"></div></div></div>


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
            filename: 'my-pdf'
        });
    });
    </script>
 <script>
  // the button handler
    $('#button2').click(function () {
        var chart = $('#container2').highcharts();
        chart.exportChart({
            type: 'application/pdf',
            filename: 'my-pdf2'
        });
    });
    </script>
    
<?php require_once "info.php" ?>
</body>

</html>
