import { useEffect, useState } from 'react'; 
import { searchGifs } from '../../services/searchData';
import Gif from "../Gif"

export default function ListOfGif({params}) {

  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(
    function () {
      searchGifs({keyword})
        .then( data => setGifs(data))
    }
  , [keyword])

  return (
    <>
      {
        gifs.map(({ id,url,title }) => (
          <Gif 
              key={id}
              url={url}
              title={title}
              id={id}
          />
        ))
      }
    </>
    
  )
};
