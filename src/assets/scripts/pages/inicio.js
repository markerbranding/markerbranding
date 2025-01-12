window.addEventListener("load", () => {

// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__intro", ease: "power4.out"});
});



gsapSoloAnimations();



// GSAP:
function gsapSoloAnimations() {


    var splide = new Splide( '.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        arrows: true,
      });
    splide.mount();
  
    
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
        trigger: ".work__list",
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



    

//loadingDown();

var tl = gsap.timeline();

//window.onload = function(){

let hLogo = gsap.getProperty("#logoMarkerScale", "height");
let hForCanvas = gsap.getProperty(".right__etapa__3", "height");
let b1 = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(208,35,35,0) 100%)";
let b2 = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(35,208,35,0) 100%)";
gsap.set("#botella__hoja1", { opacity: 0 });
gsap.set("#botella__hoja2", { opacity: 0 });
mySplitP1 = new SplitText(".anim__hero__h2 span:nth-child(1)", { type: "chars" }),
p1chars = mySplitP1.chars;
mySplitP2 = new SplitText(".anim__hero__h2 span:nth-child(2)", { type: "chars" }),
p2chars = mySplitP2.chars;
mySplitP3 = new SplitText(".anim__hero__h2 span:nth-child(3)", { type: "chars" }),
p3chars = mySplitP3.chars;
mySplitP4 = new SplitText(".anim__hero__h2 span:nth-child(4)", { type: "chars" }),
p4chars = mySplitP4.chars;
mySplitP5 = new SplitText(".anim__hero__h2 span:nth-child(5)", { type: "chars" }),
p5chars = mySplitP5.chars;

gsap.set(".anim__hero__h2 span:nth-child(1) > div", { opacity: 1, display:"unset" });
gsap.set(".anim__hero__h2 span:nth-child(2) > div", { opacity: 0 });
gsap.set(".anim__hero__h2 span:nth-child(3) > div", { opacity: 0 });
gsap.set(".anim__hero__h2 span:nth-child(4) > div", { opacity: 0 });
gsap.set(".anim__hero__h2 span:nth-child(5) > div", { opacity: 0 });

p1start();

function p1start() {
    var tl3 = gsap.timeline();
    tl3.to(p1chars, {duration: 0.05, opacity: 1, stagger: 0.05})
    .to(p1chars, {duration: 0.05, opacity: 0, stagger: -0.05, delay: 1.5})
    
    .to(p2chars, {duration: 0.05, opacity: 1, stagger: 0.05})
    .to(p2chars, {duration: 0.05, opacity: 0, stagger: -0.05, delay: 1.5})

    .to(p3chars, {duration: 0.05, opacity: 1, stagger: 0.05})
    .to(p3chars, {duration: 0.05, opacity: 0, stagger: -0.05, delay: 1.5})

    .to(p4chars, {duration: 0.05, opacity: 1, stagger: 0.05})
    .to(p4chars, {duration: 0.05, opacity: 0, stagger: -0.05, delay: 1.5})

    .to(p5chars, {duration: 0.05, opacity: 1, stagger: 0.05})
    .to(p5chars, {duration: 0.05, opacity: 0, stagger: -0.05, delay: 1.5, onComplete: p1start})
}

tl.to("#videoHero", {
    x: 300,
    scrollTrigger: {
    trigger: "#section__hero",
    start: "top top",
    end: "bottom top",
    ease: "power4.out",
    scrub: true,
    }
})



tl.to("#logoMarkerScale", {
    width:"200",
    y:"-80",
    scrollTrigger: {
    trigger: "#logoMarkerScale",
    start: "=-80 top",
    scrub: true,
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    }
});

tl.to(".column__hero__1", {
    zIndex: 101,
    scrollTrigger: {
    trigger: "#section__hero",
    start: "40 top",
    end: "500 top",
    scrub: true,
    }
})

tl.to("#logoMarkerScale", {
    opacity:0,
    scrollTrigger: {
    trigger: ".column__hero__1",
    start: `bottom top`,
    //start: `${hLogo/2}px top`,
    scrub: true,
    end: "bottom top",
    }
});

tl.to(".header__nav", {
    opacity:1,
    scrollTrigger: {
    trigger: "#logoScale__container",
    start: "top top",
    //start: `${hLogo/2}px top`,
    scrub: true,
    end: `${hLogo}px top`,
    }
});

gsap.to(".branding__word", {
    opacity:0,
    scrollTrigger: {
        trigger: "#logoScale__container",
        start: `top top`,
        scrub: true,
        end: `${hLogo/2}px top`,
    }
});

tl.to(".header__lang", {
    opacity:1,
    scrollTrigger: {
    trigger: "#logoScale__container",
    start: `${hLogo/2}px top`,
    scrub: true,
    end: `${hLogo}px top`,
    }
});

tl.to("#logoMarkerHeader", {
    opacity:1,
    scrollTrigger: {
    trigger: ".column__hero__1",
    start: "bottom top",
    scrub: true,
    end: "bottom top",
    }
});

tl.to("#section__header", {
    backgroundColor:"#edf1f9",//#e0e5ed
    scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: true,
    end: "50% top",
    }
});

tl.to("#section__header", {
    scrollTrigger:{
    trigger:"#section__header",
    start: "top top",
    end: "+=500000000000",
    pin: "#section__header",
    pinSpacing: false,
    }
})

/*	Frase	*/

var tl2 = gsap.timeline(),
mySplitText = new SplitText("#frase", { type: "lines,words,chars" }),
chars = mySplitText.chars;

gsap.set("#frase", { perspective: 400 });
tl2.from(chars, {
duration: 1.8,
transformOrigin: "0% 50% -50",
x: 0,
color: "#bcc6d8",
stagger: 1.5,
ease: "power2.out",
    scrollTrigger: {
    trigger: '#section__intro',
    start: 'top 55%',
    end: '30% 35%',
    scrub: true,
    }
});

tl2.from("#frase > div > div", {
    y: 100,
    scrollTrigger: {
    trigger: "#section__intro",
    start: 'top 60%',
    end: '10% 50%',
    scrub: true,
    ease: "power1.inOut",
    }
})



// GSAP Responsivo:

let mm = gsap.matchMedia();
// Desktop
mm.add("(min-width: 1025px)", () => {

    tl.to("#canvas", {
    scrollTrigger:{
        trigger:".column__metodologia > .col__right",
        start: "top top",
        end: `bottom bottom`,
        endTrigger: ".right__etapa__3",
        pin: "#canvas",
        pinSpacing: false,
    }
    })
    
    tl.to("#botella__real", {
    opacity:1,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "20% center",
        scrub: true,
        end: "40% center",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real", {
    scale: 1,
    rotate:0,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "top center",
        scrub: true,
        end: "bottom+=40% center",
        ease: "power4.inOut",
    }
    });

    tl.from(".st0", {scrollTrigger: {trigger: ".right__etapa__1", start: "20% 60%", end: "30% 45%", scrub: 1}, ease: "none", drawSVG: "100% 100%"}, {drawSVG:"0% 100%"});
    //tl.from(".st1", {scrollTrigger: {trigger: ".right__etapa__1", start: "20% 60%", end: "30% 45%", scrub: 1}, ease: "none", drawSVG: "100% 100%"}, {drawSVG:"0% 100%"});
    tl.from(".st2", {scrollTrigger: {trigger: ".right__etapa__1", start: "35% 60%", end: "40% 45%", scrub: 1}, ease: "none", drawSVG: "100% 100%"}, {drawSVG:"0% 100%"});

    tl.from(".st0", {scrollTrigger: {trigger: ".right__etapa__1", start: "70% 50%", end: "90% 40%", scrub: 1}, ease: "none", drawSVG: "0% 100%"}, {drawSVG:"100% 100%"});
    //tl.from(".st1", {scrollTrigger: {trigger: ".right__etapa__1", start: "70% 50%", end: "90% 40%", scrub: 1}, ease: "none", drawSVG: "0% 100%"}, {drawSVG:"100% 100%"});
    tl.from(".st2", {scrollTrigger: {trigger: ".right__etapa__1", start: "70% 50%", end: "90% 40%", scrub: 1}, ease: "none", drawSVG: "0% 100%"}, {drawSVG:"100% 100%"});


    tl.to("#botella__real__img", {
    css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)', opacity:1 },    
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "top center",
        scrub: true,
        end: "40% center",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real__img", {
    rotate:18,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "20% center",
        scrub: true,
        end: "bottom+=50% center",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real__img", {
    scale: 0.4,
    yPercent: 8,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "50% center",
        scrub: true,
        end: "bottom+=50% center",
        ease: "power4.inOut",
    }
    });

    tl.fromTo("#frases__boceto", {
    opacity:1,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "25% center",
        scrub: true,
        end: "50% center",
    }
    },
    {
    opacity:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "top center",
        scrub: true,
        end: "10% center",
    }
    })

    tl.to("#botella__web__fondo", {
    scale:1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        start: "top center",
        scrub: true,
        end: "30% center",
        ease: "power4.inOut",
    }
    });

    LottieScrollTrigger({
    target: "#animationWindow",
    path: "/assets/lotties/splash.json",
    speed: "slow",      
    trigger: ".right__etapa__2",
    start: "35% center",
    end: "85% center",
    scrub: true,
    pin: false,
    ease: "power1.inOut",      
    });

    LottieScrollTrigger({
    target: "#animationWindow__bottom",
    path: "/assets/lotties/splash.json",
    speed: "slow",      
    trigger: ".right__etapa__2",
    start: "30% center",
    end: "80% center",
    scrub: true,
    pin: false,
    ease: "power1.inOut",
    });

    

    tl.to("#botella__hoja1", {
    opacity:1,
    x:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "15% center",
        scrub: true,
        end: "45% center",
        ease: "expoScale(0.5,7,none)",
    }
    });

    tl.to("#botella__hoja1", {
    rotate:-45,
    scale:0.3,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "100% center",
        scrub: true,
        end: "250% center",
    }
    });

    tl.to("#botella__hoja1", {
    immediateRender: false,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        start: "top center",
        end: "30% center",
        scrub: true,
    }
    });

    tl.to("#botella__hoja2", {
    opacity: 1,
    x:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        start: "20% center",
        scrub: true,
        end: "40% center",
    }
    });

    tl.to("#botella__hoja2", {
    rotate:45,
    scale:0.4,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "100% center",
        scrub: true,
        end: "250% center",
    }
    })

    tl.to("#botella__hoja2", {
    immediateRender: false,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        start: "top center",
        end: "30% center",
        scrub: true,
    }
    });

    tl.to("#botella__web__contexto", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        start: "30% center",
        scrub: true,
        end: "45% center",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__web__base", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        start: "30% center",
        scrub: true,
        end: "45% center",
        ease: "power4.inOut",
    }
    });
    
});

// Mobile
mm.add("(max-width: 1024px)", () => {

    // horizontal scroll
    const sections = gsap.utils.toArray(".right__etapa");
    let maxWidth = 0;
    sections.forEach((section) => {
    maxWidth += section.offsetWidth;
    });

    gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
        trigger: "#section__metodologia .column__metodologia",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        end: () => `+=${maxWidth}`,
        snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: true,
        duration: {min: 0.1, max: 0.5}
        },
    }
    });
    // cierre hscroll

    tl.to("#botella__real", {
    opacity:1,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "20% bottom",
        scrub: true,
        end: "40% bottom",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real", {
    scale: 1,
    rotate:0,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        start: "top bottom",
        scrub: true,
        end: "bottom+=20% bottom",
        
        ease: "power4.inOut",
    }
    });

    tl.from(".st0", {
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "20% bottom",
        //end: "30% 90%",
        start: "top bottom",
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
        scrub: 1
    },
    ease: "none",
    drawSVG: "100% 100%"
    },
    {
    drawSVG:"0% 100%",
    });

    tl.from(".st2", {
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "35% bottom",
        //end: "40% 90%",
        start: "top bottom",
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 40 / 100) )}px center`,
        scrub: 1
    },
    ease: "none",
    drawSVG: "100% 100%"
    },
    {
    drawSVG:"0% 100%"
    });

    tl.from(".st0", {
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "70% bottom",
        //end: "90% 90%",
        start: "top bottom",
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 90 / 100) )}px center`,
        scrub: 1
    },
    ease: "none",
    drawSVG: "0% 100%"
    },
    {
    drawSVG:"100% 100%"
    });

    tl.from(".st2", {
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "70% bottom",
        //end: "90% 90%",
        start: "top bottom",
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 90 / 100) )}px center`,
        scrub: 1
    },
    ease: "none",
    drawSVG: "0% 100%"
    },
    {
    drawSVG:"100% 100%"
    });


    tl.to("#botella__real__img", {
    css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)', opacity:1 },    
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "top bottom",
        scrub: true,
        //end: "40% bottom",
        start: "bottom bottom",
        end: "110% bottom",
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real__img", {
    rotate:18,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        //start: "20% bottom",
        scrub: true,
        //end: "bottom+=50% bottom",
        start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 150 / 100) )}px center`,
        ease: "power4.inOut",
    }
    });

    tl.to("#botella__real__img", {
    scale: 0.4,
    yPercent: 8,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        //start: "50% bottom",
        scrub: true,
        //end: "bottom+=50% bottom",
        start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 50 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 150 / 100) )}px center`,
        ease: "power4.inOut",
    }
    });

    tl.fromTo("#frases__boceto", {
    opacity:1,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "25% bottom",
        scrub: true,
        //end: "50% bottom",
        start: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 25 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 50 / 100) )}px center`,
    }
    },
    {
    opacity:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        //start: "top bottom",
        scrub: true,
        //end: "10% bottom",
        start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 10 / 100) )}px center`,
    }
    })

    tl.to("#botella__web__fondo", {
    scale:1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        scrub: true,
        ease: "power4.inOut",
        start: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
    }
    });

    LottieScrollTrigger({
    target: "#animationWindow",
    path: "/assets/lotties/splash.json",
    speed: "slow",      
    trigger: ".right__etapa__2",
    //start: "35% center",
    //end: "85% center",
    start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 35 / 100) )}px center`,
    end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 85 / 100) )}px center`,
    scrub: true,
    pin: false,
    ease: "power1.inOut",      
    });

    LottieScrollTrigger({
    target: "#animationWindow__bottom",
    path: "/assets/lotties/splash.json",
    speed: "slow",      
    trigger: ".right__etapa__2",
    //start: "30% center",
    //end: "80% center",
    start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
    end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 80 / 100) )}px center`,
    scrub: true,
    pin: false,
    ease: "power1.inOut",
    });

    tl.to("#botella__hoja1", {
    opacity:1,
    x:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        //start: "15% bottom",
        scrub: true,
        //end: "45% bottom",
        start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 15 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 45 / 100) )}px center`,
        ease: "expoScale(0.5,7,none)",
    }
    });

    tl.to("#botella__hoja1", {
    rotate:-45,
    scale:0.3,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "100% bottom",
        scrub: true,
        //end: "250% bottom",
        start: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 250 / 100) )}px center`,
    }
    });

    tl.to("#botella__hoja1", {
    immediateRender: false,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        //start: "top center",
        //end: "30% center",
        start: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
        scrub: true,
    }
    });

    tl.to("#botella__hoja2", {
    opacity: 1,
    x:0,
    scrollTrigger: {
        trigger: ".right__etapa__2",
        //start: "20% bottom",
        scrub: true,
        //end: "40% bottom",
        start: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 20 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__2").offsetLeft + (window.innerWidth * 40 / 100) )}px center`,
    }
    });

    tl.to("#botella__hoja2", {
    rotate:45,
    scale:0.4,
    scrollTrigger: {
        trigger: ".right__etapa__1",
        //start: "100% bottom",
        scrub: true,
        //end: "250% bottom",
        start: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__1").offsetLeft + (window.innerWidth * 250 / 100) )}px center`,
    }
    });

    tl.to("#botella__hoja2", {
    immediateRender: false,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        //start: "top center",
        //end: "30% center",
        start: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
        scrub: true,
    }
    });

    tl.to("#botella__web__contexto", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        //start: "30% bottom",
        scrub: true,
        //end: "45% bottom",
        start: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 45 / 100) )}px center`,
        ease: "power4.inOut",
    }
    });

    //end: `${hLogo}px top`,


    tl.to("#botella__web__base", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".right__etapa__3",
        //start: "30% bottom",
        scrub: true,
        //end: "45% bottom",
        start: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 30 / 100) )}px center`,
        end: `${(document.querySelector(".right__etapa__3").offsetLeft + (window.innerWidth * 45 / 100) )}px center`,
        ease: "power4.inOut",
    }
    });
    


});



tl.to(".canva__cover", {
    scale:1,
    scrollTrigger:{
    trigger:"#section__metodologia",
    start: "top 70%",
    end: "100 50%",
    scrub: true,
    ease: "power4.inOut",
    }
})

tl.to(".featured__cover", {
    scale:1,
    scrollTrigger:{
    trigger:"#section__featured",
    start: "top 70%",
    end: "100 50%",
    scrub: true,
    ease: "power4.inOut",
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

/*gsap.set(".subtitle", { opacity: 0, x: -50 }),
    ScrollTrigger.batch(".subtitle", {
    trigger: ".subtitle",
    start: "top, 70%",
    end: "top, 60%",
    onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0 }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, x: 0 }),
    onLeave: (batch) => gsap.to(batch, { opacity: 1, x: 0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, x: -50 }),
    });

    gsap.set(".title", { opacity: 0, y: 50 }),
    ScrollTrigger.batch(".title", {
    trigger: ".title",
    start: "top, 70%",
    end: "top, 60%",
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0 }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0 }),
    onLeave: (batch) => gsap.to(batch, { opacity: 1, y: 0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50 }),
    });*/

// Clientes:
tl.to('.cliente__slider1', { x:0, scrollTrigger: { trigger: '.cliente__slider1', start: 'top 100%', end: "bottom 0%", scrub: true}});
    tl.to('.cliente__slider2', { x:0, scrollTrigger: { trigger: '.cliente__slider2', start: 'top 100%', end: "bottom 0%", scrub: true}});

//};



// Lottie function helper:

function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
    st = {
        trigger: target,
        pin: true,
        start: "top top",
        end: speeds[vars.speed] || "+=1000",
        scrub: 1,
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
        },
    });
    for (let p in vars) {
    // let users override the ScrollTrigger defaults
    st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
    let createTween = function () {
        animation.frameTween = gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
        });
        return () => animation.destroy && animation.destroy();
    };
    ctx && ctx.add ? ctx.add(createTween) : createTween();
    // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    });
    return animation;
}

}


});