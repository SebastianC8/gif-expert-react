import { getGifs } from "../../helpers/getGifs";

describe('Pruebas getGifs()', () => {
    
    /**
     * Validar longitud de array de respuesta
     */
    test('Return 2 elementos', async() => {

        const gifs = await getGifs('Inuyasha');
        expect(gifs.length).toBe(2);

    });

    /**
     * Validar longitud de array de respuesta cuando no se envía categoría
     */
    test('No categoría', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });

});
