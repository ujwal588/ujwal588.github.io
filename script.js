const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const darkTheme = 'dark-theme';

// Check the initial theme based on user preference or system preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme === darkTheme) {
    document.body.classList.add(darkTheme);
    themeIcon.textContent = '☀️'; // Day symbol (Sun)
} else {
    themeIcon.textContent = '🌙'; // Night symbol (Moon)
}

// Toggle theme and icon on click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);

    // Switch icon based on the theme
    if (document.body.classList.contains(darkTheme)) {
        themeIcon.textContent = '☀️'; // Switch to Day symbol
        localStorage.setItem('theme', darkTheme);
    } else {
        themeIcon.textContent = '🌙'; // Switch to Night symbol
        localStorage.removeItem('theme');
    }
});
