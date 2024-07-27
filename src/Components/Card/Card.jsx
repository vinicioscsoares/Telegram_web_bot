import React, {useState} from 'react';
import './Card.css';

function Card(food) {
  
  const [count, setCount] = useState(0);

  const { title, Image, price, id } = food;
  
  return (
    <div className='card'>
      <span className={`${count !==0 ? 'card__badge' : 'card__badge--hidden'}`}>{count}</span>
      <div className='image__container'>
        <img src={Image} alt={title} />
      </div>
      <h4 className='card__title'>
        {title} . <span className='card__price'>{price}</span>
      </h4>

      
    </div>
  )
}

export default Card