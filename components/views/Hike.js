export default st => `
<main class="jumbotron">
<section id="trail">
  ${randomHikeInfo(st.randArr)}
</section>
</main>`;

function randomHikeInfo(randArr) {
  return `
    <div class="trailPost">
      <h4>${randArr.name}</h4>
      <img src="${randArr.imgMedium}">
      <p>${randArr.location}</p>
      <p>${randArr.summary}</p>
    </div>`;
}

// ${st.randArr
//   .map(trail => {
//     randomHikeInfo(trail);
//   })
//   .join("")}
