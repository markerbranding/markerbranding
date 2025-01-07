gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {



gsap.to("#section__header", {
    backgroundColor:"#edf1f9",//#e0e5ed
    scrollTrigger: {
    trigger: ".column__hero__2",
    start: "top top",
    scrub: true,
    end: "50% top",
    }
});

gsap.to("#section__header", {
    scrollTrigger:{
    trigger:"#section__header",
    start: "top top",
    end: "+=500000000000",
    pin: "#section__header",
    pinSpacing: false,
    }
})

ScrollTrigger.batch(".work__list li", {
    trigger: ".work__list",
    start: "top, 70%",
    end: "top, 60%",
    onEnter: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onEnterBack: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onLeave: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onLeaveBack: (batch) =>	gsap.to(batch, { opacity: 0, y:50, stagger: 0.2 }),
});


}