import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    /**
     * Hook categorías
     */
    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>

            {/* Se llama componente <AddCategory/> y se envía como parámetro obligatorio la funcion setCategories()  */}
            <AddCategory setCategories = { setCategories }/>

            <hr/>
            <ol>
                {
                    /**
                     * Se llama componente encargado de listar cada una de las categorías
                     */
                    categories.map((category) => <GifGrid key = { category } category = { category }/>)
                }
            </ol>

        </Fragment>
    )
}

export default GifExpertApp;