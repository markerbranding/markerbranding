function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
    gsap.to(".transition", { height: "100%", ease: "power4.out", duration: 0.4 });
    gsap.to(".inner__transition", { delay: 0.4, height: "100%", ease: "power4.out", duration: 0.5 });
    gsap.to(data.current.container, { opacity: 0 });
}
  
// Check if it's a touch device
const isTouchDevice = 'ontouchstart' in window;
const createCursorFollower = () => {
const $el = document.querySelector('.cursor-follower');
window.addEventListener('mouseover', (e) => {
    gsap.from($el, {
    duration: 1,
    rotate: 0,
    });
});
window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;
    const isTargetLinkOrBtn = target?.closest('.previous__project') || target?.closest('.next__project');
    gsap.to($el, {
    x: x - 50,
    y: y - 70,
    duration: 1,
    ease: 'power4',
    opacity: isTargetLinkOrBtn ? 1 : 0,
    transform: `scale(${isTargetLinkOrBtn ? 1 : 0})`,
    });
});
// Hidding the cursor element when the mouse cursor
// is moved out of the page
document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
    duration: 0.5,
    opacity: 0,
    rotate: 0,
    });
});
};
// Only invoke the function if isn't a touch device
if (!isTouchDevice) {
createCursorFollower();
}


gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {


gsap.to("#section__header", {
scrollTrigger:{
    trigger:"#section__header",
    start: "top top",
    end: "+=500000000000",
    pin: "#section__header",
    pinSpacing: false,
}
})

}