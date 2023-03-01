document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");

    let bandera = false;

    result.addEventListener("click", () => {
        bandera = false
    })

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const valorBoton = boton.id;

            const evaluar = (id) => {
                if (id === "=") {
                    result.value = parseFloat(eval(result.value)).toFixed(2);
                    bandera = true
                } else if (valorBoton === "removeCaracter") {
                    result.value = result.value.slice(0, -1);
                } else {
                    result.value += valorBoton;
                }
            }

            evaluar(valorBoton)
        });
    });
})