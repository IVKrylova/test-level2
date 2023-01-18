import { useEffect, useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [isCardDisabled, setIsCardDisablet] = useState(false);

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
  const cardDescriptionItemAdditionClass = `card__description-item ${props.food.addition ? '' : 'card__description-item_hidden'}`;
  const cardClass = `card ${isCardDisabled ? 'card_disabled' : isCardSelected ? 'card_selected' : ''}`;
  const cardWeightClass = `card__weight ${isCardDisabled ? 'card__weight_disabled' : isCardSelected ? 'card__weight_selected' : ''}`;

  useEffect(() => {
    Number(props.food.stockQuantity) === 0 && setIsCardDisablet(true);
  }, []);

  const hendleClickBuy = () => {
    setIsCardSelected(true);
  }

  const handleCardClick = () => {
    if (!isCardDisabled) {
      isCardSelected ? setIsCardSelected(false) : setIsCardSelected(true);
    }
  }

  return (
    <li className='card-item'>
      <div className={cardClass} onClick={handleCardClick}>
        <p className={`card__type ${isCardDisabled ? 'card__type_disabled' : ''}`}>{props.food.type}</p>
        <h2 className={`card__name ${isCardDisabled ? 'card__name_disabled' : ''}`}>{props.food.name}</h2>
        <p className={`card__taste ${isCardDisabled ? 'card__taste_disabled' : ''}`}>{props.food.taste}</p>
        <ul className={`card__description ${isCardDisabled ? 'card__description_disabled' : ''}`}>
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
        <p className={cardWeightClass}>
          {props.food.weight} <span className='card__weight-unit'>кг</span>
        </p>
      </div>
      {isCardDisabled
        ? <p className='byline byline_disabled'>
          {`Печалька, ${props.food.taste} закончился.`}
        </p>
        : isCardSelected && !isCardDisabled
          ? <p className='byline'>{`${props.food.description}.`}</p>
          : <p className='byline'>
            Чего сидишь? Порадуй котэ, <button className='byline__button' type='bytton' onClick={hendleClickBuy}>купи.</button>
          </p>
      }
    </li>
  );
}

export default Card;
