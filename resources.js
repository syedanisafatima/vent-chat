document.addEventListener('DOMContentLoaded', () => {
    const articlesTab = document.getElementById('articlesTab');
    const helplinesTab = document.getElementById('helplinesTab');
    const contentViewport = document.getElementById('contentViewport');

    const articlesHTML = `
        <div class="cards-wrapper">
            <div class="resource-card card-anxiety">
                <div class="card-overlay">
                    <div class="card-text">
                        <h3>Managing Anxiety</h3>
                        <p>Tips to calm your mind</p>
                    </div>
                </div>
            </div>
            <div class="resource-card card-mindfulness">
                <div class="card-overlay">
                    <div class="card-text">
                        <h3>Mindfulness Basics</h3>
                        <p>Small steps, big impact</p>
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
});