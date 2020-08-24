import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { auth, db } from "./firebase";

//ROUTER//
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

// let requestOptions = {
//   method: "GET",
//   redirect: "follow"
// };

// fetch(
//   "https://www.hikingproject.com/data/get-trails?lat=38.6270&lon=-90.1994&maxDistace=25&maxResults=1&minLength=5&key=200863333-3ebda2f4593009e377ad78efc1fc91be",
//   requestOptions
// )
//   .then(response => {
//     response.json();
//   })
//   .then(json => console.log(json))
//   .catch(error => console.log("error", error));

//ACTIVE API CALL WHEN LIVE
// axios
//   .get(
//     "https://www.hikingproject.com/data/get-trails?lat=38.6270&lon=-90.1994&maxDistace=25&minLength=5&maxResults=1&key=200863333-3ebda2f4593009e377ad78efc1fc91be"
//   )
//   .then(response => {
//     response.data.trails.forEach(trail => {
//       state.Hike.trails.push(trail);
//     });
//     console.log(response);
//   })
//   .catch(err => console.log(err));

// axios
//   .get(
//     "http://www.mapquestapi.com/geocoding/v1/address?key=VoQ7WMYNrr7GhJoT9rIqVnRO7URcIrpi&location=StLouis,MO"
//   )
//   .then(response => console.log(response.data));

//RENDER FUNCTION//

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
  hideHeaderElements(st);
  randomJumbo(st);
  router.updatePageLinks();
}

// function randomNum() {
//   return Math.floor(Math.random() * api.length + 0);
// }

//RANDOM JUMBOTRON//
function randomJumbo(st) {
  const jumboPics = [
    "url(https://images.unsplash.com/photo-1505521216430-8b73b2067df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1507&q=80)",
    "url(https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1503&q=80)",
    "url(https://images.unsplash.com/photo-1576225106612-ea30b5bb16b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1464&q=80)",
    "url(https://images.unsplash.com/photo-1596245830906-ce7644a63ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80)",
    "url(https://images.unsplash.com/photo-1591815707291-b18c9f24fb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1438&q=80)",
    "url(https://images.unsplash.com/photo-1591806336026-f825d72071a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80)",
    "url(https://images.unsplash.com/photo-1544558635-667480601430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80)",
    "url(https://images.unsplash.com/photo-1561815582-c13544ea0110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80)",
    "url(https://images.unsplash.com/photo-1580952153875-fcb0edb9df47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80)",
    "url(https://lh3.googleusercontent.com/aQDmYfKXZ6lqwa9IuyCi4SljsPLhKQWBYoqxR81LCNneP-XjRY47jCYHgDAlN73h-mEzpJKvvTxehnfEwInUeYqNel_c5VEkTP55HblbE9XhWC-BotoyNmybwdrQK0fgobI5IN0bwwA=w2400)",
    "url(https://lh3.googleusercontent.com/lOVMjbuSkxwoaEOsnUbtrHTEHxsnoldd82XRNHUWVx9gct32QcOnlJOdNrIJ91YwFSljcrwC4X8_UU43hWNvo3Id5q9wNBBpcvRyI-70eTY3IF0tRxQTJ4OzWG8ohRHuP9UTXhmilTk=w2400)",
    "url(https://lh3.googleusercontent.com/tHWrf5KRBo-FJF-TjfoXE0nF2U-rYfmwImu3l_ChzogjuryusPjgcs5zdtJT9ENFZTHz8wmZP4lc_CfR7WdpLAfGNVqtFziF8uiXyF0zblkj30pxxC3iqkd552PotLwfIrL1W9Fs8AI=w2400)",
    "url(https://lh3.googleusercontent.com/p7ctDRVWPWsm3yS6m3R40yAOJu5V413JAl5smP_Maw-HqHFraT_BN8Lj8MH4YcIYqwizqoxrLoRNm8DEpajv8G1uaQqG8n57_tWxcs8g9MvRHZFEG7YQguqcZ2fwwAcYyk2VABlvLSk=w2400)"
  ];
  let randomPic = Math.floor(Math.random() * jumboPics.length);
  document.querySelector(".jumbotron").style.background = jumboPics[randomPic];
  if (st.page !== "Profile") {
    return jumboPics[randomPic];
  }
}

//HIDE HEADER ELEMENTS//
function hideHeaderElements(st) {
  if (st.page === "Login") {
    document.querySelector("#homeLogIn").style.display = "none";
  }
  if (st.page === "Signup") {
    document.querySelector("#homeSignUp").style.display = "none";
  }
  if (st.page === "Profile") {
    document.querySelector(".signLogIn").style.display = "none";
  }
}
