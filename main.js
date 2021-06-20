"use strict";
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = document.querySelector(".email").value;
  let password = document.querySelector(".pass").value;

  if (username == "admin" && password == "admin") {
    let message = (document.querySelector(".form-message").style.display =
      "block");
    let errMessage = (document.querySelector(".form-error").style.display =
      "none");
    return false;
  } else {
    let errMessage = (document.querySelector(".form-error").style.display =
      "block");
    let message = (document.querySelector(".form-message").style.display =
      "none");
  }
});

let createId = document.getElementById("createAccount");
let regBtn = document.getElementsByClassName("Reg-btn");

createId.onclick = function () {
  document.querySelector(".container-two").style.display = "block";
  document.querySelector(".container-two").style.opacity = 1;
  document.querySelector(".container").style.display = "none";
};
