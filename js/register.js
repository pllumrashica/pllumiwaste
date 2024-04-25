// localStorage.clear();

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullNameInput").value;
    const personalNumber = document
      .getElementById("personalNumberInput")
      .value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    const birthday = document.getElementById("birthdayInput").value.trim();
    const gender = document.getElementById("femaleInput").checked
      ? "Mashkull"
      : "Femër";

    if (password !== confirmPassword) {
      alert("Password does not match the confirm password.");
      return;
    }

    const userData = {
      fullName,
      personalNumber,
      email,
      password,
      birthday,
      gender,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("User registered successfully!");
    registerForm.reset();
  });
});
