
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Mariangel';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );