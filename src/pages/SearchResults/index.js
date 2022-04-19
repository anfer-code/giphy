import ListOfGif from "components/ListOfGifs";
import Spinner from 'components/Spinner';
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {

  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prev => prev + 1), 200
  ), [setPage])

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage()
    }
    , [isNearScreen, debounceHandleNextPage])

  return (
    <>
      {
        loading ?
          <Spinner /> :
          <>
            <h3>{decodeURI(keyword)}</h3>
            <ListOfGif gifs={gifs} />
          </>
      }
      <div className="visor" ref={externalRef}></div>
    </>
  );
};
