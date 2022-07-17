import React from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue ] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		axios.get('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/items').then(res => {
			setItems(res.data);
			});
		axios.get('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/cart').then(res => {
			setCartItems(res.data);
		});
		axios.get('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/favorites').then(res => {
			setFavorites(res.data);
		});
	}, []);

	const onAddToCart = (obj) => {
		axios.post('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/cart', obj);
		setCartItems(prevState => [...prevState, obj]);
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => item.id !== id));
	};

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => favObj.id === obj.id)) {
				axios.delete(`https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/favorites/${obj.id}`);
			} else {
				const { data } = await axios.post('https://62bc12c6eff39ad5ee1bc7e3.mockapi.io/favorites', obj);
				setFavorites(prevState => [...prevState, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты');
		}
	};

	const onChangeSearchInput = (event) =>{
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper">
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)}/>

			<Route path="/" exact>
				<Home
					items={items}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					onChangeSearchInput={onChangeSearchInput}
					onAddToFavorite={onAddToFavorite}
					onAddToCart={onAddToCart}
				/>
			</Route>

			<Route path="/favorites" exact>
				<Favorites
					items={favorites}
					onAddToFavorite={onAddToFavorite}
				/>
			</Route>
		</div>
	);
}

export default App;
