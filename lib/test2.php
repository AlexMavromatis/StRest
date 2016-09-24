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
    <link rel="stylesheet" type="text/css" href="../css/test.css" media="screen" />
    <script src="../js/graph.js"></script>
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
       <form method="post" action="InitTest.php">
		   
       Capital Adequacy Evaluation: <input type="text" id="shareEquity" name="shareEquityEval"  class="form-control"  readonly></br>
      
       Asset Quality Evaluation: <input type="text" id="third"  class="form-control"  readonly></br>
            
       Management Evaluation: <input type="text" id="second"  class="form-control" readonly></br>
            
       Earnings Evaluation: <input type="text"   id="third"  class="form-control"  readonly></br>
       
       Liquidity Evaluation: <input type="text"  id="third"  class="form-control"  readonly></br>
       
       General CAMEL Evaluation: <input type="text"  id="third"  class="form-control"  readonly></br>
       
       Stress Test Outcome: <input type="text"  id="third"  class="form-control"  readonly></br>
       
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
	<input type="text" id="ShareholdersEQ"  class="form-control" placeholder="Please input Shareholders Equity Amount:" >
    </br>        
     <input type="text" id="RetainedEarnigs"  class="form-control"  placeholder="Please input Retained Earnigns Amount:" >            
</br>    
	<input type="text" id="RiskwAssets"  class="form-control" placeholder="Please input Risk Weigheted Assets Amount: " >
 </br>
	 <input type="text" id="TotalCapital"  class="form-control" placeholder="Please input Total Capital Amount:">
</br>
	
	Non Performing Loans Percentage:
	<select class="form-control" id="NPL" style="width: 300px" >
       <option value="Standard">2-10%</option>
       <option value="medium">10-30%</option>
       <option value="Extreme">30-60%</option>
       </select>
	   </br>        
	   Non Performing Loans Provision Percentage:
	<select class="form-control" id="NPLprovision" style="width: 300px" >
       <option value="Standard"><100%</option>
       <option value="Extreme">100%</option>
       </select>
	   </br>   
	      Non Performing Loans Provision Allowance Percentage:
	<select class="form-control" id="NPLallowance" style="width: 300px" >
       <option value="Standard">2-10%</option>
       <option value="Extreme">10-30%</option>
       </select>
	   </br>   
    <input type="text" id="TotalEquityShares"  class="form-control" placeholder=" Please input Total Equity Shares Amount" >            
      
      
     </div>
      
      	    
     <div class="middle">
		 Simulation Time Period:
	<select class="form-control" id="NPLallowance" style="width: 300px" >
       <option value="Standard">6 Months</option>
       <option value="Extreme">1 Year</option>  
       <option value="Extreme">2 Years</option>
       <option value="Extreme">3 Years</option>
       </select>
	   </br>   
     <input type="text" id="IncomeRate"  class="form-control" placeholder="Income Growth Rate Percentage" >  </br>
            
     <input type="text" id="NetInterestIncome"    class="form-control" placeholder="Net Interest Income Amount">  </br>
            
     <input type="text" id="AVGearningsAssets"  	class="form-control" placeholder="Average Earnings Assets Amount">  </br>
      
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
      <div class="panel-heading">Monte Carlo Graphical Representation</div>
      <div class="panel-body"><div id="container" style="height: 400px"></div>
</div>
    </div>
    <div class="panel panel-warning">
      <div class="panel-heading">D'Alambert Methodology Graphical Representation</div>
      <div class="panel-body"><div id="container" style="height: 400px"></div>
</div>
    </div> 
    
 <div class="panel panel-warning">
      <div class="panel-heading">Panel with panel-warning class</div>
      <div class="panel-body">    
<div id="container2" style="height: 400px"></div>

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
