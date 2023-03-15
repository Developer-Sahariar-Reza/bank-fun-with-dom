document.getElementById("btn-submit").addEventListener("click", function () {
  const userEmailElement = document.getElementById("user-email");
  const userEmail = userEmailElement.value;

  const userPasswordElement = document.getElementById("user-password");
  const userPassword = userPasswordElement.value;

  if (userEmail === "dom@bank.com" && userPassword === "dom") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid email or password");
    userEmailElement.value = "";
    userPasswordElement.value = "";
  }
});
