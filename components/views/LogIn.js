export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form id="logInForm" method="POST" action="">
      <h2 class="logInName">Log In</h2>
      <div class="labels">
        <label for="email"><b>E-mail:</b></label>
        <input id="logInEmail" type="email" placeholder="E-mail" name="email" required>
        <br>
        <label for="password"><b>Password:</b></label>
        <input id="logInPassword" type="password" placeholder="Password" name="password" required>
        <br>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <br>
        <div class="logInButtons">
          <button type="submit" id="logInButton">Log In</button>
          <button type="reset" class="clearbtn">Clear</button>
        </div>
      </div>
    </form>
  </div>
</main>
`;
