import {API_KEY, BASE_URL} from './config'

export async function searchGifs({ keyword = "morty", limit = '5', page = 0 } = {}) {

    const URL = `${BASE_URL}/gifs/search?${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

    const response = await fetch(URL);
    const datos = await response.json();
    const {data = []} = datos;

    if(Array.isArray(data)) {
      const newData = data.map(el => {
        const { id, images, title } = el;
        const { url } = images.fixed_width_small
        return {id, title, url}
      })
      return newData;
    }
}
