import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
	return (
		<div className="content">
			<div className="search">
				<h1>Мои закладки</h1>
			</div>

			<div className="all">
				{items
				.map((item, index) => (
					<Card
						key={index}
						favorited={true}
						onFavorite={onAddToFavorite}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;