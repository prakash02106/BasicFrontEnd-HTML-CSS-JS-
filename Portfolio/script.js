// Toggle navbar
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", () => {
  togglebtn.classList.toggle("click");
  nav.classList.toggle("open");
});

// Typed.js
const typed = new Typed(".input", {
  strings: ["Java Developer", "Oracle", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});
