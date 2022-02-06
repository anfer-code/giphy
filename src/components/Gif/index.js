import './style.css'
import { Link } from 'wouter';

export default function Gif({id, title, url}) {
    return (
      <Link to={`/detail/${id}`} className="Gif">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    );
} 