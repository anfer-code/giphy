import { useContext, useEffect, useState } from 'react'; 
import { searchGifs } from 'services/searchData';
import { GifContext } from 'context/GifContext'

const INITIAL_PAGE = 0;

export default function useGifs({ keyword, limit = 5 } = {}) {
  
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)

  const {gifs, setGifs} = useContext(GifContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(
    function () {
      setLoading(true)
      searchGifs({keyword : keywordToUse, limit})
        .then( data => {
          setGifs(data)
          setLoading(false)
          localStorage.setItem('lastKeyword', keyword)
        })
    }
  , [keyword, keywordToUse, setGifs, limit])
  
  
  useEffect(
    () => {
      if(page === INITIAL_PAGE) return

      setLoadingNextPage(true)
      searchGifs({keyword: keywordToUse, page})
        .then( nextGifs => {
          setGifs( prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
          localStorage.setItem('lastKeyword', keyword)
        })
    }, [page, keywordToUse, setGifs, keyword])

  return {loading, gifs, loadingNextPage, setPage}
};
