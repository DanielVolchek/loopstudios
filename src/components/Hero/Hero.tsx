import styles from "./Hero.module.scss";
import Nav from "./Nav";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className={styles.hero}>
			<Nav />
			<h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
			<div className={styles.spacer}></div>
		</div>
	);
}
