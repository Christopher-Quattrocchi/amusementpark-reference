// User Interface Logic

function hideResultsAndError() {
  //error catch
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    hideResultsAndError();
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    // we're evaluating the Tower of Doom ride first
    if (age >= 12 && height >= 60) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
      document.getElementById("tower").removeAttribute("class");
      //next we're evaluating the Roller Coaster ride.
    } else if (age >= 12 || height >= 48) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
      //next we eval the Swings ride
    } else if (age >= 6) {
      document.getElementById("swings").removeAttribute("class");
      //Finally our catch-all for when a user is less than 6 y/o
    } else if (isNaN(age) || isNaN(height)) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      document.getElementById("sorry").removeAttribute("class");
    }
  }
};


// // with the logical not operator, we check for whether
// // age or height do NOT exist, and if they don't exist, 
// // then we display the error message
// if (!age || !height) {
//   document.getElementById("error-message").removeAttribute("class");
// // in all other cases, we run our code to see what ride a user can go on
// } else {
//   if (age >= 12 && height >= 60) {
//     document.getElementById("swings").removeAttribute("class");
//     document.getElementById("coaster").removeAttribute("class");
//     document.getElementById("tower").removeAttribute("class");
//   } else if (age >= 12 || height >= 48) {
//     document.getElementById("swings").removeAttribute("class");
//     document.getElementById("coaster").removeAttribute("class");
//   } else if (age >= 6) {
//     document.getElementById("swings").removeAttribute("class");
//   } else {
//     document.getElementById("sorry").removeAttribute("class");
//   }
// }
