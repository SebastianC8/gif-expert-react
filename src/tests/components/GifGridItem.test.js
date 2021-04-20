import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas <GifGridItem/>', () => {

    /**
     * Título
     */
    const title = 'Un título';
    
    /**
     * URL imagen
     */
    const url = 'https://localhost/something.jpg';

    /**
     * Componente
     */
    const wrapper = shallow(<GifGridItem title = { title } url = { url } />);

    /**
     * Se valida snapshot del component
     */
    test('Mostrar componente ok', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    /**
     * Se válida el valor del título del componente
     */
    test('Debe tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });
    
    /**
     * Se valida el valor de los atributos de la etiqueta img del componente
     */
    test('Etiqueta img con sus respectivos atributos', () => {
       
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    /**
     * Se valida que un DIV del componente tenga una clase específica
     */
    test('Validar clase específica en div', () => {
       
        const div = wrapper.find('div');
        const classRequired = 'clase-test';
        const className = div.props().className;

        expect(className.includes(classRequired)).toBe(true);

    });
    

});
