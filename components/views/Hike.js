export default st => `
<main class="jumbotron">
<section id="trail">
${st.trails
  .map(post => {
    formatHikeTrail(post);
  })
  .join()}
</section>
</main>`;

function formatHikeTrail(post) {
  return `
    <div class="trail-post">
      <h4>${post.name}</h4>
      <img src="${post.imgMedium}">
      <p>${post.location}</p>
      <p>${post.summary}</p>
    </div>`;
}
