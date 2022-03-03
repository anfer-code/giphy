import Gif from "../Gif"
import './styles.css'

export default function ListOfGif({gifs}) {

  return (
    <div className='Results'>
      {
        gifs.map(({ id,url,title }) => (
          <Gif 
              key={id}
              url={url}
              title={title}
              id={id}
          />
        ))
      }
    </div>
    
  )
};
