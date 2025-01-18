let menu = document.querySelector(".menu");

function showMenu() {
  menu.style.display = "block";
}
function hideMenu() {
  menu.style.display = "none";
}

function openPop(event) {
  event.target.parentElement.children[3].style.display="block";
}

function closePop(event) {
  event.target.parentElement.style.display="none";
}