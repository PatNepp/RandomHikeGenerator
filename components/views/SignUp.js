export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form class="logInBox" id="signUpForm" action="">
      <h2 class="logInName">Sign Up</h2>
      <div class="labels">
        <label for="name"><b>Name:</b></label>
        <input id="name" type="text" placeholder="Name" name="name" required>
        <br>
        <label for="email"><b>Email:</b></label>
        <input id="email" type="email" placeholder="Email" name="email" required>
        <br>
        <label for="password"><b>Password:</b></label>
        <input id="password" type="password" placeholder="Password" name="password" required>
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
