// Register ScrollTriger
gsap.registerPlugin(ScrollTrigger)

// Home Left Section Timeline
let homeLeft = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-left-section',
        start: 'center bottom'
    }
})
// Home Right Section Timeline
let homeRight = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-right-section',
        start: 'center bottom'
    }
})


/*Home Section
 ==============================================================*/

// Image

homeRight.to('#home-image',{
    scale:1,
    rotate:-3
})
// Title
homeLeft.to('.home-title', {
    y: -50,
    delay:.7,
    opacity: 1,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
})

// Title Bar
homeLeft.from('#home-title-bar', {
    width:0,
    // clipPath: 'polygon(100% 100%, 0 100%, 0 0, 100% 0)',
    delay: .4

})
// Paragraph 
homeLeft.to('#home-paragaraph', {
    delay: .4,
    y:50,
    opacity: 1
})
// Button 
homeLeft.to('#home-btn-btn', {
    delay: .4,
    x:50,
    opacity: 1
})

// Btn Hr 
homeLeft.to('#btn-hr', {
    opacity: 1
})

