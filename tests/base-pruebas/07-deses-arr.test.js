import { retornaArreglo } from "../../src/bases-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('Debe retornar un string y un número', () => { 

        const [letters, number] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( number ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof number ).toBe( 'number' );

        expect( letters ).toEqual( expect.any( String ) );

     }) 

 })