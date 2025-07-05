
document.addEventListener("DOMContentLoaded", function () {
   const menuBtn = document.getElementById("mobile-menu-btn");
   const mobileMenu = document.getElementById("mobile-menu");

   // Alternar visibilidad del menú
    menuBtn.addEventListener("click", function (e) {
     e.stopPropagation(); // Evita que se propague y dispare el listener de "click fuera"
     mobileMenu.classList.toggle("hidden");
    });

   // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll("a").forEach(link => {
     link.addEventListener("click", () => {
       mobileMenu.classList.add("hidden");
     });
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", function (e) {
      const isClickInside = mobileMenu.contains(e.target) || menuBtn.contains(e.target);
      if (!isClickInside) {
        mobileMenu.classList.add("hidden");
      }
    });
});



