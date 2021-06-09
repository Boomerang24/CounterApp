/**
 * Los console Logs se comentan o se borrar
 */
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string'; 

describe('Pruebas en 02-template=string.js', () => {
    
    test('getSaludo debe de retornar "Hola Megan"', () => {
        
        const nombre = 'Megan';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe( 'Hola ' + nombre);
    });    

    // getSaludo debe de retorar Hola Carlos! si no hay argumento nombre
    test('getSaludo utilizando el default value', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
    

})
