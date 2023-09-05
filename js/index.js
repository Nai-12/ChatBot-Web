const navbar = document.querySelector("nav ul");
const barList = document.querySelector(".bar input");

barList.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
