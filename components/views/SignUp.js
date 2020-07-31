export default () => `
<header>
  <h1 class="title">Random Hike Generator</h1>
  <a id="backToHike" href="./index.html">Back to Find a Hike</a>
</header>
<main class="signUpMain">
  <div class="welcome">
    <h2>Looking for a fun, spontaneous way to get outside and explore new places?
      Try Random Hike Generator! Based on your location and a few filters, RHG
      will find the perfect hike for you! Sign up below! Member enjoy....</h2>
  </div>
  <div>
    <form>
      <div>
        <h2>Sign Up</h2>
        <hr>
        <label for="email"><b>E-mail:</b></label>
        <input type="text" placeholder="E-mail here p&t" name="email" required>
        <br>
        <label for="password"><b>Create Password:</b></label>
        <input type="password" placeholder="Password" name="password" required>
        <br>
        <label for="psw-repeat"><b>Repeat Password:</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      </div>
      <div>
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </form>
</div>
</main>
`;
