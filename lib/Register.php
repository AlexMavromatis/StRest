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

      <h3 id="benefits" class="subhead">Why Use This Product</h3>
      <div class="row">
        

      <div class="well">

            <center><h3>Create a Profile</h3></center>
           <center> <form class="form-signin"  data-toggle="validator" role="form" action="InitBank.php" method="post" style="width: 500px">
            <label for="usr">Bank Name:</label>
            <input type="text" class="form-control" name="Bname" placeholder="Your Bank Name Here" required="">
            </br>
            <label for="usr">Country of origin:</label>
            <input type="text" class="form-control" name="Country" placeholder="Your Country" required="">
            </br>
            <label for="usr">Year established:</label>
            <input type="text" class="form-control" name="year" placeholder="Year established" required="">
            </br>
            <label for="usr">Headquarters:</label>
            <input type="text" class="form-control" name="HDcity" placeholder="Headquartes City" required="">
             </br>
            <label for="usr">Email:</label>
            <input type="text" class="form-control" name="mail" placeholder="Email" required="">
              </br>
            <label for="usr">Password:</label>
            <input type="password" class="form-control" id="pass" name="password" placeholder="Password" required="">
            </br>
            <label for="usr">Repeat Password:</label>
            <input type="password" class="form-control" name="confirm" id="cpass"  placeholder="Confirm your Password" required="">
            </br>
            <input class="btn btn-info" type="submit" name="submit" value="Create Profile"/>
            </form></center>
           <div>
        </div> <!-- /.benefit -->

    </div> <!-- /.container -->
</br></br></br></br></br></br></br></br></br></br>

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
