const profileToggle = document.getElementById('profileToggle');
const profileDropdown = document.getElementById('profileDropdown');
const profilePic = document.getElementById('profilePic');

const avatars = {
  default: 'default.png',
  male: 'male.png',
  female: 'female.png'
};

// Restore avatar on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedGender = localStorage.getItem('userAvatarGender');
  if (savedGender && avatars[savedGender]) {
    profilePic.src = avatars[savedGender];
  } else {
    profilePic.src = avatars.default;
  }
});

// Toggle dropdown menu
profileToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle('active');
});

// Close menu when clicking anywhere outside
document.addEventListener('click', () => {
  profileDropdown.classList.remove('active');
});

// Save selection and update image
function selectAvatar(gender) {
  if (avatars[gender]) {
    profilePic.src = avatars[gender];
    localStorage.setItem('userAvatarGender', gender);
  }
  profileDropdown.classList.remove('active');
}