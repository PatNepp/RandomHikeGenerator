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

//RENDER FUNCTION//

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
  hideHeaderElements(st);
  randomJumbo(st);
  router.updatePageLinks();

  // if (st === state.Home) {
  //   findAHikeSubmit();
  //}
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
    "url(https://lh3.googleusercontent.com/p7ctDRVWPWsm3yS6m3R40yAOJu5V413JAl5smP_Maw-HqHFraT_BN8Lj8MH4YcIYqwizqoxrLoRNm8DEpajv8G1uaQqG8n57_tWxcs8g9MvRHZFEG7YQguqcZ2fwwAcYyk2VABlvLSk=w2400)",
    "url(https://lh3.googleusercontent.com/pX8C6jGHL4pWoVfj8MJ_3JNcBadbdd0kvNOqfhcSZPZst_Tb0SxKjSrBMhA3afKYF3RKtoGShyYvtqbYYRbE2lbGFAoPFwr0z4fhSHMAozjN8nIMTjXAFciaDe6693r4gUIShVADVrs=w2400)",
    "url(https://lh3.googleusercontent.com/-vVQ0BDcXC9i6q7pcyudNlfqgDGCYhVCmxMeOVQ3CfCE4mAErvQcqruaP02prSLh7x-NZlx-v4YFyIhG8SG82NsiI_RMZmsuCqrTxHaXvl-YCSl2bETrQw8rtAU62JuOObBgHw0q6Yw=w2400)",
    "url(https://lh3.googleusercontent.com/mlw-uPAQik7eXKzpzAOk5CSiW5ubt-A6n3etvWWNyNRaRI8B8ni3K7wMumh9tvLdFA3BqBOU_pxSUX0m9vd6MtI7oedcBNFFsmr5TsA_MsNZR-0w62PmDmv3fpnQydNN10194De_yW4=w2400)",
    "url(https://lh3.googleusercontent.com/SMEu8tKjhzt5a5MPrt8-NwVnRBQSq0o7R1qt00WFKPBK-Ugz29b-OYseyDbT0DQa05nnOoEd5j8itnb3RA8y8bT8uRv1C1kH-B0hZrjIbNFs8sbL_seW-tIO7DPf-WwoDn7ASNIX5tY=w2400)",
    "url(https://lh3.googleusercontent.com/5SXP_aqY9FRbFCuJ2QgcvKQnVB3xc8JbpKIp4nV7rmnrQsexoUtZLVIs1YzCwIjVjZ8NEwBCVG4oYXoC0N_6BGXO6fVcrRedqZ-wT_jaRcKJSmYnrFiWdo_4oJf9EUUo4UR-X4tNNWI=w2400)",
    "url(https://lh3.googleusercontent.com/L-WPNDx11PNGXjDKmOXOkgnHw8fSnMEm3zKyxh4vLqdDx7lZ8D2tNGhRuX5W6_T4Z3ubP2nxVgXh1sdu4UWM4oVlejjqOUURVMJ-bMVHpOUXo_VDgtcaGNwEJJfyXLZMKOWwDgSONxE=w2400)",
    "url(https://lh3.googleusercontent.com/6cJeDleGsKVDQnhRr1ItXio81zewRJrAicLcjPdfNyvjlwJVE_ZKHU3IK1niJXmpPBa2DHb6fdwdi4pQa9xiQs8I577F34WqmoEzfBoZ6nlk5BmOsG9tC_VRkRRDQ2jw_DhAG6GrYoc=w2400)",
    "url(https://lh3.googleusercontent.com/yoTFDmL4HU0S-5gEIb9gQ6lavO3PjFkegk2HGrDpmW7_JkSoZXW53Rnecxvp_I88TatwbbMvqYhAOBKkkEgXTatNlG8kdib11pnuZrRS97qWlcMY442ygFmmKZFF_lsym7NSHoO37oI=w2400)",
    "url(https://lh3.googleusercontent.com/HRYX-ye3ksLee84kd5OaGPGm9giQbVw83EkTgbvSMYh10ikVtVR9kwPU6XGUqsmckpPQYg7C8dDkwvpi7erEZFpa4MwNjOqPpqW3bN7ZcIsF-rlAFK152Vavz2vSGN2yO3kC1xqtmNU=w2400)",
    "url(https://lh3.googleusercontent.com/urQlw2oVrKwRCnnEDhjnig2GJGCk9JO_0LJrIfiaS3yck3RxuXOWkwXWxcta9ZdATOTFuj9wUATujFz61f86pNo1a9G8L0H3-zowMO9ao6jE813HfMFyWCSaHxIWW-5NwD7hueiZynM=w2400)"
  ];
  let randomPic = Math.floor(Math.random() * jumboPics.length);
  document.querySelector(".jumbotron").style.background = jumboPics[randomPic];
  if (st.page !== "Profile") {
    return jumboPics[randomPic];
  }
  if (st.page !== "Hike") {
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

const findAHikeBttn = document.getElementById("randomButton");

//pulling data from the form and creating variables for api calls
findAHikeSubmit();
function findAHikeSubmit() {
  findAHikeBttn.addEventListener("click", event => {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let states = document.getElementById("states").value;
    let cityState = `${city},${states}`;
    let radius = document.getElementById("radius").value;
    let length = document.getElementById("length").value;
    let difficult = document.getElementById("difficult").value;
    const object = {
      radius,
      length,
      difficult
    };
    findLatLng(cityState, object);
  });
}

//API call to get lat and long for hiking api call
function findLatLng(cityState, object) {
  axios
    .get(
      `http://www.mapquestapi.com/geocoding/v1/address?key=VoQ7WMYNrr7GhJoT9rIqVnRO7URcIrpi&location=${cityState}`
    )
    .then(response => {
      const longLat = response.data.results[0].locations[0].latLng;
      findTrails(longLat.lat, longLat.lng, object);
    })
    .catch(err => {
      console.log(err);
    });
}

//! add some message that tells the user their results didnt return anything. (success=1 && trail.length === 0 show error message)
//API call to get an array of trails based on lat/long, radius, and hike length
//Using trailLists.filter for difficulty
function findTrails(lat, lng, object) {
  console.log(object);
  axios
    .get(
      `http://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${object.radius}&minLength=${object.length}&maxResults=200&key=200863333-3ebda2f4593009e377ad78efc1fc91be`
    )
    .then(response => {
      if (response.data.trails.length > 0) {
        const trailLists = response.data.trails;
        console.log(trailLists);
        const diffArr = trailLists.filter(
          trails => trails.difficulty === object.difficult
        );
        console.log(diffArr);
        randomTrail(diffArr);
      }
    })
    .catch(err => {
      console.log(err);
    });
}

//returning the random hike!!!
function randomTrail(diffArr) {
  let finalTrail = Math.floor(Math.random() * diffArr.length);
  let randArr = diffArr[finalTrail];
  state.Hike.randArr = randArr;
  console.log(state.Hike.randArr);
  render(state.Hike);
}

// signUpUser();
// function signUpUser() {
//   //if (st.page === "SignUp") {
//   document.getElementById("signUpForm").addEventListener("click", event => {
//     event.preventDefault();
//     console.log(signUpUser());
//     // let inputList = Array.from(event.target.element);
//     // inputList.pop();
//     // const inputs = inputList.map(input => input.value);
//     let name = document.getElementById("name").value;
//     console.log(name);
//     let email = document.getElementById("email").value;
//     console.log(email);
//     let password = document.getElementById("password").value;
//     console.log(password);

//     auth.createUserWithEmailAndPassword(email, password).then(response => {
//       console.log("User Signed Up!");
//       console.log(response);
//       console.log(response.user);
//       addUserToStateAndDb(name, email, password);
//       render(state.Home);
//     });
//   });
//   //}
// }
// function addUserToStateAndDb(name, email, password) {
//   state.User.name = name;
//   state.User.email = email;
//   state.User.loggedIn = true;

//   db.collection("users").add({
//     name: name,
//     email: email,
//     password: password,
//     signedIn: true
//   });
// }
