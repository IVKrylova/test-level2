import Card from '../Card/Card';
import { catFood } from '../../utils/data';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <section className='catalog'>
      <h1 className='main-title'>Ты сегодня покормил кота?</h1>
        <ul className='card-list'>
          {catFood.map(food => {
            return (
              <Card
                food={food}
                key={food.id}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
