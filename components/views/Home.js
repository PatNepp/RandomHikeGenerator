export default () => `
<main class="jumbotron">
  <div class="theButton">
    <div class="location">
      <label for="zipOrCity">Location:</label>
      <input id="zipOrCity" type="text" name="zipOrCity" placeholder="Zip Code or City" required>

      <label class="hotDog" for="distanceFrom">Radius:</label>
      <select name="radius">
        <option value="5 miles">5 miles</option>
        <option value="10 miles">10 miles</option>
        <option value="25 miles">25 miles</option>
        <option value="50 miles">50 miles</option>
        <option value="100 miles">100 miles</option>
      </select>
    </div>
    <div class="filters">
      <label for="length">Length:</label>
      <select id="length" name="length">
        <option value="1 mile">1 mile or less</option>
        <option value="2 mile">2 miles</option>
        <option value="3 mile">3 miles</option>
        <option value="4 mile">4 miles</option>
        <option value="Over 5">5 miles or more</option>
      </select>

      <label class="hotDog" for="estTime">Est. Time:</label>
      <select name="estTime">
        <option value="0">1 hour or less</option>
        <option value="1-2hrs">1 to 2 hours</option>
        <option value="2-3hrs">2 to 3 hours</option>
        <option value="3+">3+ hours</option>
      </select>

      <label class="hotDog" for="difficulty">Difficulty:</label>
      <select name="difficulty">
        <option value="easy">Easy</option>
        <option value="moderate">Moderate</option>
        <option value="Hard">Hard</option>
        <option value="xtreme">Extreme</option>
      </select>

      <label class="hotDog" for="routeType">Route Type:</label>
      <select name="routeType">
        <option value="loop">Loop</option>
        <option value="outBack">Out & Back</option>
        <option value="point">Point to Point</option>
      </select>
    </div>
    <a id="randomButton" href="./hike.html">Find a Hike! <i class="fas fa-hiking"></i></a>
  </div>
</main>
`;
