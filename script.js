const menuBtn = document.querySelector('#menu-btn');
const navList = document.querySelector('#nav-list');
const sideMenu = document.querySelector('#side-menu');

function openNav() {
    sideMenu.style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sideMenu.style.width = "0";
  }