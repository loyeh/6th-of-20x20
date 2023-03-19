const left_nav = document.getElementById("left_nav");
const main = document.getElementById("main_page");
const modalMain = document.getElementById("modal");
const span = document.getElementsByTagName("span");
const buttons = document.getElementsByTagName("button");
const modal_main = document.querySelector(".modal_main");
console.log(span[0]);

function menue() {
  main.classList.toggle("active");
}
function modal(event) {
  if (event.target == span[0] || event.target == modalMain || event.target == buttons[0]) {
    modalMain.classList.toggle("active");
    modal_main.classList.toggle("active");
  }
}
modalMain.addEventListener("click", modal);
span[0].addEventListener("click", modal);
