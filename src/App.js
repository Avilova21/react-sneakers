import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue ] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		fetch('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems(prevState => [...prevState, obj]);
	};

	const onChangeSearchInput = (event) =>{
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper">
			{cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)}/> }
			<Header onClickCart = {() => setCartOpened(true)} />

			<div className="content">
				<div className="search">
					<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="search"/>
						{searchValue && (
							<img
								onClick={() => setSearchValue ('')}
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="remove"
							/>
						)}
						<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
					</div>
				</div>

				<div className="all">
					{items
						.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onFavorite={() => console.log('Добавили закладки')}
							onPlus={(obj) => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App;
