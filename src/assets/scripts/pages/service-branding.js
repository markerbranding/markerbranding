window.addEventListener("load", () => {

// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero__services .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__description", ease: "power4.out"});
});



gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {


// Accordion
$(function() {
	//BEGIN
	$(".accordion__title").on("click", function(e) {
		ScrollTrigger.refresh(),
		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
});




/*  Referrer  */
window.addEventListener("load", () => {
    const projectLinks = document.querySelectorAll("a.snippet");

    projectLinks.forEach((link) => {
        link.addEventListener("click", function () {
            sessionStorage.setItem("previousPage", window.location.pathname);
        });
    });
});



// Cursor follower
window.addEventListener("load", () => {
const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;
  
    const followerEl = document.querySelector(".cursor-follower");
    let isSectionActive = false;
  
    function hideFollower() {
      // Fuerza la opacidad 0 y scale 0 para asegurar que no se quede visible.
      gsap.set(followerEl, { opacity: 0, transform: "scale(0)" });
    }
  
    function onMouseMove(e) {
      // Si la sección no está en viewport, no movemos el cursor-follower
      if (!isSectionActive) return;
  
      const { target, x, y } = e;
      // Verifica si el target es un link dentro de .work__list
      const isTargetLink = target?.closest(".work__list a");
  
      gsap.to(followerEl, {
        x: x - 50,
        y: y - 70,
        duration: 1,
        ease: "power4",
        opacity: isTargetLink ? 1 : 0,
        transform: `scale(${isTargetLink ? 1 : 0})`,
      });
    }
  
    
    ScrollTrigger.create({
      trigger: ".column__1__work__list",
      start: "top 80%",
      end: "bottom 20%",

      // Cuando entras en la sección, activas el cursor
      onEnter: () => {
        isSectionActive = true;
      },
      // Cuando sales, lo desactivas y fuerzas ocultar
      onLeave: () => {
        isSectionActive = false;
        hideFollower();
      },
      // Si scrolleas de vuelta (desde abajo hacia arriba) y entras,
      onEnterBack: () => {
        isSectionActive = true;
      },
      // Si vas hacia arriba y sales de la sección,
      onLeaveBack: () => {
        isSectionActive = false;
        hideFollower();
      },
    });
  
    // Listeners de mouse
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", () => {
      // Animación de "aparición" inicial si quieres
      gsap.from(followerEl, { duration: 1, rotate: 0 });
    });
    document.addEventListener("mouseleave", () => {
      // Cuando el puntero sale de la ventana, ocultar
      gsap.to(followerEl, { duration: 0.5, opacity: 0, rotate: 0 });
    });
    document.addEventListener("mouseout", () => {
        // Cuando el puntero sale de la ventana, ocultar
        gsap.to(followerEl, { duration: 0.5, opacity: 0, rotate: 0 });
    });
});
    


gsap.to("#section__header", {
backgroundColor:"#edf1f9",
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

/*  steps  */
gsap.to(".step__art", {
scrollTrigger:{
    trigger:"#section__process > .column__2 > .col__right",
    /*endTrigger: "#site__footer",*/
    start: "top 15%",
    end: "bottom bottom",
    pin: ".step__art",
    pinSpacing: false,
}
});

/*  Draw In Outs  */
gsap.set(".step1a", { opacity: 1 });
gsap.set(".step1b", { opacity: 1 });
gsap.set(".step1c", { drawSVG: "100%" });
gsap.set(".step2a", { drawSVG: "0% 0%" });
gsap.set(".step2b", { opacity: 0 });
gsap.set(".step2c", { drawSVG: "0% 0%" });
gsap.set(".step2d", { drawSVG: "0% 0%" });
gsap.set(".step2e", { drawSVG: "0% 0%" });
gsap.set(".step3a", { opacity: 0 });
gsap.set(".step3b", { opacity: 0 });
gsap.set(".step3c", { drawSVG: "0% 0%" });
const globalStagger = 0.01;
const globalStagger2 = 0.002;

function step1In() {
    gsap.to(".step1a", { opacity: 1, stagger: globalStagger, duration:0.2 });
    gsap.to(".step1b", { opacity: 1, stagger: globalStagger, duration:0.2 });
    gsap.to(".step1c", { drawSVG: "100%", stagger: globalStagger2 });
}

function step1Out() {
    gsap.to(".step1a", { opacity: 0, stagger: globalStagger, duration:0.2 });
    gsap.to(".step1b", { opacity: 0, stagger: globalStagger, duration:0.2 });
    gsap.to(".step1c", { drawSVG: "0%", stagger: globalStagger2 });
}

function step2In() {
    gsap.to(".step2a", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step2b", { opacity: 1, stagger: globalStagger });
    gsap.to(".step2c", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step2d", { drawSVG: "100%", stagger: globalStagger2 });
    gsap.to(".step2e", { drawSVG: "100%", stagger: globalStagger2 });
}

function step2Out() {
    gsap.to(".step2a", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step2b", { opacity: 0, stagger: globalStagger });
    gsap.to(".step2c", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step2d", { drawSVG: "0%", stagger: globalStagger2 });
    gsap.to(".step2e", { drawSVG: "0%", stagger: globalStagger2 });
}

function step3In() {
    gsap.to(".step3a", { opacity: 1, stagger: globalStagger2 });
    gsap.to(".step3b", { opacity: 1, stagger: globalStagger });
    gsap.to(".step3c", { drawSVG: "100%", stagger: globalStagger });
}

function step3Out() {
    gsap.to(".step3a", { opacity: 0, stagger: globalStagger2 });
    gsap.to(".step3b", { opacity: 0, stagger: globalStagger });
    gsap.to(".step3c", { drawSVG: "0%", stagger: globalStagger });
}







// GSAP Responsivo:

let mm = gsap.matchMedia();
// Desktop
mm.add("(min-width: 1025px)", () => {

    /*  menu services  */
    gsap.to("#menu__services", {
    scrollTrigger:{
        trigger:".service__wrapper",
        endTrigger: "#site__footer",
        start: "105 50%",
        end: "bottom top",
        pin: "#menu__services",
        pinSpacing: false,
    }
    });

    ScrollTrigger.create({
        trigger:"#step__content__1",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onEnter: step1In,
        onEnterBack: step1In,
        onLeave: step1Out,
        onLeaveBack: step1In,
    });

    ScrollTrigger.create({
        trigger:"#step__content__2",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onEnter: step2In,
        onEnterBack: step2In,
        onLeave: step2Out,
        onLeaveBack: step2Out,
    });

    ScrollTrigger.create({
        trigger:"#step__content__3",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onEnter: step3In,
        onEnterBack: step3In,
        onLeave: step3Out,
        onLeaveBack: step3Out,
    });

    /*  why mobile */

    gsap.from("#why__a", {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger:{
            trigger:"#section__why > .column__2 > .col__left",
            /*endTrigger: "#site__footer",*/
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        }
    });

    gsap.from("#why__b", {
        x: 0,
        y: 0,
        opacity: 0.8,
        scrollTrigger:{
            trigger:"#section__why > .column__2 > .col__left",
            /*endTrigger: "#site__footer",*/
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        }
    });

    gsap.from("#why__c", {
        x: 0,
        y: 0,
        opacity: 0.8,
        scrollTrigger:{
            trigger:"#section__why > .column__2 > .col__left",
            /*endTrigger: "#site__footer",*/
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        }
    });

});







// Mobile
mm.add("(max-width: 1024px)", () => {

    let serviceHeight = gsap.getProperty(".service__wrapper", "height");

    /*  menu services  */
    gsap.to("#menu__services", {
        scrollTrigger:{
            trigger:".service__wrapper",
            endTrigger: "#site__footer",
            start: "105 50%",
            end: "bottom top",
            end: `${serviceHeight}px top`,
            pin: "#menu__services",
            pinSpacing: false,
        }
    });


    ScrollTrigger.batch("#section__process", {
    start: `${(document.querySelector(".process__step:nth-child(1)").offsetLeft)}px top`,
    end: `${(document.querySelector(".process__step:nth-child(3)").offsetLeft + (window.innerWidth*2) ) -80}px top`,
    onEnter: (batch) =>	gsap.to("#menu__services", { marginTop: "calc(-50% + 80px)", duration: 0.3 }),
    onEnterBack: (batch) =>	gsap.to("#menu__services", { marginTop: "calc(-50% + 80px)", duration: 0.3 }),
    onLeave: (batch) =>	gsap.to("#menu__services", { marginTop: "0%", duration: 0.3 }),
    onLeaveBack: (batch) =>	gsap.to("#menu__services", { marginTop: "0%", duration: 0.3 }),
    });

    

    console.log((document.querySelector(".process__step:nth-child(1)").offsetTop));

    // horizontal scroll
    const sections2 = gsap.utils.toArray(".process__step");
    let maxWidth = 0;
    sections2.forEach((section2) => {
    maxWidth += section2.offsetWidth;
    });

    gsap.to(sections2, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
        trigger: "#section__process > .column__2",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: "top 60",
        end: () => `+=${maxWidth}`,
        snap: {
            snapTo: 1 / (sections2.length - 1),
            inertia: true,
            duration: {min: 0.1, max: 0.2}
        },
    }
    });
    // cierre hscroll


    ScrollTrigger.create({
        trigger:"#step__content__1",
        //start: "top 50%",
        //end: "bottom 50%",
        start: `${(document.querySelector(".process__step:nth-child(1)").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".process__step:nth-child(1)").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        scrub: 1,
        onEnter: step1In,
        onEnterBack: step1In,
        onLeave: step1Out,
        onLeaveBack: step1In,
    });

    ScrollTrigger.create({
        trigger:"#step__content__2",
        //start: "top 50%",
        //end: "bottom 50%",
        start: `${(document.querySelector(".process__step:nth-child(2)").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".process__step:nth-child(2)").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        scrub: 1,
        onEnter: step2In,
        onEnterBack: step2In,
        onLeave: step2Out,
        onLeaveBack: step2Out,
    });

    ScrollTrigger.create({
        trigger:"#step__content__3",
        //start: "top 50%",
        //end: "bottom 50%",
        start: `${(document.querySelector(".process__step:nth-child(3)").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".process__step:nth-child(3)").offsetLeft + (window.innerWidth * 100 / 100) )}px top`,
        scrub: 1,
        onEnter: step3In,
        onEnterBack: step3In,
        onLeave: step3Out,
        onLeaveBack: step3Out,
    });
    

});





const visibleItems = document.querySelectorAll(".work__list li:not([style*='display: none'])");
gsap.set(".work__list li", {y:100, opacity:0 });
batchInstance = ScrollTrigger.batch(visibleItems, {
    start: "top 90%",
    end: "top 80%",
    onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
    onLeave: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.2, y:100 }),
});

// Actualizar posiciones de ScrollTrigger
ScrollTrigger.refresh();


let menuServices = jQuery('#menu__services > li > a');
menuServices[0].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#section__description", offsetY: 60 } });
});
menuServices[1].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#section__process", offsetY: 60 } });
});
menuServices[2].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#section__why", offsetY: 60 } });
});
menuServices[3].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#section__work__list", offsetY: 60 } });
});
menuServices[4].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#section__faq", offsetY: 60 } });
});
menuServices[5].addEventListener("click", (e) => {
gsap.to(window, { duration: 0.5, scrollTo: { y: "#footer__contacto", offsetY: 60 } });
});


let menuServicesSpan = jQuery('#menu__services > li > a > span');
let menuServicesUnderline = jQuery('#menu__services > li > a > .underline__services');
gsap.set(menuServicesUnderline, { scaleX: "30%" });


ScrollTrigger.create({
    trigger:"#section__description",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[0], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[0], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[0], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[0], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#section__description",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[0], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[0], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[0], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[0], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

ScrollTrigger.create({
    trigger:"#section__process",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[1], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[1], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[1], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[1], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#section__process",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[1], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[1], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[1], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[1], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

ScrollTrigger.create({
    trigger:"#section__why",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[2], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[2], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[2], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[2], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#section__why",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[2], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[2], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[2], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[2], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

ScrollTrigger.create({
    trigger:"#section__work__list",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[3], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[3], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[3], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[3], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#section__work__list",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[3], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[3], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[3], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[3], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

ScrollTrigger.create({
    trigger:"#section__faq",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[4], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[4], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[4], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[4], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#section__faq",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[4], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[4], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[4], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[4], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

ScrollTrigger.create({
    trigger:"#footer__contacto",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[5], { opacity: 1, duration:0.05 }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[5], { opacity: 1, duration:0.05 }),
    onLeave: () =>	gsap.to(menuServicesSpan[5], { opacity: 0, duration:0.05 }),
    onLeaveBack: () => gsap.to(menuServicesSpan[5], { opacity: 0, duration:0.05 }),
});
ScrollTrigger.create({
    trigger:"#footer__contacto",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[5], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[5], { scaleX: "100%", height: 3, backgroundColor:"#c62e26", duration:0.3 }),
    onLeave: () =>	gsap.to(menuServicesUnderline[5], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[5], { scaleX: "30%", height: 1, backgroundColor:"#111c4e", duration:0.3 }),
});

/*  Change color service__menu hover dark color  */
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "70 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[0], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[0], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[0], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[0], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "70 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[0], { backgroundColor:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[0], { backgroundColor:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[0], { backgroundColor:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[0], { backgroundColor:"#111c4e" }),
});

ScrollTrigger.create({
    trigger:".dark__bg",
    start: "35 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[1], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[1], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[1], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[1], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "35 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[1], { backgroundColor:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[1], { backgroundColor:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[1], { backgroundColor:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[1], { backgroundColor:"#c62e26" }),
});

ScrollTrigger.create({
    trigger:".dark__bg",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[2], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[2], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[2], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[2], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[2], { backgroundColor:"#c62e26" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[2], { backgroundColor:"#c62e26" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[2], { backgroundColor:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[2], { backgroundColor:"#111c4e" }),
});

ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-35 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[3], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[3], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[3], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[3], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-35 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[3], { backgroundColor:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[3], { backgroundColor:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[3], { backgroundColor:"#c62e26" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[3], { backgroundColor:"#111c4e" }),
});

ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-70 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[4], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[4], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[4], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[4], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-70 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[4], { backgroundColor:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[4], { backgroundColor:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[4], { backgroundColor:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[4], { backgroundColor:"#111c4e" }),
});

ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-105 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesSpan[5], { color:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesSpan[5], { color:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesSpan[5], { color:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesSpan[5], { color:"#111c4e" }),
});
ScrollTrigger.create({
    trigger:".dark__bg",
    start: "-105 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(menuServicesUnderline[5], { backgroundColor:"#e0e5ed" }),
    onEnterBack: () =>	gsap.to(menuServicesUnderline[5], { backgroundColor:"#e0e5ed" }),
    onLeave: () =>	gsap.to(menuServicesUnderline[5], { backgroundColor:"#111c4e" }),
    onLeaveBack: () => gsap.to(menuServicesUnderline[5], { backgroundColor:"#111c4e" }),
});

/*	Frase	*/
var tl2 = gsap.timeline(),
mySplitText = new SplitText("#frase", { type: "lines,words,chars" }),
chars = mySplitText.chars;

gsap.set("#frase", { perspective: 400 });
tl2.from(chars, {
duration: 1.8,
transformOrigin: "0% 50% -50",
x: 0,
color: "#35394c",
stagger: 1.5,
ease: "power2.out",
scrollTrigger: {
trigger: '#section__why',
start: 'top 55%',
end: '30% 35%',
scrub: true,
}
});

tl2.from("#frase > div > div", {
y: 100,
scrollTrigger: {
    trigger: "#section__why",
    start: 'top 60%',
    end: '10% 50%',
    scrub: true,
    ease: "power1.inOut",
}
})








// Hero:

gsap.set(".container img", {
    width: "100%",
    xPercent: -50,
});

const loop = verticalLoop(".container img", {
repeat: -1,
center: true,
speed: 0.4,
});


gsap.set(".container2 img", {
    width: "100%",
    xPercent: -50,
});

const loop2 = verticalLoop(".container2 img", {
    repeat: -1,
    center: true,
    reversed: true,
    speed: 0.4,
});


gsap.set(".container3 img", {
    width: "100%",
    xPercent: -50,
});

const loop3 = verticalLoop(".container3 img", {
    repeat: -1,
    center: true,
    speed: 0.4,
});




// Loop Gsap Helper:
function verticalLoop(items, config) {
items = gsap.utils.toArray(items);
config = config || {};
let onChange = config.onChange,
    lastIndex = 0,
    tl = gsap.timeline({
    repeat: config.repeat,
    onUpdate:
        onChange &&
        function () {
        let i = tl.closestIndex();
        if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
        }
        },
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startY = items[0].offsetTop,
    times = [],
    heights = [],
    spaceBefore = [],
    yPercents = [],
    curIndex = 0,
    center = config.center,
    clone = (obj) => {
    let result = {},
        p;
    for (p in obj) {
        result[p] = obj[p];
    }
    return result;
    },
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    timeOffset = 0,
    container =
    center === true
        ? items[0].parentNode
        : gsap.utils.toArray(center)[0] || items[0].parentNode,
    totalHeight,
    getTotalHeight = () =>
    items[length - 1].offsetTop +
    (yPercents[length - 1] / 100) * heights[length - 1] -
    startY +
    spaceBefore[0] +
    items[length - 1].offsetHeight *
        gsap.getProperty(items[length - 1], "scaleY") +
    (parseFloat(config.paddingBottom) || 0),
    populateHeights = () => {
    let b1 = container.getBoundingClientRect(),
        b2;
    items.forEach((el, i) => {
        heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
        yPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "y", "px")) / heights[i]) * 100 +
            gsap.getProperty(el, "yPercent")
        );
        b2 = el.getBoundingClientRect();
        spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
        b1 = b2;
    });
    gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        yPercent: (i) => yPercents[i]
    });
    totalHeight = getTotalHeight();
    },
    timeWrap,
    populateOffsets = () => {
    timeOffset = center
        ? (tl.duration() * (container.offsetWidth / 2)) / totalHeight
        : 0;
    center &&
        times.forEach((t, i) => {
        times[i] = timeWrap(
            tl.labels["label" + i] +
            (tl.duration() * heights[i]) / 2 / totalHeight -
            timeOffset
        );
        });
    },
    getClosest = (values, value, wrap) => {
    let i = values.length,
        closest = 1e10,
        index = 0,
        d;
    while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) {
        d = wrap - d;
        }
        if (d < closest) {
        closest = d;
        index = i;
        }
    }
    return index;
    },
    populateTimeline = () => {
    let i, item, curY, distanceToStart, distanceToLoop;
    tl.clear();
    for (i = 0; i < length; i++) {
        item = items[i];
        curY = (yPercents[i] / 100) * heights[i];
        distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
        distanceToLoop =
        distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
        tl.to(
        item,
        {
            yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond
        },
        0
        )
        .fromTo(
            item,
            {
            yPercent: snap(
                ((curY - distanceToLoop + totalHeight) / heights[i]) * 100
            )
            },
            {
            yPercent: yPercents[i],
            duration:
                (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond,
            immediateRender: false
            },
            distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    timeWrap = gsap.utils.wrap(0, tl.duration());
    },
    refresh = (deep) => {
    let progress = tl.progress();
    tl.progress(0, true);
    populateHeights();
    deep && populateTimeline();
    populateOffsets();
    deep && tl.draggable
        ? tl.time(times[curIndex], true)
        : tl.progress(progress, true);
    },
    proxy;
gsap.set(items, { y: 0 });
populateHeights();
populateTimeline();
populateOffsets();
window.addEventListener("resize", () => refresh(true));
function toIndex(index, vars) {
    vars = clone(vars);
    Math.abs(index - curIndex) > length / 2 &&
    (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
    time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
    // if we're wrapping the timeline's playhead, make the proper adjustments
    time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    if (vars.revolutions) {
    time += tl.duration() * Math.round(vars.revolutions);
    delete vars.revolutions;
    }
    if (time < 0 || time > tl.duration()) {
    vars.modifiers = { time: timeWrap };
    }
    curIndex = newIndex;
    vars.overwrite = true;
    gsap.killTweensOf(proxy);
    return tl.tweenTo(time, vars);
}
tl.elements = items;
tl.next = (vars) => toIndex(curIndex + 1, vars);
tl.previous = (vars) => toIndex(curIndex - 1, vars);
tl.current = () => curIndex;
tl.toIndex = (index, vars) => toIndex(index, vars);
tl.closestIndex = (setCurrent) => {
    let index = getClosest(times, tl.time(), tl.duration());
    setCurrent && (curIndex = index);
    return index;
};
tl.times = times;
tl.progress(1, true).progress(0, true); // pre-render for performance
if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
}
if (config.draggable && typeof Draggable === "function") {
    proxy = document.createElement("div");
    let wrap = gsap.utils.wrap(0, 1),
    ratio,
    startProgress,
    draggable,
    dragSnap,
    align = () =>
        tl.progress(
        wrap(startProgress + (draggable.startY - draggable.y) * ratio)
        ),
    syncIndex = () => tl.closestIndex(true);
    typeof InertiaPlugin === "undefined" &&
    console.warn(
        "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
    );
    draggable = Draggable.create(proxy, {
    trigger: items[0].parentNode,
    type: "y",
    onPressInit() {
        gsap.killTweensOf(tl);
        startProgress = tl.progress();
        refresh();
        ratio = 1 / totalHeight;
        gsap.set(proxy, { y: startProgress / -ratio });
    },
    onDrag: align,
    onThrowUpdate: align,
    inertia: true,
    snap: (value) => {
        let time = -(value * ratio) * tl.duration(),
        wrappedTime = timeWrap(time),
        snapTime = times[getClosest(times, wrappedTime, tl.duration())],
        dif = snapTime - wrappedTime;
        Math.abs(dif) > tl.duration() / 2 &&
        (dif += dif < 0 ? tl.duration() : -tl.duration());
        return (time + dif) / tl.duration() / -ratio;
    },
    onRelease: syncIndex,
    onThrowComplete: syncIndex
    })[0];
    tl.draggable = draggable;
}
tl.closestIndex(true);
onChange && onChange(items[curIndex], curIndex);
return tl;
} // End Helper


}

});