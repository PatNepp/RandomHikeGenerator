export default st => `
<main class="jumbotron">
  <div id="profilePageLayout">
    <div id="helloQuote">
      <h2>Hello, Patrick!<br>${insertQuote(st.quote)}</h2>
    </div>
    <div id="profilePic">
      <img src="" alt="Profile Pic">
      <h5>Patrick Nepp</h5>
    </div>
    <div id="myHikes">
      <h4>My Hikes:</h4>
    </div>
    <div id="profileButtons">
      <button id="profileDiffHike" href="./Home" data-navigo>Find A Hike</button>
      <button id="logOutBttn">Log Out</button>
    </div>
  </div>
</main>
`;

function insertQuote(quote) {
  return `${quote}`;
}
