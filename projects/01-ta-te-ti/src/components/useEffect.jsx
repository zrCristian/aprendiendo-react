import { useEffect, useState } from "react"


// hook useEffect, nos permite ejecutar codigo arbitrario cuando se se cargar el componente y cada vez que cambien x dependencias
// codigo arbitrario: practicamente seria un bloque de codigo que yo quiero que se ejecute para este hook


function useEffect () {
    const [value, setValue] = useState(false)

    useEffect(() => {
        // se ejecuta como minimo una vez, por que se ejecuta cuando se carga el componente
        console.log("codigo")
    }, [ ]) // si la lista de dependecias esta vacia se ejecutara cada vez que haya un cambio en un estado
}


// cambiar localStorage cuando alguien gana