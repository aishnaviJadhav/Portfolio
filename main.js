// Toggle mobile menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Role animation
const roles = ["Frontend Developer", "UI/UX Developer"];
let roleIndex = 0;
const roleElement = document.querySelector(".animated-role");

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.textContent = roles[roleIndex];
}, 3000);
