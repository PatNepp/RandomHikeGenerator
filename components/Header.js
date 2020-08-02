export default st => `
<header>
  <h1 class="title">${st.header}</h1>
  <form class="logInBox" action="">
    <h2 class="logInName">Log In</h2>
      <div class="labels">
        <label for="email"><b>E-mail:</b></label>
        <input type="text" placeholder="E-mail" name="email" required>
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
          <a class="signUp" href="./signUp.html">Sign Up!</a>
        </div>
      </div>

  </form>
</header>
`;
