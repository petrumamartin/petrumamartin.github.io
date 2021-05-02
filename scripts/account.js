/*
  Create an account and display the results
*/
function createAccount() {
    
    localStorage.setItem( 'firstname', document.forms["form-account"]["firstname"].value);
    localStorage.setItem('username', document.forms["form-account"]["username"].value);
    localStorage.setItem('password', document.forms["form-account"]["password"].value);
    localStorage.setItem('hint', document.forms["form-account"]["hint"].value);
    retrieveAccount();
}
function retrieveAccount() {
  
  var firstname = localStorage.getItem('firstname');  
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  
  document.getElementById("identification").innerHTML = `<p>Welcome ${firstname}</p><p>Your Username is ${username}</p><p>Your Password is ${password}</p>`;

}

/*
  Login in by comparing input and stored values
*/
function retrieveLogin() {

  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  var firstname = localStorage.getItem('firstname');

  var usernameEntered = document.getElementById("username").value;
  var passwordEntered = document.getElementById("password").value;

  if( usernameEntered == username && passwordEntered == password ) {
      document.getElementById("identification").innerHTML = "Welcome " + firstname + ".";
      document.getElementById("loginDisplay").style.visibility = "visible";
  }
  else {
      document.getElementById("identification").innerHTML = "The Username or Password is not valid<br />Try using the Hint";
      document.getElementById("newmessage").innerHTML = "";
      document.getElementById("loginDisplay").style.visibility = "hidden";
      document.getElementById("hint").style.visibility = "visible";
  }
}


/*
  Provide login identification with hint question
*/
function retrieveRecovery() {

  var hint = localStorage.getItem('hint');
  var answer = document.forms["form-hint"]["favourite-colour"].value;

  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');

  if(true){
    document.getElementById("identification").innerHTML = "Username: " + username + "<br />Password: " + password;
  }
}