const API_KEY = "api_key=0L0CAYdnYMNg83Sb6GQxTagMVGMbSIX6"

export async function searchGifs({ keyword = "morty" } = {}) {

    const URL = `https://api.giphy.com/v1/gifs/search?${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    const response = await fetch(URL);
    const datos = await response.json();
    const {data = []} = datos;
    console.log(data)

    if(Array.isArray(data)) {
      const newData = data.map(el => {
        const { id, images, title } = el;
        const { url } = images.fixed_width_small
        return {id, title, url}
      })
      return newData;
    }
}

export async function searchDetails({id = "fZdzEHC8sMC0E"} = {}) {
  const URL = `https://api.giphy.com/v1/gifs/${id}?${API_KEY}`;

  const response = await fetch(URL);
  const datos = await response.json();

  const { data } = datos

  const {title, username } = data
  const { url } = data.images.fixed_width
  console.log(title,username, url)

  return {title, username, url}


  const newData = datos.map(el => {
    const {title, username, url} = el;

    return {title, username, url}
  })
  
  return newData
}