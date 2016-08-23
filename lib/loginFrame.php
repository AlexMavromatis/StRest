  <!-- Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <center><h4 class="modal-title" id="myModalLabel">Login To Your System</h4></center>
      </div>
      <div class="modal-body">
       
        <center>
        <form class="form-signin" style="width: 400px" method="post" action="lib/userAuth">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" name="mail" required autofocus style="width: 350px">
        </br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="password" required style="width: 350px">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me</input>
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" name="submit" style="width: 300px">Sign in</button>
        <a href="Register"><h4>Create a Portofolio by clicking Here</h4></a>
      </form>
      </center>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
