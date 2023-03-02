document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('#body');
    body.setAttribute("style", "display: block;")

    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");

    let bandera = false;
    let touchEvent;

    // Recorre todos los botones para buscar un evento
    botones.forEach((boton) => {

        // Funcion que ejecuta todo el calculo
        const operar = () => {

            const valorBoton = boton.id;

            // Evalua y devuelve el resultado de la operacion
            const evaluar = (id) => {
                if (id === "=") {
                    let total = eval(result.value).toString().replace(/(\.\d*?[1-9])0+$/g, '$1')

                    if (/^\d+\.\d+$/.test(total)) {
                        result.value = parseFloat(total).toFixed(8)
                    } else {
                        result.value = total
                    }

                    bandera = true

                } else if (valorBoton === "removeCaracter") {
                    result.value = result.value.slice(0, -1);
                     bandera = false
                } else {
                    result.value += valorBoton;
                     bandera = false
                }
            }

            // Borra el resultado del input si se presiona un numero
            if (bandera === true) {
                if (/^[0-9]/.test(valorBoton)) {
                    result.value = ""
                    evaluar(valorBoton)
                } else {
                    evaluar(valorBoton)
                }
            } else {
                evaluar(valorBoton)
            }
        }

        // Ejecucion por evento click - Desktop
        boton.addEventListener("click", () => {
            operar()
        });

        // Ejecucion por evento touch - Mobile
        boton.addEventListener("touchstart", () => {
            touchEvent = true

            // Ejecuta la funcion disparada por touchstart en una repeticion de 1s hasta que es interrumpido por otro eventos.
            const intervalId = setInterval(() => {
                if (touchEvent) {
                    operar();
                } else {
                    clearInterval(intervalId);
                }
            }, 200);
        });

        // Se corta la ejecucion al mover el dedo del boton
        boton.addEventListener("touchmove", () => {
            touchEvent = false;
        });

        // Se corta la ejecucion al dejar de precionar el boton
        boton.addEventListener("touchend", () => {
            touchEvent = false;
        });
    });
})
