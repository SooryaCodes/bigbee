

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

