const divForm = document.getElementById("form-div");

function formAction() {
  const bodyDiv = document.getElementById("body-cover");
  bodyDiv.classList.remove("body-div");
  divForm.remove();
  document.getElementById("user").innerHTML = "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
  document.getElementById("login_user").style.left = '93%';
  document.getElementById("login_user").style.borderRadius = '50%';
}

function formActionHome(){
  divForm.remove();
  document.getElementById("user_home").innerHTML = "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
  
  document.getElementById("login_user").style.left = '93%';
  document.getElementById("login_user").style.borderRadius = '50%';
}

function clickSignIn() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>LOGIN</h3></center><form action=# onsubmit=formAction()><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <input id='formSubmit_login' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUp()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function clickSignUp() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>SIGN UP</h3></center> <form action='#' onsubmit='formAction()'> <label for='Fname'>First Name:<span class='sup'> *</span></label> <input type='text' name='fname' id='Fname' required placeholder='Your first name' /><br /> <label for='Lname'>Last Name:</label> <input type='text' name='lname' id='Lname' placeholder='Your last name' /><br /> <label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail'  /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <label for='confirmPassword'>Confirm Password:<span class='sup'> *</span></label> <input type='password' name='confpass' id='confirmPassword' required placeholder='password' /><br /> <input id='formSubmit_register' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Already a have an account? <a onclick = 'clickSignIn()' id = 'link-login' href='#'>SIGN IN</a> </p> </form>";
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

function clickSignInHome(){
  homePageForm.innerHTML = "<i onclick = 'clickClose()' class='fa fa-times-circle-o'></i> <center><h3 class='form-heading'>LOGIN</h3></center><form action='#' onsubmit='formActionHome()'><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <input id='formSubmit_login' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUpHome()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function toggleDropdown(){
  var boxProfile = document.getElementById("profile-dropdown");
  console.log(boxProfile);
  if(window.getComputedStyle(boxProfile).display == 'block'){
    boxProfile.style.display = 'none';
  }
  else if(window.getComputedStyle(boxProfile).display == 'none'){
    boxProfile.style.display = 'block';
  }
 
}