document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector('form[action="loginForm"]');

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const personalNumber = document
      .getElementById("personalNumber")
      .value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    const userData = JSON.parse(localStorage.getItem("user"));

    if (
      !userData ||
      userData.personalNumber !== personalNumber ||
      userData.password !== password
    ) {
      alert(
        "Numri personal ose fjalëkalimi i gabuar. Ju lutem provoni përsëri."
      );
      return;
    }
    let successBox = document.getElementById("successBox");
    successBox.style.display = "flex";
    setTimeout(function () {
      window.location.href = "dashboard.html"; //will redirect to your blog page (an ex: blog.html)
    }, 2000);
    // You can redirect or perform other actions here
    // let loginSuccessVar = true;
    loginForm.reset();
  });
});
