const urlParams = new URLSearchParams(window.location.search);
const backUrl = urlParams.get('back') || '/';
document.getElementById('back-link').setAttribute('href', `https://xyy.miraheze.org/wiki/${decodeURIComponent(backUrl)}`);

const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '🌙' : '🌞';
}

if (storedTheme) {
    applyTheme(storedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});
