import { memo } from 'react'
import { Link } from 'wouter';
import './style.css'

function Gif({id, title, url}) {
    return (
      <Link to={`/detail/${id}`} className="Gif">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    );
} 

export default memo(Gif)