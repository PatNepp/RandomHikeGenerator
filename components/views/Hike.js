export default st => `
<main class="jumbotron">
<section id="trail">
${st.trails
  .map(trail => {
    randomHikeInfo(trail);
  })
  .join("")}
</section>
</main>`;

function randomHikeInfo(trail) {
  return `
    <div class="trailPost">
      <h4>${trail.name}</h4>
      <img src="${trail.imgMedium}">
      <p>${trail.location}</p>
      <p>${trail.summary}</p>
    </div>`;
}
