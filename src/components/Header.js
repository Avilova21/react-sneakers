import { Link } from 'react-router-dom';

function Header (props) {
	return (
		<header>
			<Link to="/">
			<div className="headerLeft">
				<img width={40} height={40} src="/img/logo.png" alt="logo"/>
				<div>
					<h3>REACT SNEAKERS</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			</Link>

			<ul className="headerRight">
				<li onClick={props.onClickCart}>
					<img width={18} height={18} src="/img/cart.svg" alt="cart"/>
					<span> 1205 руб.</span>
				</li>
				<li className="heart">
					<Link to="/favorites">
						<img width={18} height={18} src="/img/heart.svg" alt="Закладки"/>
					</Link>
				</li>
				<li>
					<img width={18} height={18} src="/img/Union.svg" alt="Union"/>
				</li>
			</ul>
		</header>
	);
}

export default Header;