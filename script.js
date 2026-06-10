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

  const body = {
    nombre: form.querySelector('input[name="nombre"]').value,
    email: form.querySelector('input[name="email"]').value,
    mensaje: form.querySelector('textarea[name="mensaje"]').value
  }

  const response = await fetch("http://127.0.0.1:5000/contacto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })

  if (response.ok) {
    form.innerHTML = "<p style='color: var(--accent); font-size: 1.1rem; font-weight: 500;'>¡Mensaje enviado! Te responderé pronto.</p>"
  } else {
    form.innerHTML = "<p style='color: red;'>Hubo un error, intenta de nuevo.</p>"
  }
})

    if (response.ok) {
      form.innerHTML = "<p style='color: var(--accent); font-size: 1.1rem; font-weight: 500;'>¡Mensaje enviado! Te responderé pronto.</p>"
    } else {
      form.innerHTML = "<p style='color: red;>Hubo un error, intenta de nuevo.</p>"
    }
  

const themeToggle = document.querySelector("#theme-toggle")
const html = document.documentElement

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark")
  themeToggle.textContent = "☀️"
}

themeToggle.addEventListener("click", function() {
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme")
    themeToggle.textContent = "🌙"
    localStorage.setItem("theme", "light")
  } else {
    html.setAttribute("data-theme", "dark")
    themeToggle.textContent = "☀️"
    localStorage.setItem("theme", "dark")
  }
})