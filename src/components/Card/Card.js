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

  return (
    <li className='card'>
      <p className='card__type'>{props.food.type}</p>
      <h2 className='card__name'>{props.food.name}</h2>
      <p className='card__testy'>{props.food.testy}</p>
      <ul className='card__description'>
        <li>{packageQuantity}</li>
        <li>{giftMouse}</li>
        <li>{props.food.addition && props.food.addition}</li>
      </ul>
      <img className='card__img' src={props.food.img} alt={`${props.food.name} ${props.food.testy}`} />
      <p className='card__weight'>{`${props.food.weight} кг`}</p>
    </li>
  );
}

export default Card;
