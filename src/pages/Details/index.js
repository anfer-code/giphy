import Gif from "components/Gif";
import Spinner from "components/Spinner";
import { useSinglGif } from "hooks/useSingleGif";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";

export default function GifDetail({params}) {
  const { id } = params 
  const {gif, loading, error} = useSinglGif({id})  
  const title = `${gif?.title} | GiphyClon` || ""

  if(loading) return (
    <>
      <Helmet>
        <title>Cargando</title>
      </Helmet>
      <Spinner />
    </>
  )
  if(error) return <Redirect to="/404" />
  if(!gif) return null

    return (
      <div className="Gif">
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
        <Gif {...gif}/>
      </div>
    );
} 