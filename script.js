const farmersBtn = document.querySelector("#farmers-btn");
const usersBtn = document.querySelector("#user-btn");
const btnContainer = document.querySelector(".button-container");
const farmersContainer = document.querySelectorAll(".farmers-container");
const usersContainer = document.querySelectorAll(".users-container");
const userSVG = document.querySelector("#user-svg");
const shape = document.querySelector(".shape-fill");
const userNav = document.querySelector(".user-nav");
const farmerNav = document.querySelector(".farmer-nav");

const first = farmersContainer.item(0);
const second = usersContainer.item(0);

btnContainer.addEventListener("click", (e) => {
  if (e.target === usersBtn) {
    farmersBtn.classList.toggle("hide-element");
    first.classList.toggle("hide-element");
    farmerNav.classList.toggle("hidden-element");
    shape.classList.toggle("shape-filled");
  } else if (e.target === farmersBtn) {
    usersBtn.classList.toggle("hide-element");
    second.classList.toggle("hide-element");
    userSVG.classList.toggle("hide-element");
    userNav.classList.toggle("hidden-element");
  }
});
