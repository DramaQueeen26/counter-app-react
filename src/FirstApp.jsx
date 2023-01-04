import PropTypes from 'prop-types';

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

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtítulo',
    name: 'Mariangel Yajure'
}