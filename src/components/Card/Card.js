import './Card.css';

const Card = (props) => {
  const packageQuantity = props.food.packageQuantity === 1
    ? '1 порция'
    : (props.food.packageQuantity > 1 && props.food.packageQuantity < 5)
      ? `${props.food.packageQuantity} порции`
      : `${props.food.packageQuantity} порций`;
  const giftMouse = props.food.giftMouse === 1
  ? 'мышь в подарок'
  : (props.food.giftMouse > 1 && props.food.giftMouse < 5)
    ? `${props.food.giftMouse} мыши в подарок`
    : `${props.food.giftMouse} мышей в подарок`;
  const cardDescriptionItemAdditionClass = `card__description-item ${props.food.addition ? '' : 'card__description-item_hidden'}`

  return (
    <li className='card-item'>
      <div className='card'>
        <p className='card__type'>{props.food.type}</p>
        <h2 className='card__name'>{props.food.name}</h2>
        <p className='card__testy'>{props.food.testy}</p>
        <ul className='card__description'>
          <li className='card__description-item'>
            {packageQuantity}
          </li>
          <li className='card__description-item'>
            {giftMouse}
          </li>
          <li className={cardDescriptionItemAdditionClass}>
            {props.food.addition}
          </li>
        </ul>
        <img className='card__img' src={props.food.img} alt={`${props.food.name} ${props.food.testy}`} />
        <p className='card__weight'>
          {props.food.weight} <span className='card__weight-unit'>кг</span>
        </p>
      </div>
      <p className='byline'>
        Чего сидишь? Порадуй котэ, <button className='byline__button' type='bytton'>купи.</button>
      </p>
    </li>
  );
}

export default Card;
