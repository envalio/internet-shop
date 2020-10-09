import React from 'react';

export default function GoodsList({ goodsList, addItemToCart }) {

	return (
		<div>
			{goodsList.map(item => (
				<div key={item.id} className={'GoodsListItem'}>
					<p className={'MargirRight10px'}>{item.name} -</p>
					<p className={'MargirRight10px'}>${item.price}</p>
					<button  onClick={addItemToCart(item)} className={'ButtonStle'}>Add to cart</button>
				</div>
			))}
		</div>
	)
}
