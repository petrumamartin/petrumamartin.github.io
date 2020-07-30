function storeLogin() {
    
    localStorage.setItem( 'firstname', document.forms["login"]["firstname"].value);
    localStorage.setItem('username', document.forms["login"]["username"].value);
    localStorage.setItem('password', document.forms["login"]["password"].value);
    retrieveLogin();
}
function retrieveLogin() {
  
  var firstname = localStorage.getItem('firstname');  
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  
  document.getElementById("identification").innerHTML = `<p>Welcome ${firstname}</p><p>Your Username is ${username}</p><p>Your Password is ${password}</p>`;

}