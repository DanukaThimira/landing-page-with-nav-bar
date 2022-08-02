const menu = document.getElementById('menu');
const close = document.getElementById('close');
const sidebar = document.getElementById('sidebar')

menu.onclick = () => {
    menu.classList.toggle('hidden');
    close.classList.toggle('hidden');
    sidebar.classList.toggle('hidden');
}



close.onclick = () => {
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    sidebar.classList.toggle('hidden');
}

const menu1 = document.getElementById('menu-1');
const menu1ArrowDown = document.getElementById('menu-1-arrow-down');
const menu1ArrowUp = document.getElementById('menu-1-arrow-up');

menu1ArrowDown.onclick = () => {
    menu1.classList.toggle('hidden')
    menu1ArrowDown.classList.toggle('hidden');
    menu1ArrowUp.classList.toggle('hidden');
}

menu1ArrowUp.onclick = () => {
    menu1.classList.toggle('hidden')
    menu1ArrowDown.classList.toggle('hidden');
    menu1ArrowUp.classList.toggle('hidden');
}

const menu2 = document.getElementById('menu-2');
const menu2ArrowDown = document.getElementById('menu-2-arrow-down');
const menu2ArrowUp = document.getElementById('menu-2-arrow-up');

menu2ArrowDown.onclick = () => {
    menu2.classList.toggle('hidden')
    menu2ArrowDown.classList.toggle('hidden');
    menu2ArrowUp.classList.toggle('hidden');
}

menu2ArrowUp.onclick = () => {
    menu2.classList.toggle('hidden')
    menu2ArrowDown.classList.toggle('hidden');
    menu2ArrowUp.classList.toggle('hidden');
}

const menu3 = document.getElementById('menu-3');
const menu3ArrowDown = document.getElementById('menu-3-arrow-down');
const menu3ArrowUp = document.getElementById('menu-3-arrow-up');

menu3ArrowDown.onclick = () => {
    menu3.classList.toggle('hidden')
    menu3ArrowDown.classList.toggle('hidden');
    menu3ArrowUp.classList.toggle('hidden');
}

menu3ArrowUp.onclick = () => {
    menu3.classList.toggle('hidden')
    menu3ArrowDown.classList.toggle('hidden');
    menu3ArrowUp.classList.toggle('hidden');
}

const menu4 = document.getElementById('menu-4');
const menu4ArrowDown = document.getElementById('menu-4-arrow-down');
const menu4ArrowUp = document.getElementById('menu-4-arrow-up');

menu4ArrowDown.onclick = () => {
    menu4.classList.toggle('hidden')
    menu4ArrowDown.classList.toggle('hidden');
    menu4ArrowUp.classList.toggle('hidden');
}

menu4ArrowUp.onclick = () => {
    menu4.classList.toggle('hidden')
    menu4ArrowDown.classList.toggle('hidden');
    menu4ArrowUp.classList.toggle('hidden');
}