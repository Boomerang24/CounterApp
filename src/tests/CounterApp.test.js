import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp />);
    // Con esto no perdemos las sugerencias de los metodos

    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    });


    test('debe mostrar <CounterApp /> correctamente', () => {
        

        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe mostrar el valor por defecto de 100', () => {
        
        const valorD = 100;
        const wrapper = shallow( <CounterApp value={valorD} />);

        const valorCounter = wrapper.find('h2').text();
          
        expect(valorCounter).toBe(`${valorD}`);

    });

    test('debe de incrementar con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        //console.log(btn1.html());
        const valorCounter = wrapper.find('h2').text();

        expect(valorCounter).toBe('11');
        
    });

    test('debe de decrementar con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        //console.log(btn1.html());
        const valorCounter = wrapper.find('h2').text();

        expect(valorCounter).toBe('9');
        
    });
    
    test('debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow( <CounterApp value={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valorCounter = wrapper.find('h2').text();
        // console.log(valorCounter);

        expect( valorCounter ).toBe('105');
    })
    
    
});
