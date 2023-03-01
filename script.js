document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const valorBoton = boton.id;

            if (valorBoton === "=") {
                result.value = eval(result.value);
                if (result.value.length > 12) {
                    result.value = result.value.slice(0, 11);
                }
                vaciarInput = true;
            } else if (valorBoton === "removeCaracter") {
                result.value = result.value.slice(0, -1);
            } else {
                result.value += valorBoton;
            }
        });
    });
})