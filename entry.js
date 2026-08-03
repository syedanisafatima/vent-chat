document.addEventListener('DOMContentLoaded', () => {
    // Retrieve stored values from localStorage
    const savedTitle = localStorage.getItem('entryTitle') || 'My Journal Entry';
    const savedImgSrc = localStorage.getItem('selectedMoodImg') || 'wonderful.jpeg';

    // Populate the editable title input field
    const titleInput = document.getElementById('displayTitleInput');
    titleInput.value = savedTitle;

    // Apply the dynamic mood image as a slightly invisible background
    const bgOverlay = document.getElementById('bgOverlay');
    bgOverlay.style.backgroundImage = `url('${savedImgSrc}')`;

    // Save Button Logic
    const saveEntryBtn = document.getElementById('saveEntryBtn');
    const journalInput = document.getElementById('journalInput');

    saveEntryBtn.addEventListener('click', () => {
        const entryText = journalInput.value.trim();
        const currentTitle = titleInput.value.trim() || 'Journal Entry';

        if (!entryText) {
            alert('Cannot save an empty journal entry!');
            return;
        }

        // Get existing entries from localStorage or initialize an empty array
        const existingEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

        // Create new entry object using the updated/edited title
        const newEntry = {
            title: currentTitle,
            snippet: entryText.substring(0, 35) + '...',
            content: entryText,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        };

        // Add to beginning of array and save back
        existingEntries.unshift(newEntry);
        localStorage.setItem('journalEntries', JSON.stringify(existingEntries));

        // Redirect back to main page
        window.location.href = 'journaling.html';
    });
});