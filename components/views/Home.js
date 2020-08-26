export default () => `
<main class="jumbotron">
  <form class="theButton" action="" method="POST">
    <div class="locationFilters">
      <p class="giveLocation">Give us your location and we'll find a random hike for you!</p>
      <div id="citySearch">
        <label for="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" required>
      </div>
      <div id="stateSearch">
        <label for="states">State:</label>
        <select placeholder="State" name="states" id="states" required>
          <option class="stateName" value="AL">Alabama</option>
          <option class="stateName" value="AK">Alaska</option>
          <option class="stateName" value="AZ">Arizona</option>
          <option class="stateName" value="AR">Arkansas</option>
          <option class="stateName" value="CA">California</option>
          <option class="stateName" value="CO">Colorado</option>
          <option class="stateName" value="CT">Connecticut</option>
          <option class="stateName" value="DE">Delaware</option>
          <option class="stateName" value="DC">District Of Columbia</option>
          <option class="stateName" value="FL">Florida</option>
          <option class="stateName" value="GA">Georgia</option>
          <option class="stateName" value="HI">Hawaii</option>
          <option class="stateName" value="ID">Idaho</option>
          <option class="stateName" value="IL">Illinois</option>
          <option class="stateName" value="IN">Indiana</option>
          <option class="stateName" value="IA">Iowa</option>
          <option class="stateName" value="KS">Kansas</option>
          <option class="stateName" value="KY">Kentucky</option>
          <option class="stateName" value="LA">Louisiana</option>
          <option class="stateName" value="ME">Maine</option>
          <option class="stateName" value="MD">Maryland</option>
          <option class="stateName" value="MA">Massachusetts</option>
          <option class="stateName" value="MI">Michigan</option>
          <option class="stateName" value="MN">Minnesota</option>
          <option class="stateName" value="MS">Mississippi</option>
          <option class="stateName" value="MO">Missouri</option>
          <option class="stateName" value="MT">Montana</option>
          <option class="stateName" value="NE">Nebraska</option>
          <option class="stateName" value="NV">Nevada</option>
          <option class="stateName" value="NH">New Hampshire</option>
          <option class="stateName" value="NJ">New Jersey</option>
          <option class="stateName" value="NM">New Mexico</option>
          <option class="stateName" value="NY">New York</option>
          <option class="stateName" value="NC">North Carolina</option>
          <option class="stateName" value="ND">North Dakota</option>
          <option class="stateName" value="OH">Ohio</option>
          <option class="stateName" value="OK">Oklahoma</option>
          <option class="stateName" value="OR">Oregon</option>
          <option class="stateName" value="PA">Pennsylvania</option>
          <option class="stateName" value="RI">Rhode Island</option>
          <option class="stateName" value="SC">South Carolina</option>
          <option class="stateName" value="SD">South Dakota</option>
          <option class="stateName" value="TN">Tennessee</option>
          <option class="stateName" value="TX">Texas</option>
          <option class="stateName" value="UT">Utah</option>
          <option class="stateName" value="VT">Vermont</option>
          <option class="stateName" value="VA">Virginia</option>
          <option class="stateName" value="WA">Washington</option>
          <option class="stateName" value="WV">West Virginia</option>
          <option class="stateName" value="WI">Wisconsin</option>
          <option class="stateName" value="WY">Wyoming</option>
        </select>
      </div>
      <div id="maxDistance">
        <label for="radius">Radius:</label>
        <select id="radius" name="radius">
          <option class="miles" value="5">5 miles</option>
          <option class="miles" value="10">10 miles</option>
          <option class="miles" value="25">25 miles</option>
          <option class="miles" value="50">50 miles</option>
          <option class="miles" value="100">100 miles</option>
          <option class="miles" value="200">200 miles</option>
        </select>
      </div>
      <p class="optional">------optional------</p>
      <div id="hikeLength">
        <label for="length">Length:</label>
        <select id="length" name="length">
          <option class="minHike" value="0">Minimum Hike Length</option>
          <option class="minHike" value="5">5 miles</option>
          <option class="minHike" value="10">10 miles</option>
          <option class="minHike" value="15">15 miles</option>
          <option class="minHike" value="20">20 miles</option>
        </select>
      </div>
      <div id="hikeDiff">
        <label for="difficulty">Difficulty:</label>
        <select id="difficulty" name="difficulty">
          <option class="diff" value="hikeDiff">Hike Difficulty Level</option>
          <option class="diff" value="green">Easy</option>
          <option class="diff" value="blue">Intermediate</option>
          <option class="diff" value="black">Difficult</option>
        </select>
      </div>
    </div>
    <button type="submit" id="randomButton" href="" data-navigo>Find a Hike! <i class="fas fa-hiking"></i></button>
  </form>
</main>
`;

// function findAHikeSubmit(st) {
//   if (st.page === "Home") {
//     document.querySelector("form").addEventListener("submit", event => {
//       event.preventDefault();
//       let inputList = Array.from(event.target.element);
//       inputList.pop();
//       const inputs = inputList.map(input => input.value);
//       let city = inputs[0];
//       let states = inputs[1];
//       let radius = inputs[2];
//       let length = inputs[3];
//       let difficulty = inputs[4];
//       console.log(city);
//     })
//   }
// }

// const diff = "";
// switch (diff) {
//   case 'Hike Difficulty Level'://Same question as above??
//     return 0;
//     break;
//   case 'Easy':
//     return [green, greenBlue];
//     break;
//   case 'Intermediate':
//     return [blue, blueBlack];
//     break;
//   case 'Difficult':
//     return [black];
//     break;
//}
