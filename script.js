
const detail_container = document.getElementById("more-details");

const timelineContainer = document.getElementsByClassName("container");
console.log(timelineContainer);

function formAction() {
  const bodyDiv = document.getElementById("body-cover");
  bodyDiv.classList.remove("body-div");
  document.getElementById("form-div").remove();
}

function clickSignIn(){
    const divForm = document.getElementById("form-div");
  divForm.innerHTML =
    "<center><h3 class='form-heading'>LOGIN</h3></center><form action=# onsubmit=formAction()><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <input id='formSubmit_login' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUp()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function clickSignUp(){
        const divForm = document.getElementById("form-div");
        divForm.innerHTML =
          "<center><h3 class='form-heading'>SIGN UP</h3></center> <form action='#' onsubmit='formAction()'> <label for='Fname'>First Name:<span class='sup'> *</span></label> <input type='text' name='fname' id='Fname' required placeholder='Your first name' /><br /> <label for='Lname'>Last Name:</label> <input type='text' name='lname' id='Lname' placeholder='Your last name' /><br /> <label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail'  /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <label for='confirmPassword'>Confirm Password:<span class='sup'> *</span></label> <input type='password' name='confpass' id='confirmPassword' required placeholder='password' /><br /> <input id='formSubmit_register' type='submit' value='SUBMIT'> <hr> <p class='sign-up'>Already a have an account? <a onclick = 'clickSignIn()' id = 'link-login' href='#'>SIGN IN</a> </p> </form>";
}

function clickUserLogin(){
    document.getElementById("form-div").style.display = "block";
}
