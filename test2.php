<!DOCTYPE html>
<html lang="en">

<head>
	<title>Stress Testing</title>
  	<meta charset="utf-8" />
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>
    <script src="http://code.highcharts.com/modules/offline-exporting.js"></script>
<style>
	body{
	font-family:constantia;
	}
  div.panel-primary {
    width: 800px;
  }
div.middle {
    display: block;
    overflow:hidden;
}
  div.left{
    float: left;
  }
  div.right{

    float: right;
  }
</style>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
</style>

<script src="graph.js"></script>
</head>
<body class="body" style="background-color:#e6fff2">	

 <center><div class="panel panel-primary">
 <ul>
  <li><a class="active" href="#"> <input class="btn btn-primary" type="button" onclick="window.simple()" value="Run Simulation"></a></li>
  <li><a href="#"><button id="button"  class="btn btn-primary" >Export Monte Carlo</button></a></li>
  <li><a href="#"><button id="button2"  class="btn btn-primary" >Export CAMEL</button></a></li>
  <li><a href="#"><button id="button2"  class="btn btn-primary" >Save simulation</button></a></li>
  <li><a href="#" data-toggle="modal" data-target="#info"><button id="button2"  class="btn btn-primary" >Info</button></a></li>
</ul>

      <div class="panel-heading"><center><h4>Stress Testing Panel</h4></center></div>
      <div class="panel-body"><form>
   <div class="right">
            
      Capital Adequacy Evaluation: <input type="text" id="shareEquity"  class="form-control" style="width: 160px">
      Asset Quality Evaluation: <input type="text" id="third"  class="form-control" style="width: 160px">
       
            
      Management Evaluation: <input type="text" id="second"  class="form-control" style="width: 160px">
            
      Earnings Evaluation: <input type="text" id="third"  class="form-control" style="width: 160px">
      Liquidity Evaluation: <input type="text" id="third"  class="form-control" style="width: 160px"></div>
 
      <div class="left">

Please select sensitivity Scenario:
       <select class="form-control" id="scenario" style="width: 160px">
       <option value="Standard">Standard</option>
       <option value="medium">Medium</option>
       <option value="Extreme">Extreme</option>
       </select>
</br>
	Please input Risk weigheted Assets: <input type="text" id="RiskwAssets"  class="form-control" style="width: 160px">
    </br>        
     Please input Shareholders Equity: <input type="text" id="shareEquity"  class="form-control" style="width: 160px" 
>            
</br>    
 Please input Retained Earnings: <input type="text" id="RetainedEarnings"  class="form-control" style="width: 160px">
      </div>
       <div class="middle">
       Capital Adequacy: <input type="text" id="first"  class="form-control" style="width: 160px">
            
      Asset Quality: <input type="text" id="second"  class="form-control" style="width: 160px">
            
      Management: <input type="text" id="third"  class="form-control" style="width: 160px">
      Earnings: <input type="text" id="first"  class="form-control" style="width: 160px">
            
      Liquidity: <input type="text" id="second"  class="form-control" style="width: 160px">
            
    
          </form>
          </br>


</div>
    </div></center>


 <div class="panel panel-warning">
      <div class="panel-heading">Panel with panel-warning class</div>
      <div class="panel-body"><div id="container" style="height: 400px"></div>
</div>
    </div>
 <div class="panel panel-warning">
      <div class="panel-heading">Panel with panel-warning class</div>
      <div class="panel-body">    
<div id="container2" style="height: 400px"></div>

</div>
    </div>



    <script src="js/bootstrap.min.js"></script>
    <script src="bootstrap-waitingfor.js"></script>

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
