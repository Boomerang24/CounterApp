// Los componentes usan UpperCamelCase "PrimeraApp.js"

// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// Functional Components
const PrimeraApp = ( {saludo, subtitulo} ) => {

    return (
        <>
            <h1> {saludo} </h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}
//<> </> es un fragment de forma corta

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un sub'
}

export default PrimeraApp;