import './App.css'
import  { TwitterFollowCard }  from './TwitterFollowCard'

export function App () {
    const formatUserName = userNamePar => `@${userNamePar}`

    const prueba = { formatUserName, isFollowing: false, userName: "spiderman"}
      // formatUserName => asignacion implicita

    const users = [
        {
            userName: "midudev",
            name: "Cristian Rafael Zamora",
            isFollowing: false
        },
        {
            userName: "spiderman",
            name: "Lionel Messi",
            isFollowing: false
        },
        {
            userName: "elon",
            name: "Elon",
            isFollowing: false
        },
        {
            // userName: "spiderman",
            name: "Carlos Tevez",
            isFollowing: false
        }
    ]
    
    return (
        <section className='tw-section-followCard'>
            <h2 className='tw-title-followCard'>A quién seguir</h2>

            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    console.log(user)
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUserName={formatUserName} 
                            userName= {userName} 
                            initialIsFollowing  = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            <div className='tw-float-followCard'>
                <span className='tw-text-followCard'>Mostrar mas</span>
            </div>


        </section>

    )
}

// formatUserName={formatUserName}  => podemos pasar funciones como parametros (props). Le pasamos la funcion, NO la ejecucion (en este caso), 


// cuando renderizamos un array es obligatorio una 'key'. key es un identificador UNICO para ESE elemento. para que react, al usar el DOM VIRTUAL, sepa exactamanete a que elemento nos estamos refiriendo dentro del array 
// Si la key es la misma para todos los elementos, pueden haber errores donde la informacion este multiplicada, fallos en la re-renderizacion.
//


<div>
    <TwitterFollowCard 
        // formatUserName={formatUserName} 
        userName="midudev" 
        initialIsFollowing  = {false}
    >
        Cristian Rafael Zamora  {/* name="Cristian Rafael Zamora"  */} 
    </TwitterFollowCard>

    <TwitterFollowCard 
        // formatUserName={formatUserName} 
        userName="spiderman" 
        initialIsFollowing  = {false}
        // {...prueba}  => pasando un objeto como prop (no muy recomendable)
    >
        Lionel Messi
    </TwitterFollowCard>

    <TwitterFollowCard 
        // formatUserName={formatUserName}
        userName="elon" 
        initialIsFollowing  = {false}
    >
        Elon
    </TwitterFollowCard>

    <TwitterFollowCard
        // formatUserName={formatUserName}  
        initialIsFollowing  = {false}

        // userName="tevez" 
    >
        Carlos Tevez
    </TwitterFollowCard>

</div>