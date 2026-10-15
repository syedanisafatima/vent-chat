
document.addEventListener('DOMContentLoaded', () => {

    /* =====================================
       ELEMENTS
       ===================================== */

    const articlesTab = document.getElementById('articlesTab');
    const helplinesTab = document.getElementById('helplinesTab');

    const articlesContent = document.getElementById('articlesContent');
    const helplinesContent = document.getElementById('helplinesContent');

    const logoutBtn = document.getElementById('logoutBtn');

    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const menuBackdrop = document.getElementById('menuBackdrop');


    /* =====================================
       ARTICLES / HELPLINES TABS
       ===================================== */

    function showArticles() {
        articlesContent.hidden = false;
        helplinesContent.hidden = true;

        articlesTab.classList.add('active');
        helplinesTab.classList.remove('active');
    }

    function showHelplines() {
        articlesContent.hidden = true;
        helplinesContent.hidden = false;

        helplinesTab.classList.add('active');
        articlesTab.classList.remove('active');
    }

    articlesTab.addEventListener('click', showArticles);
    helplinesTab.addEventListener('click', showHelplines);


    /* =====================================
       LOGOUT
       ===================================== */

    function handleLogout() {
        window.location.href = 'login.html';
    }

    logoutBtn.addEventListener('click', handleLogout);

    logoutBtn.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleLogout();
        }
    });


    /* =====================================
       MOBILE HAMBURGER MENU
       ===================================== */

    function toggleMenu(open) {
        sidebar.classList.toggle('menu-open', open);
        menuBackdrop.classList.toggle('show', open);

        menuToggle.setAttribute('aria-expanded', String(open));

        menuToggle.setAttribute(
            'aria-label',
            open ? 'Close navigation menu' : 'Open navigation menu'
        );

        menuToggle.textContent = open ? '✕' : '☰';
    }

    // Open or close menu using the three-line icon
    menuToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('menu-open');
        toggleMenu(!isOpen);
    });

    // Close menu by clicking outside it
    menuBackdrop.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close after selecting a navigation link
    sidebar.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close when Logout is clicked
    logoutBtn.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close menu using Escape
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            toggleMenu(false);
        }
    });

    // Start with Articles selected and the mobile menu closed
    showArticles();
    toggleMenu(false);

});
