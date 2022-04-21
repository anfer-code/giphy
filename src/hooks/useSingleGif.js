import { useState, useEffect } from "react";
import { searchDetails } from "services/searchDetail";
import useGifsGlobal from "./useGifsGlobal";

function useSinglGif ({id}) {
  const gifs = useGifsGlobal()
  const cachedGif = gifs.find( el => el.id === id) 

  const [gif, setGif] = useState(cachedGif)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    if (!gif) {
      setLoading(true)
        searchDetails({id})
          .then( res => {
            setGif(res)
          })
          .catch( () => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          })
    }
  }, [gif, id])

  return {gif, loading, error}
}

export { useSinglGif }