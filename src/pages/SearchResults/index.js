import ListOfGif from "components/ListOfGifs";
import Spinner from 'components/Spinner';
import useGifs from "hooks/useGifs";

export default function SearchResults({params}) {
  
  const { keyword } = params
  const { loading, gifs} = useGifs({keyword})

  return (
    <>
      {
        
        loading ? 
        <Spinner /> :
        <ListOfGif gifs={gifs}/>
      }
    
    </>
  );
};
