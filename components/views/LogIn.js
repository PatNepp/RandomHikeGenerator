export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form class="logInBox" action="">
      <h2 class="logInName">Log In</h2>
      <div class="labels">
        <label for="email"><b>E-mail:</b></label>
        <input type="email" placeholder="E-mail" name="email" required>
        <br>
        <label for="password"><b>Password:</b></label>
        <input type="password" placeholder="Password" name="password" required>
        <br>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <br>
        <div class="logInButtons">
          <button type="submit" class="submitbtn">Log In</button>
          <button type="reset" class="clearbtn">Clear</button>
        </div>
      </div>
    </form>
    <hr>
    <p>Don't have an account?</p><br><a class="signUp" href="./signUp.html">Sign Up!</a>
  </div>
</main>
`;
