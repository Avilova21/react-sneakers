function App() {
	return (
		<div className="wrapper">
			<header>
				<div className="headerLeft">
					<img width={40} height={40} src="/img/logo.png" alt="logo"/>
					<div>
						<h3>REACT SNEAKERS</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>

				<ul className="headerRight">
					<li>
						<img width={18} height={18} src="/img/cart.svg" alt="cart"/>
						<spa> 1205 руб.</spa>
					</li>
					<li>
						<img width={18} height={18} src="/img/Union.svg" alt="Union"/>
					</li>
				</ul>
			</header>

			<div className="content">
				<h1>Все кроссовки</h1>

				<div className="all">
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers"/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
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
					<div className="card">
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
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers"/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="sneakers">
							<div className="price">
								<span>Цена:</span>
								<b>8 499 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/Pluse.svg" alt="Pluse"/>
							</button>
						</div>

					</div>
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers"/>
						<h5>Кроссовки Puma X Aka Boku Future Rider</h5>
						<div className="sneakers">
							<div className="price">
								<span>Цена:</span>
								<b>8 999 руб.</b>
							</div>
							<button className="button">
								<img width={11} height={11} src="/img/Pluse.svg" alt="Pluse"/>
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default App;
