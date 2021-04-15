export const getGifs = async(category) => {

    /**
     * URL endpoint
     */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9xSbPKMYHerVK1AeYCh4FxHPEvo14tMK&q=${ encodeURI(category) }&limit=2`;

    /**
     * Petición HTTP
     */
    const response = await fetch(url);

    /**
     * Se obtiene respuesta de la petición en formato JSON
     */
    const { data } = await response.json();

    /**
     * Estructura necesaria de array
     */
    const gifs = data.map((img) => ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url }));

    return gifs;

}