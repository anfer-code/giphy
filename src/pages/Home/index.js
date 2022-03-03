import ListOfGif from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import useGifs from "hooks/useGifs";
import { useState } from "react";
import { useLocation } from "wouter";


export default function Home() {
  const [valueFilter, setValueFilter] = useState("")
  const [location, setLocation] = useLocation();
  const {gifs, loading} = useGifs()
  

  const handlerChange = ev => {
    setValueFilter(ev.target.value)
  }

  const handlerSubmit = ev => {
    ev.preventDefault()
    setLocation(`/search/${valueFilter}`)
  }

  return (
    <>
      <form 
        className="Searcher"
        onSubmit={handlerSubmit}
      >
        <input 
          value={valueFilter}
          onChange={handlerChange}
        />
      </form>
      <section className="Last-Seaches">
        <h2>Ultimas busquedas</h2>
        {
          loading ? 
          <Spinner /> :
          <ListOfGif gifs={gifs}/>
        }
      </section>
      <TrendingSearches />
    </>
  );
};
