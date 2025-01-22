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


/*  Lottie  */

    setTimeout(function() {
        var animation = lottie.loadAnimation({
            container: document.getElementById('lottie-container'), // ID del contenedor
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/assets/servicios/marketing/pie_chart.json' // Ruta del archivo JSON de la animación
        });
    }, 2000);

    setTimeout(function() {
        var animation = lottie.loadAnimation({
            container: document.getElementById('lottie-container2'), // ID del contenedor
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/assets/servicios/marketing/bar_chart.json' // Ruta del archivo JSON de la animación
        });
    }, 3000);

    setTimeout(function() {
        var animation = lottie.loadAnimation({
            container: document.getElementById('lottie-container3'), // ID del contenedor
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/assets/servicios/marketing/curve_chart.json' // Ruta del archivo JSON de la animación
        });
    }, 4000);




// Cursor follower
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

gsap.set(".step2a", { opacity: 0 });
gsap.set(".step2b", { drawSVG: "0% 0%" });
gsap.set(".step2c", { drawSVG: "0% 0%" });
gsap.set(".step2d", { drawSVG: "0% 0%" });

gsap.set(".step3a", { opacity: 0 });
gsap.set(".step3b", { drawSVG: "0% 0%" });
gsap.set(".step3c", { opacity: 0 });
gsap.set(".step3d", { drawSVG: "0% 0%" });
gsap.set(".step3e", { opacity: 0 });

gsap.set(".step4a", { opacity: 0 });
gsap.set(".step4b", { drawSVG: "0% 0%" });
gsap.set(".step4c", { opacity: 0 });
gsap.set(".step4d", { drawSVG: "0% 0%" });

const globalStagger = 0.01;
const globalStagger2 = 0.002;

function step1In() {
    gsap.to(".step1a", { opacity: 1, stagger: globalStagger });
    gsap.to(".step1b", { opacity: 1, stagger: globalStagger });
    gsap.to(".step1c", { drawSVG: "100%", stagger: globalStagger2, duration:0.2 });
}

function step1Out() {
    gsap.to(".step1a", { opacity: 0, stagger: globalStagger });
    gsap.to(".step1b", { opacity: 0, stagger: globalStagger });
    gsap.to(".step1c", { drawSVG: "0%", stagger: globalStagger2, duration:0.2 });
}

function step2In() {
    gsap.to(".step2a", { opacity: 1, stagger: globalStagger });
    gsap.to(".step2b", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step2c", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step2d", { drawSVG: "100%", stagger: globalStagger2 });
}

function step2Out() {
    gsap.to(".step2a", { opacity: 0, stagger: globalStagger });
    gsap.to(".step2b", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step2c", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step2d", { drawSVG: "0%", stagger: globalStagger2 });
}

function step3In() {
    gsap.to(".step3a", { opacity: 1, stagger: globalStagger2 });
    gsap.to(".step3b", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step3c", { opacity: 1, stagger: globalStagger });
    gsap.to(".step3d", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step3e", { opacity: 1, stagger: globalStagger2 });
}

function step3Out() {
    gsap.to(".step3a", { opacity: 0, stagger: globalStagger2 });
    gsap.to(".step3b", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step3c", { opacity: 0, stagger: globalStagger });
    gsap.to(".step3d", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step3e", { opacity: 0, stagger: globalStagger2 });
}

function step4In() {
    gsap.to(".step4a", { opacity: 1, stagger: globalStagger2 });
    gsap.to(".step4b", { drawSVG: "100%", stagger: globalStagger });
    gsap.to(".step4c", { opacity: 1, stagger: globalStagger });
    gsap.to(".step4d", { drawSVG: "100%", stagger: globalStagger });
}

function step4Out() {
    gsap.to(".step4a", { opacity: 0, stagger: globalStagger2 });
    gsap.to(".step4b", { drawSVG: "0%", stagger: globalStagger });
    gsap.to(".step4c", { opacity: 0, stagger: globalStagger });
    gsap.to(".step4d", { drawSVG: "0%", stagger: globalStagger });
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

    ScrollTrigger.create({
        trigger:"#step__content__4",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onEnter: step4In,
        onEnterBack: step4In,
        onLeave: step4In,
        onLeaveBack: step4Out,
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

    /*  menu services  */
    ScrollTrigger.batch("#section__process", {
        start: `${(document.querySelector(".process__step:nth-child(1)").offsetLeft)}px top`,
        end: `${(document.querySelector(".process__step:nth-child(4)").offsetLeft + (window.innerWidth*2) ) -80}px top`,
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
        end: `${(document.querySelector(".process__step:nth-child(3)").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        scrub: 1,
        onEnter: step3In,
        onEnterBack: step3In,
        onLeave: step3Out,
        onLeaveBack: step3Out,
    });

    ScrollTrigger.create({
        trigger:"#step__content__4",
        //start: "top 50%",
        //end: "bottom 50%",
        start: `${(document.querySelector(".process__step:nth-child(4)").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".process__step:nth-child(4)").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        scrub: 1,
        onEnter: step4In,
        onEnterBack: step4In,
        onLeave: step4In,
        onLeaveBack: step4Out,
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


}

});