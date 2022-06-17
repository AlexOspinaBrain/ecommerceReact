import React from 'react';
import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png';

const OrderItem = (product) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
