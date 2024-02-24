let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

function setThemeToggleText(content) {
    document.querySelectorAll(".theme-toggle").forEach(function(toggle) {
        toggle.innerHTML = content;
    });
}

if (systemInitiatedDark.matches) {
    setThemeToggleText("Light Mode");
} else {
    setThemeToggleText("Dark Mode");
}

function prefersColorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        setThemeToggleText("Light Mode");
        sessionStorage.setItem('theme', '');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        setThemeToggleText("Dark Mode");
        sessionStorage.setItem('theme', '');
    }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
    let theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        setThemeToggleText("Dark Mode");
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        setThemeToggleText("Light Mode");
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        setThemeToggleText("Dark Mode");
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        setThemeToggleText("Light Mode");
    }
}

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    setThemeToggleText("Light Mode");
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    setThemeToggleText("Dark Mode");
}
