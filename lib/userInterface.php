<?php
    session_start();
    require "DbConnect.php";
    $conn  = DbConnect();
    $uid   = $_SESSION['userID'];
    require  "GetUserData.php";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Strapped &mdash; Coverstrap Template</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/strapped.css" rel="stylesheet">
  </head>
  <body>

    <nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand nav-link" href=../home>BsTs Bank Stress Testing Simulations</a>
        </div> <!-- /.navbar-header -->

        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
          </ul>
        </div> <!-- /.navbar-collapse -->
      </div> <!-- /.container -->
    </nav> <!-- /.navbar -->



    <div class="container">
</br></br></br></br>
      <h3 id="benefits" class="subhead">User Interface</h3>
  
      <div class="well">
        <?php
         $result = GetUserData($conn,$uid);
         echo '<div class="table table-hover">';
         echo '<table class="table">';
         echo '<thead>';
         echo '<tr>';
         echo '<th>Bank Name</th>';
         echo '<th>Bank Country</th>';
         echo '<th>Bank Headquarters</th>';
         echo '<th>Email</th>';
         echo '</tr>';
         echo '</thead>';
         echo '<tbody>';
         echo '<tr>';
         echo '<th>'.$result['Name'].'</th>';
         echo '<th>'.$result['Country'].'</th>';
         echo '<th>'.$result['Headquarters'].'</th>';
         echo '<th>'.$result['Email'].'</th>';
         echo '</tr>';
         echo '</tbody>';
         echo '</table>';
         echo '</div>';
        ?>
   
        </div> <!-- /.benefit -->
</br></br></br></br>
      <h3 id="benefits" class="subhead">Bank Test History Interface</h3>
  
      <div class="well" style="width: 900px; height: 600px; overflow-y: scroll;">
        <?php 
         $result  = GetTestData($conn,$uid);
         echo '<div class="table table-hover" border="2">';
         echo '<table class="table">';
         echo '<thead>';
         echo '<tr>';
         echo '<th>Stress Test Date</th>';
         echo '<th>CAMEL Evaluation</th>';
         echo '<th>Stress Test Outcome</th>';
         echo '<th>Success Probability</th>';
         echo '<th>Risk Percentage</th>';
         echo '<th>Simulation Period</th>';
         echo '<th>Simulation Scenario</th>';
         echo '<th><a href="test2.php" class="btn btn-primary" >Back To Panel</a></th>';
         echo '</tr>';
         echo '</thead>';
         echo '<tbody>';
         if($result->rowCount() > 0){
         foreach ($result as $item) {
         echo '<tr>';
         echo '<th>'.$item['SimDate'].'</th>';
         echo '<th>'.$item['CAMEL'].'</th>';
         echo '<th>'.$item['Outcome'].'</th>';
         echo '<th>'.$item['Sprob'].'</th>';
         echo '<th>'.$item['Risk'].'</th>';
         echo '<th>'.$item['Period'].'</th>';
         echo '<th>'.$item['Scenario'].'</th>'; 
         echo '<th>'.'<a href="deleteTest.php?p=deletetest&id='.$item['TestID'].'" ><button class="btn btn-primary" >Delete</button></a></th>'; 
         echo '</tr>';
         }}
         echo '</tbody>';
         echo '</table>';
         echo '</div>'; 
        ?>
   
        </div> <!-- /.benefit -->

    </div> <!-- /.container -->
</div>

    <footer>
      <div class="container clearfix">
        <p class="pull-left">
          Copyright 2016
        </p>
        <p class="pull-right">
          Dissertation of Alex Mavromatis.
        </p>
      </div> <!-- /.container -->
    </footer>

    <script src="../js/jquery.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script>
$('form').on('submit',function(){
   if($('#pass').val()!=$('#cpass').val()){
       alert('Password not matches');
       return false;
   }
   return true;
});

</script>
  </body>
</html>
