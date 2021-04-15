import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

/**
 * Custom hook
 */
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /**
    * Hace que la función solo se ejecute la primera vez que se renderiza el componente
    * @param Callback
    * @param Array
    */
    useEffect(() => getGifs(category).then((img) => setState({
        data: img,
        loading: false
    })), [category]);

    return state;

}