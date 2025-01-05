function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
    gsap.to(".transition", { height: "100%", ease: "power4.out", duration: 0.4 });
    gsap.to(".inner__transition", { delay: 0.4, height: "100%", ease: "power4.out", duration: 0.5 });
    gsap.to(data.current.container, { opacity: 0 });
  }



// Custom select
const dropdown = document.querySelector('.select__dropdown');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;
const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
};
const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
};
const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
    }
};
body.addEventListener('click', closeDropdownFromOutside);
listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
});
dropdown.addEventListener('click', toggleDropdown);

/*  gsap */
gsap.to("#section__header", {
    backgroundColor:"#edf1f9",//#e0e5ed
    scrollTrigger: {
    trigger: "main",
    start: "top top",
    scrub: true,
    end: "50% top",
    }
})

/*  gsap */
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
})

ScrollTrigger.batch(".blog__list li", {
    trigger: ".blog__list",
    start: "top, 70%",
    end: "top, 60%",
    onEnter: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onEnterBack: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onLeave: (batch) =>	gsap.to(batch, { opacity: 1, y:0, stagger: 0.2 }),
    onLeaveBack: (batch) =>	gsap.to(batch, { opacity: 0, y:50, stagger: 0.2 }),
});