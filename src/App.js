import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
	{
		title: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 12999,
		imageUrl: "/img/sneakers/1.jpg"
	},
	{
		title: "Мужские Кроссовки Nike Air Max 270",
		price: 12999,
		imageUrl: "/img/sneakers/2.jpg"
	},
	{
		title: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 8499,
		imageUrl: "/img/sneakers/3.jpg"
	},
	{
		title: "Кроссовки Puma X Aka Boku Future Rider",
		price: 8999,
		imageUrl: "/img/sneakers/4.jpg"
	}
];

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
			<Drawer/>
			<Header/>

			<div className="content">
				<div className="search">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="search"/>
						<input placeholder="Поиск..."/>
					</div>
				</div>

				<div className="all">
					{arr.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onClick={() => console.log(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App;
