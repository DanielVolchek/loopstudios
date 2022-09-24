import React from "react";
import useBreakpoints from "../../hooks/useWindowDimensions";
import styles from "./Creations.module.scss";

export default function Creations() {
	const breakpoint = useBreakpoints();

	return (
		<section className={styles.creations}>
			<div className={styles.before}>
				<h2>Our Creations</h2>
				{breakpoint === "desktop" ? <button>See all</button> : <></>}
			</div>
			<div className={styles.imageGrid}>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-deep-earth.jpg`,
					}}>
					<h3>DEEP EARTH</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-night-arcade.jpg`,
					}}>
					<h3>NIGHT ARCADE</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-soccer-team.jpg`,
					}}>
					<h3>SOCCER TEAM VR</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-grid.jpg`,
					}}>
					<h3>THE GRID</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-from-above.jpg`,
					}}>
					<h3>FROM UP ABOVE VR</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-pocket-borealis.jpg`,
					}}>
					<h3>POCKET BOREALIS</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-curiosity.jpg/`,
					}}>
					<h3>THE CURIOSITY</h3>
				</div>
				<div
					style={{
						backgroundImage: `url(images/${breakpoint}/image-fisheye.jpg`,
					}}>
					<h3>MAKE IT FISHEYE</h3>
				</div>
			</div>
			<div className={styles.after}>
				{breakpoint === "mobile" ? <button>See all</button> : <></>}
			</div>
		</section>
	);
}
