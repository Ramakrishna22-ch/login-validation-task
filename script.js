function validateLogin() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  document.getElementById("userError").innerText = "";
  document.getElementById("passError").innerText = "";

  if (user === "") {
    document.getElementById("userError").innerText = "Username required";
    return false;
  }

  if (pass === "") {
    document.getElementById("passError").innerText = "Password required";
    return false;
  }

  alert("Login Successful!");
  return true;
}

function resetPassword() {
  let newPass = document.getElementById("newPass").value;
  let confirmPass = document.getElementById("confirmPass").value;
  let error = document.getElementById("resetError");

  error.innerText = "";

  if (newPass === "" || confirmPass === "") {
    error.innerText = "All fields are required";
    return false;
  }

  if (newPass !== confirmPass) {
    error.innerText = "Passwords do not match";
    return false;
  }

  alert("Password reset successful!");
  window.location.href = "login.html";
  return false;
}
