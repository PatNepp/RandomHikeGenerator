export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form class="logInBox" action="">
      <h2 class="logInName">Sign Up</h2>
      <div class="labels">
        <label for="email"><b>E-mail:</b></label>
        <input type="email" placeholder="E-mail" name="email" required>
        <br>
        <label for="password"><b>Password:</b></label>
        <input type="password" placeholder="Password" name="password" required>
        <br>
        <label for="passwordRepeat"><b>Repeat Password:</b></label>
        <input type="password" placeholder="Repeat Password" name="passwordRepeat" required>
        <br>
        <div class="logInButtons">
          <button type="submit" class="submitbtn">Sign Up</button>
          <button type="reset" class="clearbtn">Clear</button>
        </div>
      </div>
      <br>
      <div class="noAccount">
        <p>Already have an account?</p>
        <a data-navigo class="signUp" href="./Login">Log In!</a>
      </div>
    </form>
  </div>
</main>
`;
