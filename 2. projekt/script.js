const menuIcon = document.querySelector(".menu-icon");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuList = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
