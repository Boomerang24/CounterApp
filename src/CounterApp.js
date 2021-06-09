import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    /**
     *  Hook (nombre de la variable del state, funcion con  "setNombre")
     * [var displayed, function to modify] = 
     */
    const [counter, setCounter] = useState(value); // Devuelve un arr-[]

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    // handleReset
    const handleReset = () => {
        if ( counter === 9){
            setCounter('Soy un nepe, digo 9');
        } else {
            setCounter( value );
        }
    }
    // handleMinus
    const handleMinus = () => {
        setCounter( counter - 1);
        //setCounter( (c) => c - 1 );
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleMinus }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

/**
 * Crear un Functional Comp
 *    Con snippets:
 *      rafcp
 */
