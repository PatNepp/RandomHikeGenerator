export default () => `
<main class="jumbotron">
  <div class="logInPage">
    <form class="logInBox" action="https://formspree.io/mvownvkn" method="POST">
      <h2 class="logInName">Contact Us!<h2>
      <div class="labels" id="contactLabels">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Email" required>
        <br>
        <label for="message">Message:</label>
        <textarea name="message" placeholder="Write Message Here" required></textarea>
      </div>
      <br>
      <div class="logInButtons">
        <button type="submit" class="submitbtn" id="contactSubmit">Submit</button>
      </div>
    </form>
  <div>
</main>
`;
