import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { /* Recibe a las categorias */
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log('Llamado del handleInputChange');
    }

    const handleSubmit = (e) => {
        e.preventDefault() /* Esto previene que se refresque la pagina */
        console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]); /* Comunicacion entre componentes */
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
