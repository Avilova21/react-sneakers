function Drawer({ onClose, onRemove, items = [] }) {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
				{
					items.length > 0 ? (
						<div>
							<div className="items">
								{items.map((obj) => (
									<div className="cartItem">
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
								<button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
							</div>
						</div>
					) : (
						<div className="cartEmpty">
							<img width="120" height="120" src="/img/cart.png" alt="cart"/>
							<h2>Корзина пустая</h2>
							<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
							<button onClick={onClose} className="greenButton">
								<img src="" alt=""/>Вернуться назад
							</button>
						</div>
					)
				}


			</div>
		</div>
	);
}

export default Drawer;