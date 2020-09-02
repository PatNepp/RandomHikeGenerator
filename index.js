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

  router.updatePageLinks();

  hideHeaderElements(st);
  randomJumbo(st);

  listenForRegister(st);
  listenForLoginForm(st);
  if (st.page === "Profile") {
    profileQuote(st);
  }
  addLogInAndOutListener(st);
  if (st.page === "Home") {
    findAHikeSubmit();
  }
}

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

//pulling data from the form and creating variables for api calls
function findAHikeSubmit() {
  //if (st.page === "Home") {
  const findAHikeBttn = document.getElementById("randomButton");
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
  //}
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
      return alert(
        "Oops! Something is wrong with the city and/or the state you chose. Check for errors and try again! Enjoy your hike!"
      );
    });
}
//API call to get an array of trails based on lat/long, radius, and hike length
//Using trailLists.filter for difficulty
function findTrails(lat, lng, object) {
  axios
    .get(
      `http://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${object.radius}&minLength=${object.length}&maxResults=200&key=200863333-3ebda2f4593009e377ad78efc1fc91be`
    )
    .then(response => {
      if (response.data.trails.length > 0) {
        const trailLists = response.data.trails;
        if (object.difficult === "none") {
          let diffArr = trailLists;
          randomTrail(diffArr);
        } else {
          let diffArr = trailLists.filter(
            trails => trails.difficulty === object.difficult
          );
          randomTrail(diffArr);
        }
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
  state.Hike.randArr = randArr;
  render(state.Hike);
  //router.navigate("/Hike");
}

function listenForRegister(st) {
  if (st.page === "Signup") {
    document.querySelector("#signUpForm").addEventListener("submit", event => {
      event.preventDefault();
      //convert html elements to Array
      let inputList = Array.from(event.target.elements);
      //remove submit and clear buttons from array
      inputList.pop();
      inputList.pop();
      const inputs = inputList.map(input => input.value);
      let fName = inputs[0];
      let lName = inputs[1];
      let email = inputs[2];
      let password = inputs[3];

      //add user to database
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //add user to state and database
          addUserToStateAndDb(fName, lName, email, password);
          render(state.Profile);
          router.navigate("/Profile");
          //populateProfilePage();
        })
        .catch(err => {
          console.log(err);
          alert("Oops, something went wrong. Please try again!");
        });
    });
  }
}

//Add user to state and database
function addUserToStateAndDb(fName, lName, email, password) {
  // add user to state
  state.Profile.fName = fName;
  state.Profile.lName = lName;
  state.Profile.email = email;
  state.Profile.password = password;
  state.Profile.signedIn = true;
  state.Profile.loggedIn = true;

  // add user to database
  db.collection("users").add({
    fName: fName,
    lName: lName,
    email: email,
    password: password,
    signedIn: true,
    loggedIn: true
  });
}

//listen for user login
function listenForLoginForm(st) {
  if (st.page === "Login") {
    document.querySelector("#logInForm").addEventListener("submit", event => {
      event.preventDefault();

      //convert html elements to Array
      let inputList = Array.from(event.target.elements);
      //remove the button links so they aren't included
      inputList.pop();
      inputList.pop();

      const inputs = inputList.map(input => input.value);
      let email = inputs[0];
      let password = inputs[1];
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("user logged in");
        })
        .then(() => {
          getUserFromDb(email).then(() => {
            render(state.Profile), router.navigate("/Profile");
          });
          // .then(() => {
          //   populateProfilePage();
          // });
        })
        .catch(err => {
          alert(err);
        });
    });
  }
}

function addLogInAndOutListener(st) {
  if (st.page === "Profile") {
    document.querySelector("#logOutBttn").addEventListener("click", event => {
      event.preventDefault();
      //Test if user is logged-in
      if (st.loggedIn) {
        //log-out fxn//
        auth.signOut().then(() => {
          logOutUserInDb(st.email);
          resetUserInState();
          //update user in db
          db.collection("users").get;
        });
        render(state.Home);
        router.navigate("/Home");
      } else {
        render(state.Home);
        router.navigate("/Home");
      }
    });
  }
}

// //*** Populate the profile page with user info ***
// function populateProfilePage(st) {
//   if (st.page === "Profile") {
//     document.querySelector(
//       "#user-name"
//     ).innerText = `${state.Profilename} ${state.Profile.lastname}`;
//     document.querySelector(
//       "#user-name"
//     ).innerText = `${state.Profile.username}`;
//     document.querySelector(
//       "#user-email"
//     ).innerText = `${state.Profile.useremail}`;
//   }
// }

//*** Get user form the Database ***
function getUserFromDb(email) {
  return db
    .collection("users")
    .get()
    .then(snapshot =>
      snapshot.docs.forEach(doc => {
        if (email === doc.data().email) {
          let id = doc.id;
          db.collection("users")
            .doc(id)
            .update({ signedIn: true });

          let user = doc.data();
          // update state with user info
          state.Profile.fNname = user.fName;
          state.Profile.lName = user.lName;
          state.Profile.email = user.email;
          state.Profile.signedIn = true;
          state.Profile.loggedIn = true;
        }
      })
    )
    .catch(err => {
      // What to do when the request fails
      alert(err);
    });
}

//*** log-out the user in the Database ***
function logOutUserInDb(email) {
  if (state.Profile.loggedIn) {
    db.collection("users")
      .get()
      .then(snapshot =>
        snapshot.docs.forEach(doc => {
          if (email === doc.data().email) {
            let id = doc.id;
            db.collection("users")
              .doc(id)
              .update({ signedIn: false });
          }
        })
      );
  }
}

//*** Reset user in state ***
function resetUserInState() {
  state.Profile.fName = "";
  state.Profile.lName = "";
  state.Profile.email = "";
  state.Profile.password = "";
  state.Profile.signedIn = false;
  state.Profile.loggedIn = false;
}

function profileQuote() {
  document.getElementById("logInButton").addEventListener("click", event => {
    event.preventDefault();
    const inspirQuotes = [
      "You're awesome!",
      "Today is a great day to go on a hike!",
      "A walk in nature walks the soul back home. -Mary Davis",
      "I go to nature to be soothed and healed, and to have my senses put in order. -John Burroughs",
      "Between every two pines is a doorway to a new world. -John Muir",
      "You need special shoes for hiking-and a bit of a special soul as well. -Terry Guillemets",
      "In every walk with nature, one receives far more than he seeks. - John Muir",
      "To walk in nature is to witness a thousand miracles. -Mary Davis"
    ];
    let randomQuote = Math.floor(Math.random() * inspirQuotes.length);
    let quote = inspirQuotes[randomQuote];
    state.Profile.quote = quote;
  });
}
