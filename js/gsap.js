// Register ScrollTriger
gsap.registerPlugin(ScrollTrigger)

// New Timeline
let homeTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-wrapper',
        start: 'center bottom'
    }
})


/*Home Section
 ==============================================================*/

//Home Image

homeTl.to('#home-image', {
    rotate: -4,
    scale: 1,
    delay: .4
})

//  Title

homeTl.to('.home-title', {
    opacity: 1,
    y: -50
})


//  Title Bar

homeTl.to('#home-title-bar', {
    opacity: 1,
    x: 100,
    delay:1
})


//  Home Paragraph

homeTl.to('#home-paragaraph', {
    opacity: 1,
    y: -50,
    delay:.5,
})


