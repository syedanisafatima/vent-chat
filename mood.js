import {
  auth,
  db,
  addDoc,
  collection,
  serverTimestamp
} from "./firebase.js";

const saveBtn = document.getElementById("saveMoodBtn");

saveBtn.addEventListener("click", async () => {

    const selectedEmoji =
        document.querySelector(".emoji-icon.selected");

    if (!selectedEmoji) {
        alert("Please select a mood first.");
        return;
    }

    const mood = selectedEmoji.dataset.mood;

    const tags = [];

    document.querySelectorAll(".tag-btn.selected").forEach(tag => {
        tags.push(tag.dataset.tag);
    });

    try {

        await addDoc(collection(db, "moods"), {

            userId: auth.currentUser.uid,

            mood: mood,

            tags: tags,

            createdAt: serverTimestamp()

        });

        console.log("Mood Saved!");

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});