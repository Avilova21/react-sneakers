function Card() {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/heart-unliked.svg" alt="unliked"/>
			</div>
			<img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers"/>
			<h5>Мужские Кроссовки Nike Air Max 270</h5>
			<div className="sneakers">
				<div className="price">
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className="button">
					<img width={11} height={11} src="/img/Pluse.svg" alt="Pluse"/>
				</button>
			</div>
		</div>
	);
}

export default Card;








