//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "gaurav";
  var passRef = "12345";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == '' || pass == '') {
    alert("Please fill username and password.")
  } else if (user == userRef || pass == passRef) {
    alert("You authorised successfully.")
    window.location.href = "account.html";
  } else {
    alert("Please enter correct username and password.")
  }
};