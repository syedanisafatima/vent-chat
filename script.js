console.log("VentChat Loaded!");

// Greeting
const username = localStorage.getItem("ventChatUser") || "Friend";
const authAction = localStorage.getItem("authAction");
const greeting = document.getElementById("greeting");

if (greeting) {
    if (authAction === "signup") {
        greeting.innerText = `Hi, ${username}!`;
    } else {
        greeting.innerText = `Welcome back, ${username}!`;
    }
}

// Elements
const emojis = document.querySelectorAll(".emoji-icon");
const comfortMessage = document.getElementById("comfort-message");
const tagsSection = document.getElementById("tagsSection");
const saveBtn = document.getElementById("saveMoodBtn");
const tellMoreBtn = document.getElementById("tellMoreBtn");
const popUp = document.getElementById("feedbackPopUp");

const otherTagBtn = document.getElementById("otherTagBtn");
const otherInputContainer = document.getElementById("otherInputContainer");
const customTagInput = document.getElementById("customTagInput");

let selectedMood = null;
let selectedTags = [];

// Messages
const messages = {
    "Very Happy": "Yay! Love that amazing energy for you!",
    "Happy": "Aw, that's wonderful to see you smiling!",
    "Normal": "Just an okay day? That's totally fine too.",
    "Sad": "I'm sorry you're feeling this way. 💛",
    "Crying": "Sending you the biggest hug. 🫂",
    "Angry": "Take a deep breath. I'm here for you."
};

// Emoji Selection
emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {

        emojis.forEach(e => e.classList.remove("selected"));

        emoji.classList.add("selected");

        selectedMood = emoji.dataset.mood;

        comfortMessage.innerText = messages[selectedMood];

        tagsSection.style.display = "block";

        saveBtn.disabled = false;
        saveBtn.style.opacity = "1";
    });
});

// Tags
document.querySelectorAll(".tag-btn").forEach(button => {

    button.addEventListener("click", () => {

        const tag = button.dataset.tag;

        if (tag === "Other") {

            button.classList.toggle("selected");

            if (button.classList.contains("selected")) {

                otherInputContainer.style.display = "block";

            } else {

                otherInputContainer.style.display = "none";
                customTagInput.value = "";

                selectedTags = selectedTags.filter(t => !t.startsWith("Other:"));
            }

        } else {

            button.classList.toggle("selected");

            if (button.classList.contains("selected")) {

                if (!selectedTags.includes(tag))
                    selectedTags.push(tag);

            } else {

                selectedTags = selectedTags.filter(t => t !== tag);

            }

        }

    });

});

// Save Button UI
saveBtn.addEventListener("click", () => {

    if (otherTagBtn.classList.contains("selected") &&
        customTagInput.value.trim() !== "") {

        const other = "Other: " + customTagInput.value.trim();

        if (!selectedTags.includes(other))
            selectedTags.push(other);
    }

    popUp.classList.add("showPopup");

setTimeout(() => {
    popUp.classList.remove("showPopup");
}, 1500);


    saveBtn.innerText = "Mood Saved!";
    saveBtn.disabled = true;

    tellMoreBtn.style.display = "block";
    tellMoreBtn.style.opacity = "1";
});

console.log("script.js Finished Successfully!");