export const FirstApp = ( { title, subtitle } ) => {

    /* 
     * 
     * Las props es información que se pasa del componente padre al componente hijo, es decir, establecer una comunicación entre componentes.
     * Se pueden desestructurar como cualquier objeto o arreglo
     * 
     */


    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    )
  }