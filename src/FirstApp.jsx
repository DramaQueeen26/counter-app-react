
// * No se pueden enviar promesas, es decir, asíncrona
const getSaludo = (a, b) => {
    return a + b;
}

const newMessage = {
    message: 'Hola Mundo',
    title: 'DramaQueen'
};

export const FirstApp = () => {
    

    return (
        // * Para crear códigos en conjuntos sin necesidad de crear un div
        // ?  <> sinónimo de Fragment
        <>
            <h1>{ getSaludo(2, 3) }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>Soy un subtitulo</p>
        </>
    )
  }