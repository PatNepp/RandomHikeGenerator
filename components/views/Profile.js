export default st => `
<main class="jumbotron">
  <div class="profilePage">
    <div>
      <h2>Hello, ${st.fName}!<br>${st.quote}</h2>
    </div>
    <div>
      <img src="" alt="Profile Pic">
      <h5>${st.fName} ${st.lName}</h5>
    </div>
    <div>
      <h4>My Hikes:</h4>
    </div>
    <div>
      <button href="./Home" data-navigo>Find A Hike</button>
      <button id="logOutBttn">Log Out</button>
    </div>
  </div>
</main>
`;

// function profileInformation(info) {
//   `<h2>Hello, ${state.Profile.fName}</h2>`;
// }
