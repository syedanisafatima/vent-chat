console.log("VentChat Loaded!");


    // 1. Greeting Setup
    const username = localStorage.getItem('ventChatUser') || 'Friend';
    const authAction = localStorage.getItem('authAction');
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        if (authAction === 'signup') {
            greetingElement.innerText = `Hi, ${username}!`;
        } else {
            greetingElement.innerText = `Welcome back, ${username}!`;
        }
    }

    // 2. 6 Emojis Logic & Messages
    const emojis = document.querySelectorAll('.emoji-icon');
    const comfortMessage = document.getElementById('comfort-message');
    const tagsSection = document.getElementById('tagsSection');
    const saveBtn = document.getElementById('saveMoodBtn');
    let selectedMood = null;
    let selectedTags = [];

    const messages = {
        "Very Happy": "Yay! Love that amazing energy for you!",
        "Happy": "Aw, that's wonderful to see you smiling!",
        "Normal": "Just an okay day? That's totally fine too.",
        "Sad": "Aw, I'm so sorry. I'm right here with you.",
        "Crying": "Sending you the biggest hug right now.",
        "Angry": "Oh no, I'm sorry you're feeling that way. Let's let it out."
    };

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            emojis.forEach(e => e.classList.remove('selected'));
            emoji.classList.add('selected');
            selectedMood = emoji.getAttribute('data-mood');
            
            if (comfortMessage) comfortMessage.innerText = messages[selectedMood] || "I hear you.";
            if (tagsSection) tagsSection.style.display = 'block';
            
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.style.opacity = '1';
            }
        });
    });

    // 3. Quick Tags & "Other" Custom Text Box Logic
    const otherTagBtn = document.getElementById('otherTagBtn');
    const otherInputContainer = document.getElementById('otherInputContainer');
    const customTagInput = document.getElementById('customTagInput');

    document.querySelectorAll('.tag-btn').forEach(tagBtn => {
        tagBtn.addEventListener('click', () => {
            const tag = tagBtn.getAttribute('data-tag');
            
            if (tag === 'Other') {
                tagBtn.classList.toggle('selected');
                if (tagBtn.classList.contains('selected')) {
                    otherInputContainer.style.display = 'block';
                } else {
                    otherInputContainer.style.display = 'none';
                    customTagInput.value = '';
                    selectedTags = selectedTags.filter(t => !t.startsWith('Other:'));
                }
            } else {
                tagBtn.classList.toggle('selected');
                if (tagBtn.classList.contains('selected')) {
                    selectedTags.push(tag);
                } else {
                    selectedTags = selectedTags.filter(t => t !== tag);
                }
            }
        });
    });

    // 4. Save Button Interaction
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (otherTagBtn && otherTagBtn.classList.contains('selected') && customTagInput.value.trim() !== '') {
                selectedTags.push(`Other: ${customTagInput.value.trim()}`);
            }

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
            if (popUp) {
                popUp.style.display = 'block';
                setTimeout(() => { popUp.style.display = 'none'; }, 1500);
            }

            saveBtn.innerText = 'Mood Saved!';
            saveBtn.disabled = true;
            document.getElementById('tellMoreBtn').style.display = 'block';
        });
    }
;