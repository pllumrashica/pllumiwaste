document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(localStorage.getItem("user"));
  const fullNameHeading = document.getElementById("profileName");

  if (userData && userData.fullName) {
    fullNameHeading.innerText = userData.fullName;
  }
});
