import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
    
    test('Debe de retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById (id);

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual(heroeData);
    });

    test('Debe de retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById (id);

        expect( heroe ).toBe(undefined);
    });
    
    // Tarea
    /**
     * Debe de retornar un arreglo con los heroes de DC
     * owner
     * toEqual al arraglo fitrado
     */
    test('Debe retornar un arreglo de heroes de DC', () => {
        
        const owner = 'DC';
        const heroesFiltrados = getHeroesByOwner(owner);

        const heroesDC = heroes.filter(hD => hD.owner === owner);

        expect(heroesFiltrados).toEqual(heroesDC);
    });
    
    // Tarea
    /**
     * Debe de retornar un arreglo con los heroes de Marvel
     * length = 2
     * toBe
     */
    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroesF = getHeroesByOwner(owner);

        // const heroesM = heroes.filter(hM => hM.owner === owner);

        expect(heroesF.length).toBe(2);
    });
    

})
