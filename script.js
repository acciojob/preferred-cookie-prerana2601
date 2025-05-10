function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function applyPreferencesFromCookies() {
  const savedSize = getCookie('fontsize');
  const savedColor = getCookie('fontcolor');

  if (savedSize) {
    document.documentElement.style.setProperty('--fontsize', savedSize + 'px');
    document.getElementById('fontsize').value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty('--fontcolor', savedColor);
    document.getElementById('fontcolor').value = savedColor;
  }
}

document.getElementById('fontForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const size = document.getElementById('fontsize').value;
  const color = document.getElementById('fontcolor').value;

  // Set cookies
  document.cookie = `fontsize=${size}; path=/; max-age=31536000`;
  document.cookie = `fontcolor=${color}; path=/; max-age=31536000`;

  // Apply changes immediately
  document.documentElement.style.setProperty('--fontsize', size + 'px');
  document.documentElement.style.setProperty('--fontcolor', color);
});
