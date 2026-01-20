const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validatePassword() {
  const value = password.value;

  if (value.length === 0) {
    passwordError.textContent = "";
    return;
  }

  if (value.length < 8) {
    passwordError.textContent = "* Password must be at least 8 characters";
  } else {
    passwordError.textContent = "";
  }
}

function validateConfirmPassword() {
  const value = confirmPassword.value;

  if (value.length === 0) {
    confirmPasswordError.textContent = "";
    return;
  }

  if (value !== password.value) {
    confirmPasswordError.textContent = "* Passwords do not match";
  } else {
    confirmPasswordError.textContent = "";
  }
}

password.addEventListener("input", validatePassword);
password.addEventListener("blur", validatePassword);

confirmPassword.addEventListener("input", validateConfirmPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validatePassword();
  validateConfirmPassword();

  if (form.checkValidity() && password.value === confirmPassword.value) {
    console.log("Form submitted successfully!");
    alert("Account created successfully!");
    form.reset();
  } else {
    console.log("Form has errors");
  }
});
