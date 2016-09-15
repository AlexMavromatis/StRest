<?php
require 'lib/DbConnect.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Strapped &mdash; Coverstrap Template</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/strapped.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
          <a class="navbar-brand nav-link" href="#top">BsTs Bank Stress Testing Simulations</a>
        </div> <!-- /.navbar-header -->

        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#benefits" class="nav-link">Stress Tests Framework</a></li>
            <?php  if(!isset($_SESSION['userID'])) { echo '<li><a href="lib/Register" >Create Portofolio</a></li>'; } else { echo '<li><a href="lib/UserInterface" >View Portofolio</a></li>'; }?> 
            <li><a href="#about" class="nav-link">About</a></li>
            <?php  if(!isset($_SESSION['userID'])) { echo '<li><a  href="#" data-toggle="modal" data-target="#login" >Sing in</a></li>'; } else { echo '<li><a  href="lib/signout" >Sing out</a></li>'; }?>
          </ul>
        </div> <!-- /.navbar-collapse -->
      </div> <!-- /.container -->
    </nav> <!-- /.navbar -->

    <div id="top" class="jumbotron">
      <div class="container">
        <h1>Bank Stress Test Framework</h1>
        <h2>This is the Dissertation of Alex Mavromatis a web servise simulator for bank stress testing.</h2>
        <p><a class="btn btn-warning btn-lg" href="lib/test2">Start Stress Test <span class="glyphicon glyphicon-circle-arrow-right"></span></a></p>
      </div> <!-- /.container -->
    </div> <!-- /.jumbotron -->

    <div class="container">

      <h3 id="benefits" class="subhead">This Framework Provides</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-fire"></span>
          </div>
          <h3>Stress Test Simulations</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
        </div> <!-- /.benefit -->

        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-qrcode"></span>
          </div>
          <h3>Monte Carlo Simulations</h3>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div> <!-- /.benefit -->

        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-knight"></span>
          </div>
          <h3>CAMEL Rating System</h3>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.</p>
        </div> <!-- /.benefit -->

        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-stats"></span>
          </div>
          <h3>Graphical Visualitation of Stress Test</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
        </div> <!-- /.benefit -->

        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-wrench"></span>
          </div>
          <h3>Monte Carlo Experimantation Tools</h3>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div> <!-- /.benefit -->

        <div class="col-md-4 col-sm-6 benefit">
          <div class="benefit-ball">
            <span class="glyphicon glyphicon-floppy-disk"></span>
          </div>
          <h3>Data and Analysis Portofolio</h3>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.</p>
        </div> <!-- /.benefit -->
      </div> <!-- /.row -->


      <div class="sect-border"></div>

      <h3 id="about" class="subhead">A Little More About Us</h3>
      <div class="row">
        <div class="col-md-10 col-md-offset-1 text-center">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
        </div> <!-- /.col-md-10 -->
      </div> <!-- /.row -->

    </div> <!-- /.container -->

    <footer>
      <div class="container clearfix">
        <p class="pull-left">
          Copyright 2016
        </p>
        <p class="pull-right">
          Dissertation of Alex Mavromatis
        </p>
      </div> <!-- /.container -->
    </footer>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
      $(".nav-link").click(function(e) {
        e.preventDefault();
        var link = $(this);
        var href = link.attr("href");
        $("html,body").animate({scrollTop: $(href).offset().top - 80}, 500);
        link.closest(".navbar").find(".navbar-toggle:not(.collapsed)").click();
      });
    </script>
<?php require_once "lib/loginFrame.php"?>
  </body>
</html>
