import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import { auth, db } from "./firebase";

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
  // findNewHike();
  // randomTrail();

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
    "url(https://lh3.googleusercontent.com/PQkusTA-OxTz5Xn-2BR50LL4Ho4uq9FLZQfNp7A_4bvuP53sSg66upXNx19xis65t3DhShzNEWUu-HILe3Aiq0JSh22_16LRSgB_1o5m4w9D8nwhKRWfeT9JgV4gUIaUtxGtSu5wqc4=w2400)",
    "url(https://lh3.googleusercontent.com/-vVQ0BDcXC9i6q7pcyudNlfqgDGCYhVCmxMeOVQ3CfCE4mAErvQcqruaP02prSLh7x-NZlx-v4YFyIhG8SG82NsiI_RMZmsuCqrTxHaXvl-YCSl2bETrQw8rtAU62JuOObBgHw0q6Yw=w2400)",
    "url(https://lh3.googleusercontent.com/mlw-uPAQik7eXKzpzAOk5CSiW5ubt-A6n3etvWWNyNRaRI8B8ni3K7wMumh9tvLdFA3BqBOU_pxSUX0m9vd6MtI7oedcBNFFsmr5TsA_MsNZR-0w62PmDmv3fpnQydNN10194De_yW4=w2400)",
    "url(https://lh3.googleusercontent.com/SMEu8tKjhzt5a5MPrt8-NwVnRBQSq0o7R1qt00WFKPBK-Ugz29b-OYseyDbT0DQa05nnOoEd5j8itnb3RA8y8bT8uRv1C1kH-B0hZrjIbNFs8sbL_seW-tIO7DPf-WwoDn7ASNIX5tY=w2400)",
    "url(https://lh3.googleusercontent.com/5SXP_aqY9FRbFCuJ2QgcvKQnVB3xc8JbpKIp4nV7rmnrQsexoUtZLVIs1YzCwIjVjZ8NEwBCVG4oYXoC0N_6BGXO6fVcrRedqZ-wT_jaRcKJSmYnrFiWdo_4oJf9EUUo4UR-X4tNNWI=w2400)",
    "url(https://lh3.googleusercontent.com/L-WPNDx11PNGXjDKmOXOkgnHw8fSnMEm3zKyxh4vLqdDx7lZ8D2tNGhRuX5W6_T4Z3ubP2nxVgXh1sdu4UWM4oVlejjqOUURVMJ-bMVHpOUXo_VDgtcaGNwEJJfyXLZMKOWwDgSONxE=w2400)",
    "url(https://lh3.googleusercontent.com/6cJeDleGsKVDQnhRr1ItXio81zewRJrAicLcjPdfNyvjlwJVE_ZKHU3IK1niJXmpPBa2DHb6fdwdi4pQa9xiQs8I577F34WqmoEzfBoZ6nlk5BmOsG9tC_VRkRRDQ2jw_DhAG6GrYoc=w2400)",
    "url(https://lh3.googleusercontent.com/yoTFDmL4HU0S-5gEIb9gQ6lavO3PjFkegk2HGrDpmW7_JkSoZXW53Rnecxvp_I88TatwbbMvqYhAOBKkkEgXTatNlG8kdib11pnuZrRS97qWlcMY442ygFmmKZFF_lsym7NSHoO37oI=w2400)",
    "url(https://lh3.googleusercontent.com/HRYX-ye3ksLee84kd5OaGPGm9giQbVw83EkTgbvSMYh10ikVtVR9kwPU6XGUqsmckpPQYg7C8dDkwvpi7erEZFpa4MwNjOqPpqW3bN7ZcIsF-rlAFK152Vavz2vSGN2yO3kC1xqtmNU=w2400)",
    "url(https://lh3.googleusercontent.com/vfwuwFZNcuMpTaRfIM697kXNi8JvhgOFHh8rosmL_t98Sw6_2Kr8giGnWmeOhtBv7ynxLp5xie66qQOpjBAtNQ_xMOlTR5d0kQdE-j8z6eCL8ml0389C-T0E5zEoF_BHNi3BUDWGltU=w2400)",
    "url(https://lh3.googleusercontent.com/Zq26gFbC90UG6RJCEiDzn_FzOswc_xJgFrU51Ppbq4gDctcZNUHNdh3-N7ifmIvpcc5FRN8y56M4t5BfN7NQ5JLuCTSASfOAe5lxulHkfamPR1y-RI1LJ6VtiYeSgDx9OGls6_j6OLc=w2400)",
    "url(https://lh3.googleusercontent.com/yLqGO-gxRDOv5eMHZC8SPCvz4wUmk6Ktrok6lup90p_PLkbTnoO5Ly3sXClvIomZw9Pe0DN9qlvmbmzLyd56GGW-15stVMaIEAx4kX3wKPmBVXyiY9HjqYUAJU5R8YFwK4hfUlRgP8U=w2400)"
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
  console.log(cityState);
  axios
    .get(
      `http://www.mapquestapi.com/geocoding/v1/address?key=VoQ7WMYNrr7GhJoT9rIqVnRO7URcIrpi&location=${cityState}`
    )
    .then(response => {
      const longLat = response.data.results[0].locations[0].latLng;
      console.log(longLat);
      findTrails(longLat.lat, longLat.lng, object);
    })
    .catch(err => {
      console.log(err);
      return alert(
        "Oops! Something is wrong with the city and/or the state you chose. Check for errors and try again! Enjoy your hike!"
      );
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
        if (object.difficult === "none") {
          let diffArr = trailLists;
          randomTrail(diffArr);
          console.log(diffArr);
        } else {
          let diffArr = trailLists.filter(
            trails => trails.difficulty === object.difficult
          );
          randomTrail(diffArr);
          console.log(diffArr);
        }
        // const trailLists = response.data.trails;
        // console.log(trailLists);
        // const diffArr = trailLists.filter(
        //   trails => trails.difficulty === object.difficult
        // );
        //console.log(diffArr);
        //randomTrail(diffArr);
      }
    })
    .catch(err => {
      console.log(err);
      return alert(
        "Oops! No hikes matching your search. Try different filter options. Enjoy your hike!"
      );
    });
}

//returning the random hike!!!
function randomTrail(diffArr) {
  let finalTrail = Math.floor(Math.random() * diffArr.length);
  let randArr = diffArr[finalTrail];
  console.log(randArr);
  state.Hike.randArr = randArr;
  render(state.Hike);
}

// let button = document.getElementsByClassName("saveMe");
// button.addEventListener(
//   "click",
//   function() {
//     if (button.getAttribute("Saved!") === button.innerHTML) {
//       button.innerHTML = button.getAttribute("Save this Hike");
//     } else {
//       button.setAttribute("Save this Hike", button.innerHTML);
//       button.innerHTML = button.getAttribute("Saved!");
//     }
//   },
//   false
// );

// change();
// function change() {
//   let saveMe = document.getElementsByClassName("saveMe");
//   if (saveMe.value === "Save this Hike") saveMe.value === "Saved!";
//   else saveMe.value === "Saved!";
// }

// function findNewHike() {
//   document
//     .getElementsByClassName("findNewOne")
//     .addEventListener("click", event => {
//       event.preventDefault();
//       render(state.Home);
//     });
// }
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
