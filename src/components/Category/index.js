import { Link } from 'wouter';

import './styles.css'

export default function Category({ name, options = []}) {
  return (
    <section className='Category'>
      <h3 className='Category-title'>{name}</h3>
      <ul className='Category-list'>
        {
          options.map( el => (
            <li 
              key={el}
              className='Category-link'>
              <Link to={`/search/${el}`}>{el}</Link>
            </li>
          ))
        }
      </ul>
    </section>

  );
}