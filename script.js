window.addEventListener("load", () => {
    const calculator = document.getElementById("calculator");
    calculator.setAttribute("style", "display: grid;")

    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");
    const operation = document.getElementById("operation");

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
                    operation.value = result.value

                    try {
                        let total = eval(result.value).toString().replace(/(\.\d*?[1-9])0+$/g, '$1')

                        if (/^\d+\.\d+$/.test(total)) {
                            result.value = parseFloat(total)
                            console.log(result.value)
                        } else {
                            result.value = total
                            console.log(result.value)
                        }

                    } catch (error) {
                        console.error("Operacion invalida");
                        result.value = "error"
                    }

                    bandera = true

                } else if (id === "AC") {
                    operation.value = result.value
                    result.value = ""

                } else if (id === "^2") {
                    try {
                        let total = eval(result.value).toString().replace(/(\.\d*?[1-9])0+$/g, '$1')
                        operation.value = `pow(${result.value}, 2)`
                        result.value = parseFloat(Math.pow(parseFloat(total), 2).toString())

                    } catch (error) {
                        console.error("Operacion Invalida")
                        result.value = "error"
                    }

                    bandera = true

                } else if (id === ".00") {
                    (!result.value) ? result.value = "error" : result.value = parseFloat(result.value).toFixed(2).toString()
                    if (result.value === "NaN") result.value = "error"

                    bandera = true

                } else if (id === "sqrt") {
                    try {
                        let total = eval(result.value).toString().replace(/(\.\d*?[1-9])0+$/g, '$1')
                        let raiz = Math.sqrt(parseFloat(total)).toString()
                        operation.value = `sqrt(${result.value})`

                        (raiz === "NaN") ? result.value = "error" : result.value = raiz

                    } catch (error) {
                        result.value = "error"
                        console.error("Operacion Invalida")
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
                    operation.value = result.value
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
