/* Hamburger Menu Animation & Nav Toggle
===========================================*/

// //Getting Menu
var menu = document.querySelector('.menu')

// //Getting Nav
var nav = document.querySelector('.nav-container')

//Nav Links
var navLinks=document.querySelectorAll('.nav-items')

// //menuNav Toggle Function
const menuNavToggle = () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}

//Function navClose
const navClose=()=>{
//  Removing Nav Active Class
nav.classList.remove('active')
//  Removing Menu Active Class
menu.classList.remove('active')
}

// //Adding Click Listener
menu.addEventListener('click',/* Menu & Nav Active Class Toggle Function*/  menuNavToggle);

//Nav Links Click Nav Close
navLinks.forEach(element => /*Click Listener A Links*/element.addEventListener('click',navClose));

// /* End 
// ================================*/

/* Custom Mouse Cursor
================================================ */
//Getting Cursor
var cursor = document.querySelector('.cursor')

//Getting Buttons
var buttons = document.querySelectorAll('button')

//Getting Yellow Containers
var yellowContainers = document.querySelectorAll('.yellow-container')

//Getting anchor tags
var aLinks = document.querySelectorAll('a')

// Function triggerCursor
const triggerCursor = (e) =>/*Styling Cursor */ cursor.setAttribute('style', `top:${e.pageY}px;left:${e.pageX}px`)

//Function menuCursorAnimation
const menuCursorAnimation = () => {cursor.classList.add('active'); menu.classList.add('menuActive');}

//Function remMenuCursorAnimation
const remMenuCursorAnimation = () => {cursor.classList.remove('active');menu.classList.remove('menuActive');}

//Function btnCursorAnimation
const btnCursorAnimation = () => cursor.classList.add('active')

//Function remBtnCursorAnimation
const remBtnCursorAnimation = () => cursor.classList.remove('active')

// Function aCursorAnimation
const aCursorAnimation = () => cursor.classList.add('active')

//Function remACursorAnimation
const remACursorAnimation = () => cursor.classList.remove('active')

//Function cursorOnYellow
const cursorOnYellow = () => cursor.classList.add('cursor-yellow')

//Function remCursorOnYellow
const remCursorOnYellow = () => cursor.classList.remove('cursor-yellow')

//Mouse Movie Listener To Cursor
window.addEventListener('mousemove', triggerCursor)

//Menu Animation Cursor
menu.addEventListener('mouseover',menuCursorAnimation)
menu.addEventListener('mouseleave',remMenuCursorAnimation)
//Buttons Animation Cursor
buttons.forEach(element => {
    element.addEventListener('mouseover', btnCursorAnimation);
    element.addEventListener('mouseleave', remBtnCursorAnimation);
})

//Anchot Tag Animation Cursor
aLinks.forEach(element => {
    element.addEventListener('mouseover', aCursorAnimation);
    element.addEventListener('mouseleave', remACursorAnimation);
})


//Yellow Container MouseMove 
yellowContainers.forEach((yContainer) => {
    yContainer.addEventListener('mouseenter', cursorOnYellow)
    yContainer.addEventListener('mouseleave', remCursorOnYellow)
})

/* End
================================================ */

