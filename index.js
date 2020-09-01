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
  loginLogoutListener(st);
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

const findAHikeBttn = document.getElementById("randomButton");
console.log(findAHikeBttn);
//pulling data from the form and creating variables for api calls
findAHikeSubmit();
function findAHikeSubmit() {
  //if (st.page === "Home") {
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
  //router.navigate("/Hike");
}

function listenForRegister(st) {
  if (st.page === "Signup") {
    document.querySelector("#signUpForm").addEventListener("submit", event => {
      event.preventDefault();
      //convert html elements to Array
      let inputList = Array.from(event.target.elements);
      console.log(inputList);
      //remove submit and clear buttons from array
      inputList.pop();
      inputList.pop();
      console.log(inputList);
      const inputs = inputList.map(input => input.value);
      let fName = inputs[0];
      let lName = inputs[1];
      let email = inputs[2];
      let password = inputs[3];

      console.log(inputs);

      //add user to database
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //add user to state and database
          addUserToStateAndDb(fName, lName, email, password);
          console.log(addUserToStateAndDb);
          render(state.Profile);
          router.navigate("/Profile");
          console.log(state.Profile);
          populateProfilePage();
        })
        .catch(err => {
          alert("Oops, something went wrong. Please try again!");
        });
    });
  }
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

      console.log(inputList);

      const inputs = inputList.map(input => input.value);
      let email = inputs[0];
      let password = inputs[1];
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("user logged in");
        })
        .then(() => {
          getUserFromDb(email)
            .then(() => {
              render(state.Profile), router.navigate("/Profile");
            })
            .then(() => {
              populateProfilePage();
            });
        })
        .catch(err => {
          alert(err);
        });
    });
  }
}

function loginLogoutListener(st) {
  if (st.page === "Profile") {
    document.querySelector("#logButton").addEventListener("click", event => {
      event.preventDefault();
      //Test if user is logged-in
      if (st.loggedIn) {
        //log-out fxn//
        auth.signOut().then(() => {
          console.log("user logged out");
          logOutUserInDb(st.email);
          resetUserInState();
          //update user in db
          db.collection("users").get;
        });
        console.log(state.Profile);
        render(state.Home);
        router.navigate("/Home");
      } else {
        console.log(state.Profile);
        render(state.Home);
        router.navigate("/Home");
      }
    });
  }
}

//*** Add user to state and database ***
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
    firstname: firstname,
    lastname: lastname,
    username: username,
    useremail: email,
    password: password,
    signedIn: true,
    loggedIn: true
  });
}

//*** Populate the profile page with user info ***
function populateProfilePage(st) {
  if (st.page === "Profile") {
    document.querySelector(
      "#user-name"
    ).innerText = `${state.Profile.firstname} ${state.Profile.lastname}`;
    document.querySelector(
      "#user-name"
    ).innerText = `${state.Profile.username}`;
    document.querySelector(
      "#user-email"
    ).innerText = `${state.Profile.useremail}`;
  }
}

//*** Get user form the Database ***
function getUserFromDb(email) {
  return db
    .collection("users")
    .get()
    .then(snapshot =>
      snapshot.docs.forEach(doc => {
        console.log(doc.data);
        if (email === doc.data().email) {
          let id = doc.id;
          db.collection("users")
            .doc(id)
            .update({ signedIn: true });
          console.log("user signed in db");

          let user = doc.data();
          // update state with user info
          state.Profile.firstname = user.firstname;
          state.Profile.lastname = user.lastname;
          state.Profile.username = user.username;
          state.Profile.useremail = user.useremail;
          state.Profile.signedIn = true;
          state.Profile.loggedIn = true;
        }
      })
    )
    .catch(err => {
      // What to do when the request fails
      alert(err);
      console.log("Get user from DB request failed!");
      console.log("Error", err);
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
    console.log("user signed out in db");
  }
}

//*** Reset user in state ***
function resetUserInState() {
  state.Profile.firstname = "";
  state.Profile.lastname = "";
  state.Profile.username = "";
  state.Profile.useremail = "";
  state.Profile.password = "";
  state.Profile.signedIn = false;
  state.Profile.loggedIn = false;
}

// function differentHike() {
//   let newButton = document.querySelector(".findNewOne");
//   newButton.addEventListener("click", event => {
//     event.preventDefault();
//     render(state.Home);
//     router.navigate("/Home");
//   });
// }

// const signUpBttn = document.getElementById("signUpButton");
// signUpUser();
// function signUpUser() {
//   signUpBttn.addEventListener("click", event => {
//     event.preventDefault();
//     let fName = document.getElementById("fName").value;
//     let lName = document.getElementById("lName").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     const signUpInfo = {
//       fName,
//       lName,
//       email,
//       password
//     };
//     auth.createUserWithEmailAndPassword(email, password).then(response => {
//               console.log("User Signed Up!");
//               console.log(response);
//               console.log(response.user);
//               addUserToStateAndDb(name, email, password);
//               render(state.Home);
//     console.log(signUpInfo);
//     saveSignUpInfo(signUpInfo);
//   });
// }
// function saveSignUpInfo(info) {
//   let logInEmail = info.email;
//   state.Login.logInInfo.email = logInEmail;
//   let logInPassword = info.password;
//   state.Login.logInInfo.password = logInPassword;
//   let profileInfo = info;
//   state.Profile.info = profileInfo;
//   render(state.Profile);
// }
// let logInButton = document.getElementById("logInButton");
// function logInUser(info) {
//   console.log(info);
//   logInButton.addEventListener("click", event => {
//     event.preventDefault();
//     let logInE = document.getElementById("logInEmail").value;
//     console.log(logInE);
//     let logInP = document.getElementById("logInPassword").value;
//     let logInMatch = [logInE, logInP];
//     //if(logInMatch === info) {}
//   });
// }

// function logInUser() {
//   if
// }

// const signUpBttn = document.getElementsByClassName("signUpButton");
// console.log(signUpBttn);

// function signUpUser() {
//   if (st.page === "Signup") {
//     signUpBttn.addEventListener("click", event => {
//       event.preventDefault();
//       let inputList = Array.from(event.target.element);
//       inputList.pop();
//       console.log(inputList);
//       const inputs = inputList.map(input => input.value);
//       let name = inputs[0];
//       //document.getElementById("name").value;
//       console.log(name);
//       let email = inputs[1];
//       //document.getElementById("email").value;
//       console.log(email);
//       let password = inputs[2];
//       //document.getElementById("password").value;
//       console.log(password);

//       auth.createUserWithEmailAndPassword(email, password).then(response => {
//         console.log("User Signed Up!");
//         console.log(response);
//         console.log(response.user);
//         addUserToStateAndDb(name, email, password);
//         render(state.Home);
//       });
//     });
//   }
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

// const logInButton = document.getElementsByClassName("logInButton");
// console.log(logInButton);
// function logInUser(st) {
//   if (st.page === "Login") {
//     logInButton.addEventListener("click", event => {
//       event.preventDefault();
//       let email = document.getElementById("logInEmail").value;
//       console.log(email);
//       let password = document.getElementById("logInPassword").value;
//       console.log(password);
//       auth.signInWithEmailAndPassword(email, password).then(() => {
//         console.log("user signed in");
//         getUserFromDb(email).then(() => render(state.Profile));
//       });
//     });
//   }
// }
// function getUserFromDb(email) {
//   return db
//     .collection("users")
//     .get()
//     .then(snapshot =>
//       snapshot.docs.forEach(doc => {
//         if (email === doc.data().email) {
//           let id = doc.id;
//           db.collection("users")
//             .doc(id)
//             .update({ signedIn: true });
//           console.log("user signed in in db");
//           let user = doc.data();
//           state.User.name = user.name;
//           state.User.email = email;
//           state.User.loggedIn = true;
//           console.log(state.Profile);
//         }
//       })
//     );
// }
