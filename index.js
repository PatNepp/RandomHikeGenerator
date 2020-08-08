import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer(st)}
  `;

  router.updatePageLinks();

  addHeaderEventListeners();
  addFooterEventListeners();
}
//render(state.Home);

function addHeaderEventListeners() {
  const signUp = document.querySelector("#homeSignUp");
  signUp.addEventListener("click", event => {
    event.preventDefault();
    render(state.SignUp);
  });
  const logIn = document.querySelector("#homeLogIn");
  logIn.addEventListener("click", event => {
    event.preventDefault();
    render(state.LogIn);
  });
  const goHome = document.querySelector(".RHG");
  goHome.addEventListener("click", event => {
    event.preventDefault();
    render(state.Home);
  });
}

function addFooterEventListeners() {
  const contact = document.querySelector("#contactFormLink");
  contact.addEventListener("click", event => {
    event.preventDefault();
    render(state.Contact);
  });
}
