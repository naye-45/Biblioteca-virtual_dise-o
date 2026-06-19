const loginForm = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

/*
    Usuario único permitido
*/
const usuarioPermitido = {
    usuario: "bibliotecario",
    password: "12345"
};

/*
    Login
*/
loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (
        usuario === usuarioPermitido.usuario &&
        password === usuarioPermitido.password
    ) {

        sessionStorage.setItem("sesionActiva", "true");
        localStorage.setItem("usuario", usuario);

        // RUTA VACÍA PARA QUE OTROS COLABORADORES LA DEFINAN
        const RUTA_HOME = "../index.html";

        window.location.href = RUTA_HOME;

    } else {

        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.className = "error";
    }

});