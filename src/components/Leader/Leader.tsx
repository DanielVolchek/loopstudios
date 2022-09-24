import useBreakpoints from "../../hooks/useWindowDimensions";
import styles from "./Leader.module.scss";

export default function Leader() {
	const size = useBreakpoints();

	return (
		<section className={styles.leader}>
			<div className={styles.content}>
				<img
					src={`images/${size}/image-interactive.jpg`}
					alt="man using loopstudios vr headset"
				/>
				<div className={styles.abs}>
					<h2>THE LEADER IN INTERACTIVE VR</h2>
					<p>
						Founded in 2011, Loopstudios has been producing
						world-class virtual reality projects for some of the
						best companies around the globe. Our award-winning
						creations have transformed businesses through digital
						experiences that bind to their brand.
					</p>
				</div>
			</div>
		</section>
	);
}
