export default () => `
<main class="jumbotron">
  <form class="theButton" action="./Hike" method="POST">
    <div class="locationFilters">
      <p class="giveLocation">Give us your location and we'll find a random hike for you!</p>
      <div id="citySearch">
        <label for="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" required>
      </div>
      <div id="stateSearch">
        <label for"states">State:</label>
        <select placeholder="State" name="states" id="states" required>
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
        <label for="radius">Radius:</label>
        <select name="radius">
          <option value="5Miles">5 miles</option>
          <option value="10Miles">10 miles</option>
          <option value="25Miles">25 miles</option>
          <option value="50Miles">50 miles</option>
          <option value="100Miles">100 miles</option>
          <option value="200Miles">200 miles</option>
        </select>
      </div>
      <p class="optional">------optional------</p>
      <div id="hikeLength">
        <label for="length">Length:</label>
        <select id="length" name="length">
          <option value="All">Minimum Hike Length</option>
          <option value="short">5 miles</option>
          <option value="medium">10 miles</option>
          <option value="long">15 miles</option>
          <option value="veryLong">20 miles</option>
        </select>
      </div>
      <div id="hikeDiff">
        <label for="difficulty">Difficulty:</label>
        <select name="difficulty">
          <option value="chooseDiff">Hike Difficulty Level</option>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>
    </div>
    <a type="submit" id="randomButton" href="./Hike" data-navigo>Find a Hike! <i class="fas fa-hiking"></i></a>
  </form>
</main>
`;

const city = ""//string.split(" ").join("")

const states = "";
switch (states) {
  case 'Alabama':
    return 'AL';
    break;
  case 'Alaksa':
    return 'AK';
    break;
  case 'Arizona':
    return 'AZ';
    break;
  case 'Arkansas':
    return 'AR';
    break;
  case 'California':
    return 'CA';
    break;
  case 'Colorado':
    return 'CO';
    break;
  case 'Connecticut':
    return 'CT';
    break;
  case 'Delaware':
    return 'DE';
    break;
  case 'District of Columbia':
    return 'DC';
    break;
  case 'Florida':
    return 'FL';
    break;
  case 'Georgia':
    return 'GA';
    break;
  case 'Hawaii':
    return 'HI';
    break;
  case 'Idaho':
    return 'ID';
    break;
  case 'Illinois':
    return 'IL';
    break;
  case 'Indiana':
    return 'IN';
    break;
  case 'Iowa':
    return 'IA';
    break;
  case 'Kansas':
    return 'KS';
    break;
  case 'Kentucky':
    return 'KY';
    break;
  case 'Louisiana':
    return 'LA';
    break;
  case 'Maine':
    return 'ME';
    break;
  case 'Maryland':
    return 'MD';
    break;
  case 'Massachusetts':
    return 'MA';
    break;
  case 'Michigan':
    return 'MI';
    break;
  case 'Minnesota':
    return 'MN';
    break;
  case 'Mississippi':
    return 'MS';
    break;
  case 'Missouri':
    return 'MO';
    break;
  case 'Montana':
    return 'MT';
    break;
  case 'Nebraska':
    return 'NE';
    break;
  case 'Nevada':
    return 'NV';
    break;
  case 'New Hampshire':
    return 'NH';
    break;
  case 'New Jersey':
    return 'NJ';
    break;
  case 'New Mexico':
    return 'NM';
    break;
  case 'New York':
    return 'NY';
    break;
  case 'North Carolina':
    return 'NC';
    break;
  case 'North Dakota':
    return 'ND';
    break;
  case 'Ohio':
    return 'OH';
    break;
  case 'Oklahoma':
    return 'OK';
    break;
  case 'Oregon':
    return 'OR';
    break;
  case 'Pennsylvania':
    return 'PA';
    break;
  case 'Rhode Island':
    return 'RI';
    break;
  case 'South Carolina':
    return 'SC';
    break;
  case 'South Dakota':
    return 'SD';
    break;
  case 'Tennessee':
    return 'TN';
    break;
  case 'Texas':
    return 'TX';
    break;
  case 'Utah':
    return 'UT';
    break;
  case 'Vermont':
    return 'VT';
    break;
  case 'Virginia':
    return 'VA';
    break;
  case 'Washington':
    return 'WA';
    break;
  case 'West Virginia':
    return 'WV';
    break;
  case 'Wisconsin':
    return 'WI';
    break;
  case 'Wyoming':
    return 'WY';
    break;
}

const radius = "";
switch (radius) {
  case '5 miles':
    return 5;
    break;
  case '10 miles':
    return 10;
    break;
  case '25 miles':
    return 25;
    break;
  case '50 miles':
    return 50;
    break;
  case '100 miles':
    return 100;
    break;
  case '200 miles':
    return 200;
    break;
}

const length = "";
switch (length) {
  case '5 miles':
    return 5;
    break;
  case '10 miles':
    return 10;
    break;
  case '20 miles':
    return 20;
    break;
  default:
    return 0;
}

function findAHikeSubmit(st) {
  if (st.page === "Home") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      let inputList = Array.from(event.target.element);
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let city = inputs[0];
      let states = inputs[1];
      let radius = inputs[2];
      let length = inputs[3];
      let difficulty = inputs[4];
    })
  }
}



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




