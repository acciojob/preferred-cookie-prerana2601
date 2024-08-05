//your JS code here. If required.
// Helper function to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Helper function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

// Apply preferences from cookies
function applyPreferences() {
    const fontsize = getCookie('fontsize');
    const fontcolor = getCookie('fontcolor');

    if (fontsize) {
        document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
        document.getElementById('fontsize').value = fontsize;
    }

    if (fontcolor) {
        document.documentElement.style.setProperty('--fontcolor', fontcolor);
        document.getElementById('fontcolor').value = fontcolor;
    }
}

// Save preferences to cookies
function savePreferences(event) {
    event.preventDefault();
    const fontsize = document.getElementById('fontsize').value;
    const fontcolor = document.getElementById('fontcolor').value;

    setCookie('fontsize', fontsize, 7); // Save for 7 days
    setCookie('fontcolor', fontcolor, 7); // Save for 7 days

    // Apply preferences immediately
    applyPreferences();
}

// Initialize preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    applyPreferences();
    document.getElementById('preferences-form').addEventListener('submit', savePreferences);
});
