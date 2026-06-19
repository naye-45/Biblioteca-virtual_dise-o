document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre  = document.getElementById("nombre").value.trim();
        const correo  = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !mensaje) {
            alert("Por favor completa todos los campos obligatorios.");
            return;
        }

        // Aquí puedes conectar con un backend o EmailJS en el futuro
        console.log({ nombre, correo, asunto: document.getElementById("asunto").value, mensaje });

        // Limpiar el formulario
        form.reset();

        // Mostrar mensaje de éxito
        successMsg.style.display = "block";
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 4000);
    });
});