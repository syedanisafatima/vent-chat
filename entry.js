import {
  auth,
  db,
  addDoc,
  collection,
  serverTimestamp
} from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {

    const savedTitle = localStorage.getItem("entryTitle") || "My Journal Entry";
    const savedImgSrc = localStorage.getItem("selectedMoodImg") || "wonderful.jpeg";
    const savedMood = localStorage.getItem("selectedMood") || "Wonderful";

    const titleInput = document.getElementById("displayTitleInput");
    titleInput.value = savedTitle;

    const bgOverlay = document.getElementById("bgOverlay");
    bgOverlay.style.backgroundImage = `url('${savedImgSrc}')`;

    const journalInput = document.getElementById("journalInput");

    const savedContent = localStorage.getItem("entryContent") || "";
journalInput.value = savedContent;
    const saveEntryBtn = document.getElementById("saveEntryBtn");

    saveEntryBtn.addEventListener("click", async () => {

        const entryText = journalInput.value.trim();
        const currentTitle = titleInput.value.trim();

        if (entryText === "") {
            alert("Cannot save an empty journal entry!");
            return;
        }

        try {

            await addDoc(collection(db, "journalEntries"), {

                userId: auth.currentUser.uid,

                title: currentTitle,

                content: entryText,

                snippet: entryText.substring(0,35) + "...",

                mood: savedMood,

                createdAt: serverTimestamp()

            });

            alert("Journal Saved!");

            window.location.href = "journaling.html";

        }

        catch(error){

            console.error(error);

            alert(error.message);

        }

    });

});