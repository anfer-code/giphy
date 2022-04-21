import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGif from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import useGifs from "hooks/useGifs";
import './style.css'
import { Helmet } from "react-helmet";


export default function Home() {
  const [ , setLocation] = useLocation();
  const {gifs, loading} = useGifs({limit: 10, })

  const handlerSubmit = useCallback(({keyword}) => {
    console.log(keyword);
    setLocation(`/search/${keyword}`)
  }, [setLocation])

  return (
    <>
      <Helmet>
        <title>
          {loading ? "Cargando..." : "Home | GiphyClon"}
        </title>
      </Helmet>
      <SearchForm onSubmit={handlerSubmit}/>
      <main className="Home">
        <section className="Last-Searches">
          <h2>Ultimas busquedas</h2>
          {
            loading ? 
            <Spinner /> :
            <ListOfGif gifs={gifs}/>
          }
        </section>
        <TrendingSearches />
      </main>
      
    </>
  );
};
