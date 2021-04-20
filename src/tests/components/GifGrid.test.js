import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

/**
 * Simula petición a este archivo
 */
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas componente <GifGrid/>', () => {
    
    test('Componente ok', () => {
       
        /**
         * Formato de valor esperado en el retorno.
         */
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = { 'Inuyasha' } />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Mostrar items cuando se cargan imágenes con useFetchGifs', () => {
 
        /**
         * Objeto esperado
         */
        const gifs = [{ id: 1, url: 'https://localhost/path', title: 'Título imagen' }];

        /**
         * Simula retorno de data esperada
         */
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category = { 'Inuyasha' } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
});
