const secciones = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
})

secciones.forEach(function(seccion) {
  observer.observe(seccion)
})