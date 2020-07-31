export default () => `
<main class="jumbotron">
  <div class="theButton">
    <div class="filters">
      <label for="length">Length:</label>
      <select name="length">
        <option value="1 mile">1 mile or less</option>
        <option value="2 mile">2 miles</option>
        <option value="3 mile">3 miles</option>
        <option value="4 mile">4 miles</option>
        <option value="Over 5">5 miles or more</option>
      </select>

      <label for="estTime">Est. Time:</label>
      <select name="estTime">
        <option value="0">1 hour or less</option>
        <option value="1-2hrs">1 to 2 hours</option>
        <option value="2-3hrs">2 to 3 hours</option>
        <option value="3+">3+ hours</option>
      </select>

      <label for="difficulty">Difficulty:</label>
      <select name="difficulty">
        <option value="easy">Easy</option>
        <option value="moderate">Moderate</option>
        <option value="Hard">Hard</option>
        <option value="xtreme">Extreme</option>
      </select>

      <label for="routeType">Route Type:</label>
      <select name="routeType">
        <option value="loop">Loop</option>
        <option value="outBack">Out & Back</option>
        <option value="point">Point to Point</option>
      </select>
    </div>
    <a id="randomButton" href="./hike.html">Find A Hike!</a>
  </div>
</main>
`;
