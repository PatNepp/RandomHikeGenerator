export default () => `
<main class="jumbotron">
  <form class="signUpBox" action="">
    <h2 class="signUpName">Sign Up</h2>
    <div class="labels">
      <label for="email"><b>E-mail:</b></label>
      <input type="email" placeholder="E-mail" name="email" required>
      <br>
      <label for="password"><b>Password:</b></label>
      <input type="password" placeholder="Password" name="password" required>
      <br>
      <label for="passwordRepeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="passwordRepeat" required>
      <br>
      <div class="logInButtons">
        <button type="submit" class="submitbtn">Sign Up</button>
        <button type="reset" class="clearbtn">Clear</button>
      </div>
    </div>
  </form>
  <p>Already have an account?</p><br><a data-navigo class="logIn" href="./Login">Log In!</a>
</main>
`;
