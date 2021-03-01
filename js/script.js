/* Hamburger Menu Animation & Nav Toggle
===========================================*/

//Getting Menu
var menu = document.querySelector('.menu')

//Getting Nav
var nav = document.querySelector('.nav')

//Getting Yellow Containers
var yellowContainers = document.querySelectorAll('.yellow-container')

//Getting Stripes-Wrapper
var stripesWrapper = document.querySelector('.stripes-wrapper')

//menuNav Toggle Function
const menuNavToggle = () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
    stripesWrapper.classList.toggle('active')
}

//Adding Click Listener
menu.addEventListener('click',/* Menu & Nav Active Class Toggle Function*/  menuNavToggle );

/* End 
================================*/

/* Custom Mouse Cursor
================================================ */
//Getting Cursor
var cursor = document.querySelector('.cursor')

//Getting Buttons
var buttons = document.querySelectorAll('button')

// Function triggerCursor
const triggerCursor = (e) =>/*Styling Cursor */ cursor.setAttribute('style', `top:${e.pageY}px;left:${e.pageX}px`)

//Function btnCursorAnimation
const btnCursorAnimation = () => console.log('Hey');

//Function remBtnCursorAnimation
const remBtnCursorAnimation = () => cursor.classList.remove('active')

//Mouse Movie Listener To Cursor
window.addEventListener('mousemove', triggerCursor)

//Buttons Animation Cursor
buttons.forEach(element => {
    console.log(element);
    element.addEventListener('mouseover', btnCursorAnimation);
    element.addEventListener('mouseleave', remBtnCursorAnimation);
})

//Function cursorOnYellow
const cursorOnYellow=()=>cursor.classList.add('cursor-yellow')

//Function remCursorOnYellow
const remCursorOnYellow=()=>cursor.classList.remove('cursor-yellow')

//Yellow Container MouseMove 
yellowContainers.forEach((yContainer)=>{
    yContainer.addEventListener('mouseenter',cursorOnYellow)
    yContainer.addEventListener('mouseleave',remCursorOnYellow)
})

/* End
================================================ */