import { useState, useEffect } from "react";
import { searchDetails } from "../../services/searchData";

export default function GifDetail({params}) {

    const [detail, setDetail] = useState({})
    const { id } = params 

    useEffect(
        function(){
            searchDetails({id}).then( res => setDetail(res))
        }
    , [id])

    return (
      <div className="Gif">
        <h4>{detail.title}</h4>
        <p>{detail.username}</p>
        <img src={detail.url} alt={detail.title} />
      </div>
    );
} 