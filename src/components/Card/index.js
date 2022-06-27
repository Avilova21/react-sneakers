import styles from './Card.module.scss';

function Card (props) {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src="/img/heart-unliked.svg" alt="unliked"/>
			</div>
			<img width={133} height={112} src={props.imageUrl} alt="sneakers"/>
			<h5>{props.title}</h5>
			<div className={styles.sneakers}>
				<div className={styles.price}>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className="button" onClick={props.onClick}>
					<img width={11} height={11} src="/img/Pluse.svg" alt="Pluse"/>
				</button>
			</div>
		</div>
	);
}

export default Card;