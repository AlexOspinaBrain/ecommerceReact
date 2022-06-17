import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

import OrderItem from '@components/OrderItem';


import '@styles/MyOrder.scss';
import logo from '@logos/logo_yard_sale.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	useEffect(()=>{
		console.log(state);
	},[])
		
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={logo} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product=>(
					<OrderItem product={product} key={`productItem-${product.id}`}/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
