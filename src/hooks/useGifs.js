import { useContext, useEffect, useState } from 'react'; 
import { searchGifs } from 'services/searchData';
import { GifContext } from 'context/GifContext'

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null }) {
  
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)

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
  
  
  useEffect(
    () => {
      if(page === INITIAL_PAGE) return

      setLoadingNextPage(true)
      searchGifs({keyword: keywordToUse, page})
        .then( nextGifs => {
          setGifs( prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
    }, [page, keywordToUse, setGifs])

  return {loading, gifs, loadingNextPage, setPage}
};
