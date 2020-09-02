export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form id="signUpForm" method="POST>
      <div class="labels">
        <label for="fName"><b>First Name:</b></label>
        <input id="fName" type="text" placeholder="First Name" name="fName" required>
        <br>
        <label for="lName"><b>Last Name:</b></label>
        <input id="lName" type="text" placeholder="Last Name" name="lName" required>
        <br>
        <label for="email"><b>Email:</b></label>
        <input id="email" type="email" placeholder="Email" name="email" required>
        <br>
        <label for="password"><b>Password:</b></label>
        <input id="password" type="password" placeholder="Password" name="password" required>
        <br>
        <div class="logInButtons">
          <button type="submit" id="signUpButton" href="">Sign Up</button>
          <button type="reset" class="clearbtn">Clear</button>
        </div>
      </div>
    </form>
  </div>
</main>
`;

// <br>
// <div class="noAccount">
//   <p>Already have an account?</p>
//   <a data-navigo class="signUp" href="./LogIn">Log In!</a>
// </div>
