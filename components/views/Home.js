export default () => `
<main class="jumbotron">
  <form class="theButton" action"">
    <div class="locationFilters">
      <p class="giveLocation">Give us your location and we'll find a random hike for you!</p>
      <div id="citySearch">
        <label for="zipOrCity">Location:</label>
        <input id="zipOrCity" type="text" name="zipOrCity" placeholder="Zip Code or City" required>
      </div>
      <div id="locationRadius">
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
