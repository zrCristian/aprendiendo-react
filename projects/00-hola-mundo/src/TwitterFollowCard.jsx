import { useState } from "react"


export function TwitterFollowCard( principal ) {  // { formatUserName, userName, name }

    const  { userName = "unknown", initialIsFollowing } = principal  // valor por defecto de los parametros nombrados de JS 
// initialIsFollowing es una prop para inicializar un estado ( Estado Inicial ) => usamos ' initial '
    // IMPORTANTE!! si usamos una prop para inicializar un estado, caso de arriba, solo hace eso, es decir si esa prop cambia de valor NO VA A CAMBIAR EL VALOR DEL ESTADO

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [contextFollow, setContextFollow] = useState("Seguir")
    const [buttonClassName, setButtonClassName] = useState("tw-followCard-button")


    const handleClick = () => {
        setIsFollowing(!isFollowing) 
        setContextFollow("Siguiendo")  
        setButtonClassName("tw-followCard-button")

        if (isFollowing) {
            setContextFollow("Seguir")
            setIsFollowing(false)
            setButtonClassName("tw-followCard-button")
        }
    }

    const handleMouseEnter = () => {
        setButtonClassName("tw-followCard-button tw-followCard-button-hover")

        if (isFollowing) {
            setContextFollow("Dejar de seguir")
            setButtonClassName('tw-followCard-button is-following')
        }
    }

    const handleMouseLeave = () => {
        setButtonClassName("tw-followCard-button")
        if (isFollowing) {
            setContextFollow("Siguiendo")
            setButtonClassName("tw-followCard-button is-following")
        }
    }

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} // templete string
                alt="Avatar de Goku" 
            />
            <div className='tw-followCard-info'> 
                <strong>{ principal.children }</strong>
                <span className='tw-followCard-infoUserName'>{ principal.formatUserName(userName) }</span>
            </div>
        </header>

        <aside>
            <button className= {buttonClassName} onClick={handleClick} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                { contextFollow }
            </button>
        </aside>
    </article>

    )
}

// las Bases de la reutilizacion del cualquier componente en React son las propiedades(paramentros)

// Renderizado condicional, dependiendo de una condicion va a renderizar una cosa u otra

    // Estado interno, este estado esta en cada uno de los elementos que renderiza el componente 
    // es decir estan separados por cada uno de los demas componentes, seria independiente de los demas 

// import React from "react"; const useState = React.useState
// los estados son hook => añadir cierta funcionalidad a los componentes o ejecutar codigo arbitrario cuando ocurre ciertas cosas en el componente

// si se cambia el valor de un estado react detecta el cambio de estado y refleja los cambios en la UI

// virtual DOM actualiza / cambia el elemento que cambia, no renderiza todo el sitio web


//  2 formas para que se re-rendericen un componente 
    //  1. se actualiza el estado interno de un compont., se re-renderiza y se refleja los cambios, de las partes que tienen que cambiar
    //  2. otra forma es cuando un component. padre se vuelve a re-renderizar, propagando los componentes hijos (se re-renderizan), independiente de los cambios de sus props

    // si en un compnent. padre se re-renderiza y solo en uno de los los component. hijo hay cambio solo ese componente se re-renderiza (para reflejar los cambios en la UI), el resto  de los componentes hijos se ejecuta el codigo pero react al ver que no hubo cambios no los vuelve a renderizar(no hace los cambios al DOM (no hace falta que renderice ya no que no hubo cambios)) 