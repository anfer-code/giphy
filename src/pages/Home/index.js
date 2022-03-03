import ListOfGif from "components/ListOfGifs";
import Spinner from "components/Spinner";
import useGifs from "hooks/useGifs";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const LAST_SEARCHES = ["Luffy", "Zoro", "Sanji"]

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
      <section>
        <h2>Ultimas busquedas</h2>
        {
          loading ? 
          <Spinner /> :
          <ListOfGif gifs={gifs}/>
        }
      </section>
      <section>
        <h2>Trending Searches</h2>
        <ul>
          {
            LAST_SEARCHES.map( el => (<li key={el}>
              <Link to={`/search/${el}`}>{el}</Link>
            </li>))
          }
        </ul>
      </section>
    </>
  );
};
