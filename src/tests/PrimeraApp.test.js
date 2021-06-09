import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
        
    //     const saludo = 'Hola, Soy Goku';
    //     // render = Funcion que recibe un componente a renderizar
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitle';

        // wrapper tiene toda la info renderizada
        const wrapper = shallow( 
            <PrimeraApp
                saludo={saludo}
                subtitulo={ subTitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();
        // wrapper funciona igual a....document.querySelector('p')

        expect(textoParrafo).toBe(subTitulo);
    });
    
    
});