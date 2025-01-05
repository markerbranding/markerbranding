gsap.to("#section__header", {
    backgroundColor:"#edf1f9",//#e0e5ed
    scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: true,
        end: "50% top",
    }
})

gsap.to("#section__header", {
scrollTrigger:{
    trigger:"#section__header",
    start: "top top",
    end: "+=500000000000",
    pin: "#section__header",
    pinSpacing: false,
}
});