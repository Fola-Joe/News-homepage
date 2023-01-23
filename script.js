const menuBtn = document.querySelector('#menu-btn');
const sideMenu = document.querySelector('#side-menu');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', function () {
  sideMenu.style.width = "16rem";
})
closeBtn.addEventListener('click', function () {
  sideMenu.style.width = "0";
})