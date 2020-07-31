import { Header, Main, Footer } from "./components";
import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer()}
  `;
  addHeaderEventListeners();
}
render();

function addHeaderEventListeners() {
  document.querySelector("#randomButton").forEach(link =>
    link.addEventListener("click", event => {
      event.preventDefault();
      let linkText = event.target.textContent;
      let pieceOfState = state[linkText];
      render(pieceOfState);
    })
  );
}
