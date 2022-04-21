import {API_KEY, BASE_URL} from './config'


export async function searchDetails({id = "fZdzEHC8sMC0E"} = {}) {
  const URL = `${BASE_URL}/gifs/${id}?${API_KEY}`;
  const response = await fetch(URL);
  const datos = await response.json();

  const { data } = datos

  const {title, username, id: id_gif } = data
  const { url } = data.images.fixed_width

  return {title, username, id_gif, url}

}