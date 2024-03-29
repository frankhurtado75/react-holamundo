import React from 'react';

const HolaMundo = () => {
    const Hello = '¡Hola Mundo!';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="Logo React" />
            {isTrue ? <h4>Esta es verdadero</h4> : <h5>Soy falso</h5> }
            {isTrue && <h4>Soy verdadero</h4> } 
        </div>
    )
};

export default HolaMundo;