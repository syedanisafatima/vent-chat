document.addEventListener('DOMContentLoaded', () => {
    const articlesTab = document.getElementById('articlesTab');
    const helplinesTab = document.getElementById('helplinesTab');
    const contentViewport = document.getElementById('contentViewport');
    const logoutBtn = document.getElementById('logoutBtn'); // Assuming your logout element has this ID

    const articlesHTML = `
        <div class="cards-wrapper">
            <div class="resource-card card-anxiety">
                <div class="card-overlay">
                    <div class="card-text">
                        <h2>Managing Anxiety</h2><br>
                        <h3>Tips to calm your mind</h3>
                    </div>
                </div>
            </div>
            <div class="resource-card card-mindfulness">
                <div class="card-overlay">
                    <div class="card-text">
                        <h2>Mindfulness Basics</h2><br>
                        <h3>Small steps, big impact</h3>
                    </div>
                </div>
            </div>
        </div>
    `;

    const helplinesHTML = `
        <div class="helpline-box">
            <div class="helpline-number">080-46110007</div>
            <div class="helpline-desc">Seeking help is a natural and healthy part of life, not a sign of weakness. Everyone faces challenges they cannot solve alone, and reaching out builds stronger connections, shares burdens, and leads to faster, safer solutions.</div>
        </div>
    `;

    // Automatically load articles on page load to prevent the font-size mismatch glitch
    contentViewport.innerHTML = articlesHTML;

    articlesTab.addEventListener('click', () => {
        articlesTab.classList.add('active');
        helplinesTab.classList.remove('active');
        contentViewport.innerHTML = articlesHTML;
    });

    helplinesTab.addEventListener('click', () => {
        helplinesTab.classList.add('active');
        articlesTab.classList.remove('active');
        contentViewport.innerHTML = helplinesHTML;
    });

    // Hook up logout button functionality securely via JS
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});

function handleLogout() {
    window.location.href = 'login.html';
}