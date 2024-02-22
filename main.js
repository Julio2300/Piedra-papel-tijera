let continuarJugando = true

while (continuarJugando) {
    const opciones = ['piedra', 'papel', 'tijera']

    let eleccionJugador = prompt("Elige: piedra, papel o tijera").toLowerCase()
    while (!opciones.includes(eleccionJugador)) {
        eleccionJugador = prompt("Por favor, elige una opción : piedra, papel o tijera").toLowerCase()
    }

    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)]

    let resultado;
    if (eleccionJugador === eleccionComputadora) {
        resultado = "¡Es un empate!"
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado = "Ganaste!"
    } else {
        resultado = "¡La computadora gana!"
    }

    alert(`Elegiste: ${eleccionJugador}\nLa computadora eligió: ${eleccionComputadora}\n${resultado}`)

    let respuesta = prompt("¿Quieres seguir jugando? (si/no)").toLowerCase()
    while (respuesta !== 'si' && respuesta !== 'no') {
        respuesta = prompt("Por favor, ingresa si o no: ¿Quieres seguir jugando?").toLowerCase()
    }
    continuarJugando = (respuesta === 'si')
}