import { useContext, useEffect, useState } from 'react'; 
import { searchGifs } from 'services/searchData';
import { GifContext } from 'context/GifContext'


export default function useGifs({ keyword } = { keyword: null }) {
  
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(
    function () {
      setLoading(true)
      searchGifs({keyword : keywordToUse})
        .then( data => {
          setGifs(data)
          setLoading(false)
          localStorage.setItem('lastKeyword', keyword)
        })
    }
  , [keyword, keywordToUse, setGifs])
  
  return {loading, gifs}
};
