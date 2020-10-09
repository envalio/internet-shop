import React from 'react';

export default function ShoppingCart({ goodsList, removeItemFromCart }) {

  const renderItem = (item) => (
    <div key={item.id} className={'ShopItem'}>
      <p className={'MargirRight10px'}>{item.name} -</p>
      <p className={'MargirRight10px'}>{item.quantity} -</p>
      <p className={'MargirRight10px'}>${item.total}</p>
      <button onClick={removeItemFromCart(item)} className={'ButtonStle'}>Remove item</button>
    </div>
  )

  if (!goodsList.filter(item => item.quantity).length) {
    return (
      <div>Cart is empty.</div>
    )
  }

  const calculateTotalPrice = () => {
    return goodsList.reduce((acc, item) => acc + item.total, 0);
  }

  return (
    <div className={'ModalCart'}>
      {goodsList.map(item => item.quantity ? renderItem(item) : null)}
      <div className={'FullPrice'}>
        Full Price: ${calculateTotalPrice()}
      </div>
    </div>
  )
}
