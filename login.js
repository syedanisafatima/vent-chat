import {
  auth,
  signInWithEmailAndPassword
} from "./firebase.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Save for greeting
    localStorage.setItem("ventChatUser", email.split("@")[0]);
    localStorage.setItem("authAction", "login");

    alert("Login Successful!");

    window.location.href = "index.html";

  } catch (error) {
    alert(error.message);
  }
});