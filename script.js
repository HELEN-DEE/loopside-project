const menu = document.getElementById('menu')
const headerMenu = document.getElementById('headerMenu')
const header = document.getElementById('header')

let marginToggle = false;
let isExpanded = false;

menu.addEventListener('click', (event) => {
    event.stopPropagation()

    menu.classList.toggle('open')
    headerMenu.classList.toggle('open-menu')
    header.style.backgroundColor = header.style.backgroundColor === 'black' ? 'transparent' : 'black';

    marginToggle = !marginToggle;
    header.style.marginLeft = marginToggle ? '-1.3rem' : '0';
    header.style.marginRight = marginToggle ? '-1.3rem' : '0';

    isExpanded = !isExpanded;
    headerMenu.style.height = isExpanded ? '90vh' : 'auto';
    header.style.paddingLeft = header.style.paddingRight = isExpanded ? '20px' : '0';
    header.style.marginTop = isExpanded ? '-2rem' : '0'; 
    header.style.paddingTop = isExpanded ? '2rem' : '0'; 
})