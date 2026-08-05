// Interactive Toggle Functionality for Week / Month / Year Filter Buttons
function setFilter(event, filterType) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    // Dynamic mock data adjustment for demonstration purposes when switching filters
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const randomHeight = Math.floor(Math.random() * 110) + 70;
        bar.style.height = randomHeight + 'px';
    });
}

// Logout action handler
function handleLogout() {
    window.location.href = 'login.html';
}