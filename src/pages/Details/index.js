import Gif from "components/Gif";
import useGifsGlobal from "hooks/useGifsGlobal";

export default function GifDetail({params}) {

  const { id } = params 
  const gif = useGifsGlobal()

  const data = gif.find( el => el.id === id)

    // const [detail, setDetail] = useState({})

    // useEffect(
    //     function(){
    //         searchDetails({id}).then( res => setDetail(res))
    //     }
    // , [id])

    return (
      <div className="Gif">
        {/* <h4>{detail.title}</h4>
        <p>{detail.username}</p>
        <img src={detail.url} alt={detail.title} /> */}
        <Gif {...data}/>
      </div>
    );
} 