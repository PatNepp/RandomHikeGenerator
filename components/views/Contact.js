export default () => `
<main class="jumbotron">
  <form>
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" placeholder="First Name" required>

    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" placeholder="Last Name" required>

    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" required>

    <label for="message">Message</label>
    <textarea name="message" placeholder="Write Message Here"></textarea>
  </form>
</main>
`;
