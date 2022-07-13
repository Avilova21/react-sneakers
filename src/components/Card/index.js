import React from "react";
import styles from './Card.module.scss';

function Card ({onFavorite, title, imageUrl, price, onPlus }) {
	const [isAdded, setIsAdded] = React.useState (false);

	const onClickPlus = () => {
		onPlus({ title, imageUrl, price });
		setIsAdded (!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onFavorite} >
				<img src="/img/heart-unliked.svg" alt="unliked"/>
			</div>
			<img width={133} height={112} src={imageUrl} alt="sneakers"/>
			<h5>{title}</h5>
			<div className={styles.sneakers}>
				<div className={styles.price}>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
					<img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-pluse.svg"} alt="Pluse"/>
			</div>
		</div>
	);
}

export default Card;