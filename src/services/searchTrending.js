import {API_KEY, BASE_URL} from './config'

export async function searchTrending({ keyword = "morty" } = {}) {

  const URL = `${BASE_URL}/trending/searches?${API_KEY}`;

  const response = await fetch(URL);
  const datos = await response.json();
  const {data = []} = datos;

  return data;
}