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
          <a class="navbar-brand nav-link" href=../index>BsTs Bank Stress Testing Simulations</a>
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
