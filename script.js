let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('dark');
} else {
    setTheme(theme);
}

let themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
}

function setTheme(mode) {
    let themeToggleBtn = document.getElementById('theme-toggle');
    if (mode === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.innerText = '🌙 Dark Mode';
    } else {
        document.body.classList.remove('light-mode');
        if (themeToggleBtn) themeToggleBtn.innerText = '☀️ Light Mode';
    }

    theme = mode;
    localStorage.setItem('theme', mode);
}
