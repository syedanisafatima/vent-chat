document.addEventListener('DOMContentLoaded', () => {
    const entriesListContainer = document.querySelector('.entries-list');
    
    // Default dummy entry if localStorage is empty
    const defaultEntries = [
        {
            title: "Journal Entry 1",
            date: "May 20",
            snippet: "Completed my assignments...",
            mood: "Wonderful",
            content: "Completed my assignments..."
        }
    ];

    const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || defaultEntries;

    // Function to render entries into the sidebar
    function renderEntries(entriesToDisplay) {
        entriesListContainer.innerHTML = '';

        if (entriesToDisplay.length === 0) {
            entriesListContainer.innerHTML = '<p style="font-size: 11px; color: #8b9bb4; padding: 10px;">No entries found.</p>';
            return;
        }

        entriesToDisplay.forEach((entry, index) => {
            const entryCard = document.createElement('div');
            entryCard.className = `entry-card ${index === 0 ? 'active-preview' : ''}`;
            entryCard.innerHTML = `
                <div class="entry-card-header">
                    <span class="entry-title">${entry.title}</span>
                    <span class="entry-date">${entry.date || 'Aug 3'}</span>
                </div>
                <p class="entry-snippet">${entry.snippet || entry.content || ''}</p>
            `;

            // When clicking a saved entry on the left, load it into entry.html
            entryCard.addEventListener('click', () => {
                localStorage.setItem('entryTitle', entry.title);
                localStorage.setItem('selectedMood', entry.mood || 'Wonderful');
                localStorage.setItem('entryContent', entry.content || entry.snippet || '');
                window.location.href = 'entry.html';
            });

            entriesListContainer.appendChild(entryCard);
        });
    }

    // Initial render
    renderEntries(savedEntries);

    // Interactive Mood Card Selection Logic
    const moodCards = document.querySelectorAll('.mood-card');
    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            moodCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // New Entry Button Action with Custom Modal
    const newEntryBtn = document.getElementById('newEntryBtn');
    const titleModal = document.getElementById('titleModal');
    const modalStartBtn = document.getElementById('modalStartBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');
    const modalTitleInput = document.getElementById('modalTitleInput');

    newEntryBtn.addEventListener('click', () => {
        const selectedMoodCard = document.querySelector('.mood-card.selected');

        if (!selectedMoodCard) {
            alert('Please select a mood before creating a new entry!');
            return;
        }

        titleModal.style.display = 'flex';
        modalTitleInput.focus();
        modalTitleInput.select();
    });

    // When clicking "Start Journaling" on the modal
    modalStartBtn.addEventListener('click', () => {
        const entryTitle = modalTitleInput.value.trim() || 'Journal Entry';
        const selectedMoodCard = document.querySelector('.mood-card.selected');
        
        const moodName = selectedMoodCard.getAttribute('data-mood');
        const moodImgSrc = selectedMoodCard.querySelector('img').getAttribute('src');

        localStorage.setItem('selectedMood', moodName);
        localStorage.setItem('selectedMoodImg', moodImgSrc);
        localStorage.setItem('entryTitle', entryTitle);
        localStorage.setItem('entryContent', ''); // Clear content for a fresh entry

        window.location.href = 'entry.html';
    });

    // When clicking Cancel on the modal
    modalCancelBtn.addEventListener('click', () => {
        titleModal.style.display = 'none';
    });

    // Search Input Filtering Logic for Saved Entries
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        const filteredEntries = savedEntries.filter(entry => 
            entry.title.toLowerCase().includes(query)
        );

        renderEntries(filteredEntries);
    });
});