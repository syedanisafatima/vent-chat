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

// Sidebar Navigation Switcher simulation
function switchTab(event, tabName) {
    const items = document.querySelectorAll('.nav-links li');
    items.forEach(li => li.classList.remove('active'));
    event.currentTarget.parentElement.classList.add('active');
}

// Logout action handler
function handleLogout() {
    alert('Logged out successfully!');
}