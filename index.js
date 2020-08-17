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
    //if(capitalize(route) === "Signup")
  })
  .resolve();

// let requestOptions = {
//   method: "GET",
//   redirect: "follow"
// };

// fetch(
//   "https://www.hikingproject.com/data/get-trails?lat=38.6270&lon=-90.9114&maxDistance=200&maxResults=500&key=200863333-3ebda2f4593009e377ad78efc1fc91be",
//   requestOptions
// )
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log("error", error));

// let myHeaders = new Headers();
// myHeaders.append("Cookie", "JSESSIONID=6CAAA69599102BB125A0FF2AEC392063");

// let requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch(
//   "http://www.mapquestapi.com/geocoding/v1/address?key=VoQ7WMYNrr7GhJoT9rIqVnRO7URcIrpi&location=StLouis,MO",
//   requestOptions
// )
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log("error", error));

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
  randomJumbo(st);
  router.updatePageLinks();
}

// function randomNum() {
//   return Math.floor(Math.random() * api.length + 0);
// }

//Random Jumbotron photo function
function randomJumbo(st) {
  if (st.page !== "Hike") {
    const jumboPics = [
      "url(https://trello-attachments.s3.amazonaws.com/5efd1a3473fb9b8783f4fec1/5efe7f2929a10940bedd61d1/506d19ca32ba58505b43753deb4f95e0/panorama-landscape.jpg)",
      "url(https://trello-attachments.s3.amazonaws.com/5efd1a3473fb9b8783f4fec1/5efe7f2929a10940bedd61d1/886806d30ed4ade9fed4e897cae30cc6/kolob-canyons-zion-national-park-utah.jpg)",
      "url(https://images.unsplash.com/photo-1505521216430-8b73b2067df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1507&q=80)",
      "url(https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1503&q=80)",
      "url(https://images.unsplash.com/photo-1576225106612-ea30b5bb16b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1464&q=80)",
      "url(https://images.unsplash.com/photo-1596245830906-ce7644a63ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80)",
      "url(https://images.unsplash.com/photo-1591815707291-b18c9f24fb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1438&q=80)",
      "url(https://images.unsplash.com/photo-1591806336026-f825d72071a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80)",
      "url(https://images.unsplash.com/photo-1544558635-667480601430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80)",
      "url(https://images.unsplash.com/photo-1561815582-c13544ea0110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80)",
      "url(https://images.unsplash.com/photo-1580952153875-fcb0edb9df47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80)",
      "url(https://www.publicdomainpictures.net/pictures/210000/velka/bryce-canyon-panoramic-view.jpg)"
    ];
    let randomPic = Math.floor(Math.random() * jumboPics.length);
    document.querySelector(".jumbotron").style.background =
      jumboPics[randomPic];
    return jumboPics[randomPic];
  }
}
