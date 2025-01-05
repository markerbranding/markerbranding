// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero__about .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__intro", ease: "power4.out"});
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

gsap.to("#section__header", {
  backgroundColor: "#edf1f9",
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

gsap.from("#section__divisor__team img", {
  scale: 0.6,
  borderRadius: "20",
  scrollTrigger: {
    trigger: "#section__divisor__team",
    scrub: true,
    start: "top 90%",
    end: "50% 50%",
    ease: "power4.inOut",
  }
})

gsap.set(".value", { opacity: 0, y: 50 }),
ScrollTrigger.batch(".value", {
  trigger: "value__list",
  start: "top, 70%",
  end: "top, 60%",
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onLeave: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50, stagger: 0.2 }),
});

gsap.set(".team__collaborator", { opacity: 0, y: 50 }),
ScrollTrigger.batch(".team__collaborator", {
  trigger: "team__list",
  start: "top, 70%",
  end: "top, 60%",
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onLeave: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
  onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50, stagger: 0.2 }),
});

gsap.set(".subtitle", { opacity: 0, x: -50 }),
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
});

/*	Why Marker	*/
mySplitTextWhy = new SplitText("#why", { type: "lines,words,chars" }),
charsWhy = mySplitTextWhy.chars,

gsap.from(charsWhy, {
  duration: 1.8,
  transformOrigin: "0% 50% -50",
  x: 0,
  color: "#2b2e3f",
  stagger: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: '#section__why__name',
    start: 'top 55%',
    end: '30% 35%',
    scrub: true,
  }
});

gsap.from("#why > div > div", {
  y: 100,
  scrollTrigger: {
    trigger: "#section__why__name",
    start: 'top 60%',
    end: '10% 50%',
    scrub: true,
    ease: "power1.inOut",
  }
})



gsap.from("#marker__red", {
  yPercent:-200,
  scrollTrigger: {
    trigger: "#section__why__name .col__right",
    start: 'top 60%',
    end: '70% 50%',
    scrub: true,
    ease: "power1.out",
  },
})