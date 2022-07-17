import Card from "../components/Card";

function Home(
	{
		items,
		searchValue,
		setSearchValue,
		onChangeSearchInput,
		onAddToFavorite,
		onAddToCart
	}) {
	return (
		<div className="content">
			<div className="search">
				<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
				<div className="search-block">
					<img src="/img/search.svg" alt="search"/>
					{searchValue && (
						<img
							onClick={() => setSearchValue("")}
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
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToCart(obj)}
							{...item}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;