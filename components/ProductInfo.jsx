import React from 'react';
import Image from 'next/image';
import '@styles/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" width={250} height={250}  />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="primary-button add-to-cart-button">
					<Image src={addToCart} alt="add to cart" width={20} height={20} />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;
