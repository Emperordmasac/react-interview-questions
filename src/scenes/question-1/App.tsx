import { useState } from 'react';
import { cart1, cart2 } from './data';
import Cart from './components/cart';

import './styles.css';

const App = () => {
  const [cartA, setCartA] = useState(cart1);
  const [cartB, setCartB] = useState(cart2);

  const swapOdds = () => {
    const newCartA = [...cartA];
    const newCartB = [...cartB];

    for (let i = 0; i < cartA.length; i += 2) {
      newCartA[i] = cartB[i];
      newCartB[i] = cartA[i];
    }

    setCartA(newCartA);
    setCartB(newCartB);
  };

  return (
    <div className='page flex container'>
      <Cart items={cartA} cartNumber='Cart1' />
      <button className='swap_button' onClick={swapOdds}>
        Swap Odds
      </button>
      <Cart items={cartB} cartNumber='Cart2' />
    </div>
  );
};

export default App;
