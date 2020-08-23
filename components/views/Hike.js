export default st => `
<main class="jumbotron">
<section id="trail">
${st.trails
  .map(trail => {
    formatHikeTrail(trail);
  })
  .join()}
</section>
</main>`;

function formatHikeTrail(trail) {
  return `
    <div class="trail-post">
      <h4>${trail.name}</h4>
      <img src="${trail.imgMedium}">
      <p>${trail.location}</p>
      <p>${trail.summary}</p>
    </div>`;
}
