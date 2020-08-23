export default () => `
<main class="jumbotron">
  <form class="theButton" method="POST">
    <div class="locationFilters">
      <p class="giveLocation">Give us your location and we'll find a random hike for you!</p>
      <div id="citySearch">
        <label for="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" required>
      </div>
      <div id="stateSearch">
        <label for"state">State:</label>
        <select placeholder="State" name="state" id="state" required>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div id="maxDistance">
        <label class="hotDog" for="distanceFrom">Radius:</label>
        <select name="radius">
          <option value="5Miles">5 miles</option>
          <option value="10Miles">10 miles</option>
          <option value="25Miles">25 miles</option>
          <option value="50Miles">50 miles</option>
          <option value="100Miles">100 miles</option>
          <option value="200Miles">200 miles</option>
        </select>
      </div>
      <p class="optional">----optional----</p>
      <div id="hikeLength">
        <label for="length">Length:</label>
        <select id="length" name="length">
          <option value="All">Choose a hike length</option>
          <option value="short">0-5 miles</option>
          <option value="medium">5-10 miles</option>
          <option value="long">10-20 miles</option>
          <option value="veryLong">20+ miles</option>
        </select>
      </div>
      <div id="hikeDiff">
        <label class="hotDog" for="difficulty">Difficulty:</label>
        <select name="difficulty">
          <option value="chooseDiff">Choose a Difficulty level</option>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>
    </div>
    <a id="randomButton" href="./Hike" data-navigo>Find a Hike! <i class="fas fa-hiking"></i></a>
  </form>
</main>
`;

const randomButton = document.querySelector("#randomButton");
