import {
  auth,
  db,
  createUserWithEmailAndPassword,
  doc,
  setDoc
} from "./firebase.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email
    });

    localStorage.setItem("ventChatUser", username);

    alert("Account Created Successfully!");

    window.location.href = "index.html";
}catch (error) {
    console.log(error);
    console.log(error.code);
    console.log(error.message);

    alert(error.code + "\n" + error.message);
}

console.log(error);


});