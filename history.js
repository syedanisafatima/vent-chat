
/* =====================================
   WEEK / MONTH / YEAR FILTERS
   ===================================== */

function setFilter(event, filterType) {
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    // Update the chart title
    const chartTitle = document.querySelector('.chart-title');

    const titles = {
        week: 'Your Mood This Week',
        month: 'Your Mood This Month',
        year: 'Your Mood This Year'
    };

    chartTitle.textContent = titles[filterType] || titles.week;

    // Demo data: random bar heights for visual testing
    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        const randomHeight = Math.floor(Math.random() * 110) + 70;
        bar.style.height = randomHeight + 'px';
    });
}

/* =====================================
   LOGOUT
   ===================================== */

function handleLogout() {
    window.location.href = 'login.html';
}

/* =====================================
   MOBILE HAMBURGER MENU
   ===================================== */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('menuBackdrop');

    if (!menuToggle || !sidebar || !backdrop) {
        return;
    }

    function toggleMenu(open) {
        sidebar.classList.toggle('menu-open', open);
        backdrop.classList.toggle('show', open);

        menuToggle.setAttribute('aria-expanded', String(open));

        menuToggle.setAttribute(
            'aria-label',
            open ? 'Close navigation menu' : 'Open navigation menu'
        );

        menuToggle.textContent = open ? '✕' : '☰';
    }

    // Open or close using the menu icon
    menuToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('menu-open');
        toggleMenu(!isOpen);
    });

    // Close when tapping outside the sidebar
    backdrop.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close after selecting a navigation link
    sidebar.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close the drawer after tapping Logout
    sidebar.querySelector('.logout-btn')
        .addEventListener('click', () => {
            toggleMenu(false);
        });

    // Close with the Escape key
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            toggleMenu(false);
        }
    });
});
