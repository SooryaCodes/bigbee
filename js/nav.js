/* Hamburger Menu Animation & Nav Toggle
===========================================*/

// //Getting Menu
var menu = document.querySelector('.menu')

// //Getting Nav
var nav = document.querySelector('.nav-container')

//Nav Links
var navLinks = document.querySelectorAll('.nav-items')

// //menuNav Toggle Function
const menuNavToggle = () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
    window.addEventListener('keydown', escKeyNavClose)
}

//Getting Cursor
var cursor = document.querySelector('.cursor')


//Function navClose
const navClose = () => {
    //  Removing Nav Active Class
    nav.classList.remove('active')
    //  Removing Menu Active Class
    menu.classList.remove('active')
}

//Function escKeyNavClose
const escKeyNavClose = (e) => { if (e.key === 'Escape') { navClose() } }

// //Adding Click Listener
menu.addEventListener('click',/* Menu & Nav Active Class Toggle Function*/  menuNavToggle);

//Nav Links Click Nav Close
navLinks.forEach(element => /*Click Listener A Links*/element.addEventListener('click', navClose));


//Function menuCursorAnimation
const menuCursorAnimation = () => { cursor.classList.add('active'); menu.classList.add('menuActive'); }

//Function remMenuCursorAnimation
const remMenuCursorAnimation = () => { cursor.classList.remove('active'); menu.classList.remove('menuActive'); }


//Menu Animation Cursor
menu.addEventListener('mouseover', menuCursorAnimation)
menu.addEventListener('mouseleave', remMenuCursorAnimation)
// /* End
// ================================*/
