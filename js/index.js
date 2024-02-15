const proyectsSection = document.getElementById('proyects')
const studiesSection = document.getElementById('studies')
const studiesBtn = document.getElementById('studies-btn')
const proyectsBtn = document.getElementById('exp-btn')
const backToTopBtn = document.getElementById('backTopBtn')

window.addEventListener("load", () => {
  studiesSection.style.display = "flex";
  proyectsSection.style.display = "none";
});

studiesBtn.addEventListener("click", () => {
  studiesSection.style.display = "flex";
  proyectsSection.style.display = "none";
});

proyectsBtn.addEventListener("click", () => {
  proyectsSection.style.display = "flex";
  studiesSection.style.display = "none";
});



const menuDropDown = document.querySelector(".menu-drop");
const menuBtn = document.querySelector(".menu-toggle")

window.addEventListener("load", ()=> {
  menuDropDown.style.display = "none"
}); 

menuBtn.addEventListener("click", () =>{
  if (menuDropDown.style.display === "none" || menuDropDown.style.display === "" ){
    menuDropDown.style.display= 'flex'
  } else {
    menuDropDown.style.display = 'none'
  }
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón cuando se desplaza hacia abajo
window.onscroll = function() {
  toggleScrollButton();
};

function toggleScrollButton() {
  var scrollButton = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Agregar un event listener al botón
backToTopBtn.addEventListener("click", scrollToTop);




// La siguiente funcion calcula la altura de las secciones con el fin de mantenerlas centradas

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Obtener el id de la sección a la que se va a desplazar
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      // Calcular la posición vertical de la sección
      const offsetTop = targetElement.offsetTop;
      const windowHeight = window.innerHeight;
      const sectionHeight = targetElement.offsetHeight;
      const scrollTo = offsetTop - (windowHeight - sectionHeight) / 2;
      
      // Desplazar suavemente la página a la posición calculada
      window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
      });
  });
});