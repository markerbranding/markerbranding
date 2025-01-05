/*  Referrer  */
document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll("a.snippet");

    projectLinks.forEach((link) => {
        link.addEventListener("click", function () {
            sessionStorage.setItem("previousPage", window.location.pathname);
        });
    });
});

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
    const isTargetLinkOrBtn = target?.closest('.work__list a');
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
    trigger:"#smooth-wrapper",
    start: "top top",
    end: "+=500000000000",
    pin: "#section__header",
    pinSpacing: false,
    }
});


let batchInstance;

// Función para destruir y crear un nuevo batch
function createBatch() {
    // Si ya existe un batch, destrúyelo
    if (batchInstance) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Elimina todos los triggers asociados
        batchInstance = null; // Resetear la instancia
    }

    // Crear un nuevo batch solo con los elementos visibles
    const visibleItems = document.querySelectorAll(".work__list li:not([style*='display: none'])");
    batchInstance = ScrollTrigger.batch(visibleItems, {
        start: "top 70%",
        end: "top 60%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
        onEnterBack: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
        onLeave: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.2, y:0 }),
        onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.2, y:100 }),
    });

    // Actualizar posiciones de ScrollTrigger
    ScrollTrigger.refresh();
}



// Función para actualizar márgenes de los elementos visibles
function updateMargins() {
    const $visibleItems = $(".work__list li:not([style*='display: none'])"); // Seleccionar solo los visibles
    $visibleItems.css("margin-top", "0"); // Resetear márgenes antes de aplicar los nuevos

    $visibleItems.each(function (index) {
        if ((index + 1) % 2 === 0) {

            if (window.matchMedia("(max-width: 767px)").matches) { // If media query matches
            $(this).css("margin-top", "0%"); // Aplicar margen superior a cada 2do visible
            } else {
            $(this).css("margin-top", "50%"); // Aplicar margen superior a cada 2do visible
            }

            
        }
    });
}

// Filtros
function applyFilter(filterClass) {
    // Mostrar/ocultar según el filtro seleccionado
    if (filterClass === "all") {
        $(".work__list li").show();
        $(".filter__work li").removeClass("activo");
        $(".filtrar__All").addClass("activo");
        
    } else {
        $(".work__list li").hide();
        $(`.type__${filterClass}`).show();
        $(".filter__work li").removeClass("activo");
        $(`.filtrar__${filterClass}`).addClass("activo");
    }

    updateMargins(); // Recalcular márgenes después de mostrar/ocultar
    setTimeout(() => {
        createBatch(); // Reiniciar el batch con los elementos visibles
        ScrollTrigger.refresh(); // Forzar la actualización de posiciones
    }, 0); // Timeout para asegurar que el DOM se ha actualizado
}

// Asociar filtros a los botones
$("#filtrar__todos").click(() => applyFilter("all"));
$("#filtrar__branding").click(() => applyFilter("Branding"));
$("#filtrar__web").click(() => applyFilter("Web"));
$("#filtrar__marketing").click(() => applyFilter("Marketing"));

// Inicializar el batch al cargar la página
createBatch();
updateMargins();

$(window).on('resize', function () {
    updateMargins();
});