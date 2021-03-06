export default st => `
<main class="jumbotron">
<section id="trail">
  ${randomHikeInfo(st.randArr)}
</section>
</main>`;

function randomHikeInfo(randArr) {
  return `
      <div id="trailInfo">
        <h1>${randArr.name}</h1>
        <h4>${randArr.location}</h4>
        <h4>${randArr.length} miles</h4>
        <h5>${randArr.summary}</h5>
      </div>
      <div id="trailImage">
        <img src="${randArr.imgSmall}">
      </div>
      <div id="trailMap">
        <img alt="Picture Not Available" src="http://www.mapquestapi.com/staticmap/v5/map?key=VoQ7WMYNrr7GhJoT9rIqVnRO7URcIrpi&center=${randArr.latitude},${randArr.longitude}&locations=${randArr.latitude},${randArr.longitude}&zoom=8&marker=flag-trail&size=250,250">
      </div>
      <div id="moreInfo">
        <button class="findNewOne" value="reload page" onClick="document.location.reload(true)" href="./Home" data-navigo>Different Hike</button>
        <h3>For more information, visit <a href=${randArr.url} target="_blank">HikingProject.com</a></h3>
      </div>`;
}
//<button class="saveMe">Save this Hike</button>
//value="reload page" onClick="document.location.reload(true)"
