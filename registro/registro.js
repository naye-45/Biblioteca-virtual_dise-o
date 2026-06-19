const $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $repetir_contraseña = document.getElementById("repetir_contraseña"),
    $form = document.getElementById("registroForm");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const primer_intento = $password.value;
    const segundo_intento = $repetir_contraseña.value;
    const usuario_registrado = $username.value;

    if (primer_intento === segundo_intento) {
        localStorage.setItem("userSaved", usuario_registrado);
        localStorage.setItem("passSaved", primer_intento);
        Swal.fire({
            title: "Resgistro con exito!",
            icon: "success",
            draggable: true
        }).then(() => {
            window.location.href = "/login/login.html";
        });    
    }else {
        Swal.fire({
            icon: "Error",
            title: "Vaya...",
            text: "Las contraseñas no coinciden!"
        });
        $repetir_contraseña.value = "";
        $repetir_contraseña.focus();
    }
});