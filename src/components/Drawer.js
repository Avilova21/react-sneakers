import React from 'react';
import axios from 'axios';

import Info from "./info";
import AppContext from "../context";

const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const [ orderId, setOrderId] = React.useState(null);
	const [isOrderComplete, setIsOrderComplete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.post('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/orders', {
				items: cartItems,
			});
			setOrderId(data.id);
			setIsOrderComplete(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
					await axios.delete('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/cart/' + item.id);
					await deley(1000);
			}
		} catch (error) {
			alert('Не удалось создать заказ :(')
		}
		setIsLoading(false);
	};

	return (
		<div className="overlay">
			<div className="drawer">
				<h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
				{items.length > 0 ? (
						<div className="dra">
							<div className="items">
								{items.map((obj) => (
									<div key={obj.id} className="cartItem">
										<div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
										<div className="nike">
											<p>{obj.title}</p>
											<b>{obj.price}</b>
										</div>
										<img
											onClick={() => onRemove(obj.id)}
											className="removeBtn"
											src="/img/btn-remove.svg"
											alt="remove"
										/>
									</div>
								))}
							</div>
							<div className="cartTotalBlock">
								<ul>
									<li>
										<span>Итого:</span>
										<div></div>
										<b>21 498 руб. </b>
									</li>
									<li>
										<span>Налог 5%: </span>
										<div></div>
										<b>1074 руб. </b>
									</li>
								</ul>
								<button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
							</div>
						</div>
					) : (
            <Info
	            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
	            description={isOrderComplete
		            ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
		            : "Добавьте хотябы одну пару кроссовок, чтобы сделать заказ"
						}
	            image={isOrderComplete ? "/img/complete-order.jpg" : "/img/cart.png"}
            />
					)
				}


			</div>
		</div>
	);
}

export default Drawer;