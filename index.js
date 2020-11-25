const menu = document.querySelector('.menu-btn')
const menuList = document.querySelector('.menu')
menu.addEventListener('click', () => {
  menuList.classList.toggle('menu_closed')
})
