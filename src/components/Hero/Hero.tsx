import useBreakpoints from "../../hooks/useWindowDimensions";
import styles from "./Hero.module.scss";
import Nav from "./Nav";

type Props = {};

export default function Hero({}: Props) {
	const br = useBreakpoints();

	return (
		<div
			className={styles.hero}
			style={{
				backgroundImage: `url(images/${br}/image-hero.jpg`,
			}}>
			<Nav />
			<h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
			<div className={styles.spacer}></div>
		</div>
	);
}
