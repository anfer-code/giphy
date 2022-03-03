import ListOfGif from "components/ListOfGifs";
import Spinner from 'components/Spinner';
import useGifs from "hooks/useGifs";

export default function SearchResults({params}) {
  
  const { keyword } = params
  const { loading, gifs, setPage} = useGifs({keyword})

  const handleNextPage = () => {setPage(prev => prev + 1)
    console.log(gifs)
  }

  return (
    <>
      {
        loading ? 
        <Spinner /> :
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGif gifs={gifs}/>
        </>
      }
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};
