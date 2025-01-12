window.addEventListener("load", () => {

gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {




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
/*
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
}*/

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

    //updateMargins(); // Recalcular márgenes después de mostrar/ocultar
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
//updateMargins();
/*
$(window).on('resize', function () {
    updateMargins();
});
*/


}

});