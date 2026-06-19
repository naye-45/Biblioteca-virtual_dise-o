document.addEventListener("DOMContentLoaded", () => {
    const $form = document.getElementById("loginForm");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        const savedUser = localStorage.getItem("userSaved");
        const savedPass = localStorage.getItem("passSaved");

        if (inputUser === savedUser && inputPass === savedPass) {
            Swal.fire({
                title: "¡Bienvenido/a de vuelta!",
                icon: "success",
                draggable: true
            }).then(() => {
                window.location.href = "../index.html";
            });
        } else {
            Swal.fire({
                icon: "error",      // ← minúscula
                title: "Vaya...",
                text: "¡Contraseña o usuario incorrectos!"
            });
            document.getElementById("password").value = "";
            document.getElementById("password").focus();
        }
    });
});