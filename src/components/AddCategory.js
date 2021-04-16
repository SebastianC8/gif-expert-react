import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { capitalizeString } from '../helpers/capitalize';

/**
 * Se recibe una FUNCIÓN en los props
 */
export const AddCategory = ({ setCategories }) => {

    /**
     * Hook para guardar nueva categoría
     */
    const [inputValue, setInputValue] = useState('');

    /**
     * Evento change para capturar el valor del input
     */
    const handleInputChange = (e) => {
        setInputValue(capitalizeString(e.target.value));
    }

    /**
     * Evento submit para guardar nueva categoría
     * 
     * Se utiliza función hook setCategories() de componente <GifExpertApp/> para añadir nueva categoría
     */
    const handleSubmit = (e) => {

        e.preventDefault();
        
        if (inputValue) {
            setCategories((category) => [inputValue, ...category]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input type="text" value = { inputValue } onChange = { handleInputChange }/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}