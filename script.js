document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const valorBoton = boton.id;

            if (valorBoton === "=") {
                result.value = parseFloat(eval(result.value)).toFixed(3);
            } else if (valorBoton === "removeCaracter") {
                result.value = result.value.slice(0, -1);
            } else {
                result.value += valorBoton;
            }
        });
    });
})