const divForm = document.getElementById("form-div");

function validate_password() {
  var passw = document.getElementById("passw").value;
  var confirmPassw = document.getElementById("confirmPassword").value;

  if (passw != confirmPassw) {
    document.getElementById("wrong_pass_alert").style.color = "red";
    document.getElementById("wrong_pass_alert").innerHTML =
      "Use correct password!";
    document.getElementById("formSubmit").disabled = true;
    document.getElementById("formSubmit").style.opacity = 0.4;
    document.getElementById("formSubmit").style.cursor = "not-allowed";
  } else {
    document.getElementById("wrong_pass_alert").innerHTML = "Correct password!";
    document.getElementById("formSubmit").disabled = false;
    document.getElementById("formSubmit").style.opacity = 1;
    document.getElementById("formSubmit").style.cursor = "pointer";
  }
}

function formAction() {
  const bodyDiv = document.getElementById("body-cover");
  bodyDiv.classList.remove("body-div");
  divForm.remove();
  document.getElementById("user").innerHTML =
    "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
  document.getElementById("login_user").style.left = "93%";
  document.getElementById("login_user").style.borderRadius = "50%";
}

function formActionHome() {
  divForm.remove();
  document.getElementById("user_home").innerHTML =
    "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";

  document.getElementById("login_user").style.left = "93%";
  document.getElementById("login_user").style.borderRadius = "50%";
}

function clickSignIn() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>LOGIN</h3></center><form action=# onsubmit=formAction()><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <input id='formSubmit_login' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUp()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function clickSignUp() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>SIGN UP</h3></center> <form action='#' onsubmit='formAction()'> <label for='Fname'>First Name:<span class='sup'> *</span></label> <input type='text' name='fname' id='Fname' required placeholder='Your first name' /><br /> <label for='Lname'>Last Name:</label> <input type='text' name='lname' id='Lname' placeholder='Your last name' /><br /> <label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail'  /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <label for='confirmPassword'>Confirm Password:<span class='sup'> *</span></label> <input type='password' name='confpass' id='confirmPassword' required placeholder='password' onkeyup='validate_password()' /><br /> <input id='formSubmit_register' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Already a have an account? <a onclick = 'clickSignIn()' id = 'link-login' href='#'>SIGN IN</a> </p> </form>";
}

function clickUserLogin() {
  divForm.style.display = "block";
}

const homePageForm = document.getElementsByClassName("home")[0];
function clickClose() {
  homePageForm.style.display = "none";
}

function clickSignUpHome() {
  homePageForm.innerHTML =
    "<i onclick = 'clickClose()' class='fa fa-times-circle-o'></i> <center><h3 class='form-heading'>SIGN UP</h3></center> <form action='#' onsubmit='formActionHome()'> <label for='Fname'>First Name:<span class='sup'> *</span></label> <input type='text' name='fname' id='Fname' required placeholder='Your first name' /><br /> <label for='Lname'>Last Name:</label> <input type='text' name='lname' id='Lname' placeholder='Your last name' /><br /> <label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail'  /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <label for='confirmPassword'>Confirm Password:<span class='sup'> *</span></label> <input type='password' name='confpass' id='confirmPassword' required placeholder='password' /><br /> <input id='formSubmit_register' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Already a have an account? <a onclick = 'clickSignInHome()' id = 'link-login' href='#'>SIGN IN</a> </p> </form>";
}

function clickSignInHome() {
  homePageForm.innerHTML =
    "<i onclick = 'clickClose()' class='fa fa-times-circle-o'></i> <center><h3 class='form-heading'>LOGIN</h3></center><form action='#' onsubmit='formActionHome()'><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <input id='formSubmit_login' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUpHome()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function toggleDropdown() {
  var boxProfile = document.getElementById("profile-dropdown");
  console.log(boxProfile);
  if (window.getComputedStyle(boxProfile).display == "block") {
    boxProfile.style.display = "none";
  } else if (window.getComputedStyle(boxProfile).display == "none") {
    boxProfile.style.display = "block";
  }
}

function showMaps() {
  const container = document.getElementById("container").innerHTML = `<div class="div-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d186184.92177880395!2d77.22699708452369!3d28.659424157075215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715489557995!5m2!1sen!2sin"
      width="1200"
      height="460"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>`;
}

// function myMap() {
//   var mapProp = {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//   }

// <!doctype html>
// <!--
// @license
// Copyright 2023 Google LLC. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// -->
// <html>
//  <head>
//    <title>Info Windows</title>
//    <script>
//      /**
//       * @license
//       * Copyright 2023 Google LLC. All Rights Reserved.
//       * SPDX-License-Identifier: Apache-2.0
//       */

//      // This example displays a marker at the center of Australia.
//      // When the user clicks the marker, an info window opens.
//      async function initMap() {
//        const contentString = `
//          <div>
//            <h1>Uluru</h1>
//            <div>
//              <p>
//                <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
//                sandstone rock formation in the southern part of the
//                Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
//                south west of the nearest large town, Alice Springs; 450&#160;km
//                (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
//                features of the Uluru - Kata Tjuta National Park. Uluru is
//                sacred to the Pitjantjatjara and Yankunytjatjara, the
//                Aboriginal people of the area. It has many springs, waterholes,
//                rock caves and ancient paintings. Uluru is listed as a World
//                Heritage Site.
//              </p>
//              <p>
//                Attribution: Uluru,
//                <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
//                  https://en.wikipedia.org/w/index.php?title=Uluru
//                </a>
//                (last visited June 22, 2009).
//              </p>
//            </div>
//          </div>`;
//        const infoWindow = new google.maps.InfoWindow({
//          content: contentString,
//          ariaLabel: "Uluru",
//        });

//        const marker = document.querySelector('gmp-advanced-marker');
//        marker.addEventListener('gmp-click', () => {
//          infoWindow.open({anchor: marker});
//        });
//      }

//      window.initMap = initMap;
//    </script>
//    <style>
//      /**
//       * @license
//       * Copyright 2023 Google LLC. All Rights Reserved.
//       * SPDX-License-Identifier: Apache-2.0
//       */

//      /*
//       * Optional: Makes the sample page fill the window.
//       */
//      html,
//      body {
//        height: 100%;
//        margin: 0;
//      }
//    </style>
//  </head>
//  <body>
//    <gmp-map center="-25.363, 131.044" zoom="4" map-id="DEMO_MAP_ID">
//      <gmp-advanced-marker position="-25.363, 131.044" title="Uluru" gmp-clickable></gmp-advanced-marker>
//    </gmp-map>
//    <script
//      src="https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&libraries=marker&v=beta&solution_channel=GMP_CCS_infowindows_v2"
//      defer
//    ></script>
//  </body>
// </html>
