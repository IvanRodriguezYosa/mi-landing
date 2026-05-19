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

const form = document.querySelector("form")
  form.addEventListener("submit", async function(e) {
    e.preventDefault()

    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {"Accept": "application/json" }
    })

    if (response.ok) {
      form.innerHTML = "<p style='color: var(--accent); font-size: 1.1rem; font-weight: 500;'>¡Mensaje enviado! Te responderé pronto.</p>"
    } else {
      form.innerHTML = "<p style='color: red;>Hubo un error, intenta de nuevo.</p>"
    }
  })