import React, { useState } from 'react';

import GoodsList from './components/GoodsList';
import ShoppingCart from './components/ShoppingCart';
import cartImage from './images/shopping-cart.svg';

import './App.css';

const initialGoodsList = [
  {
    id: 1,
    name: 'Банан',
    price: 10,
    quantity: 0,
    total: 0,
  },
  {
    id: 2,
    name: 'Яблоко',
    price: 8,
    quantity: 0,
    total: 0,
  },
  {
    id: 3,
    name: 'Папайя',
    price: 10,
    quantity: 0,
    total: 0,
  }
]

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [goodsList, setGoodsList] = useState(initialGoodsList);

  const handleShowCart = () => {
    setIsCartOpened(!isCartOpened);
  }

  const calculateItemTotal = (item) => {
    if (item.id === 3) {
      const discount = item.quantity / 3;

      return item.quantity * item.price - Math.trunc(discount) * 5;
    } else {
      return item.quantity * item.price
    }
  }

  const addItemToCart = (item) => () => {
    const newGoodsList = goodsList.map(good => ({
      ...good,
      quantity: good.id === item.id ? ++good.quantity : good.quantity,
      total: calculateItemTotal(good)
    }));
    setGoodsList(newGoodsList);
  }

  const removeItemFromCart = (item) => () => {
    const newGoodsList = goodsList.map(good => ({
      ...good,
      quantity: good.id === item.id && good.quantity > 0 ? --good.quantity : good.quantity,
      total: calculateItemTotal(good)
    }));
    setGoodsList(newGoodsList);
  }

  return (
    <div className="App">
      <div className={'BodyListApp'}>
      <GoodsList
        goodsList={goodsList}
        addItemToCart={addItemToCart}
      />
      <img
        src={cartImage}
        alt="shopping-cart"
        className={'ImgShopCart'}
        onClick={handleShowCart}
      />
      </div>
      {isCartOpened && (
        <ShoppingCart
          goodsList={goodsList}
          removeItemFromCart={removeItemFromCart}
        />
      )}
    </div>
  );
}

export default App;
