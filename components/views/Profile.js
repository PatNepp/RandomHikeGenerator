export default st => `
<main class="jumbotron">
  ${profileInformation(st.info)}
</main>
`;

function profileInformation(info) {
  `<h2>Hello, ${info.fName}</h2>`;
}
