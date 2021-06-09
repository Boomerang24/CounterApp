import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser();
    
    expect( user).toEqual( userTest);

    })

    // Tarea - getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const nombre = 'Pedro';
        const userAct = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual(userAct);
    });   
    
})
