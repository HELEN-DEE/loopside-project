const menu = document.getElementById('menu')
const headerMenu = document.getElementById('headerMenu')
const header = document.getElementById('header')

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    headerMenu.classList.toggle('open-menu')
    header.classList.toggle('header-black')
})