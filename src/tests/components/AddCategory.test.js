import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Componente <AddCategory/>', () => {

    /**
     * Definición de función
     */
    const setCategories = jest.fn();

    /**
     * Componente
     */
    let wrapper;

    /**
     * Limpiar llamado a la instancia
     */
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    });
    
    /**
     * Snapshot ok
     */
    test('Mostrar componente ok', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    /**
     * Evento change en input de búsqueda
     */
    test('Cambios en input', () => {
        
        const input = wrapper.find('input');
        const value = 'Valor input';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    /**
     * Valida el valor del input y como no se le está mandando,
     * no debe llamarse la función setCategories()
     */
    test('NO debe de ejecutarse', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();

    });

    /**
     * Valida que llame la función setCategories() y limpie el input
     */
    test('Debe llamar setCategories() y limpiar input', () => {
    
        const value = 'Text input';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');

    });

});
