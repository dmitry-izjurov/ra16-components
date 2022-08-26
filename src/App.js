import './App.css';
import ShopItemFunc from './ShopItemFunc';
import ShopItemClass from './ShopItemClass';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <span>Функциональный компонент:</span>
        <ShopItemFunc item={item} />
        <span>class-based компонент:</span>
        <ShopItemClass item={item}/>
      </div>
    </div>
  );
}

export default App;
