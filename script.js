document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botones");
    const result = document.getElementById("result");

    let touchEvent;

    //let click = new Audio("./audio/click-21156.mp3")
    const regex = /^[0-9]/

    let bandera = false;

    // Desabilita las teclas del teclado
    /*result.addEventListener('keydown', event => {
        event.preventDefault();
    });*/

    result.addEventListener("click", () => {
        bandera = false
    })

    botones.forEach((boton) => {
        const operar = () => {
            const valorBoton = boton.id;
            /*
            click.volume = 0.1
            click.play()
             */
            const evaluar = (id) => {
                if (id === "=") {
                    result.value = eval(result.value).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
                    bandera = true
                } else if (valorBoton === "removeCaracter") {
                    result.value = result.value.slice(0, -1);
                     bandera = false
                } else {
                    result.value += valorBoton;
                     bandera = false
                }
            }

            if (bandera === true) {
                if (regex.test(valorBoton)) {
                    result.value = ""
                    evaluar(valorBoton)
                } else {
                    evaluar(valorBoton)
                }
            } else {
                evaluar(valorBoton)
            }
        }

        boton.addEventListener("click", () => {
            operar()
        });

        boton.addEventListener("touchstart", () => {
            touchEvent = true
            const intervalId = setInterval(() => {
                if (touchEvent) {
                    operar();
                } else {
                    clearInterval(intervalId);
                }
            }, 200);
        });

        boton.addEventListener("touchmove", () => {
            touchEvent = false;
        });

        boton.addEventListener("touchend", () => {
            touchEvent = false;
        });
    });
})
