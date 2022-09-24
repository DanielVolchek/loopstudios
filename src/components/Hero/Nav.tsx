import { useEffect, useRef, useState } from "react";
import useBreakpoints from "../../hooks/useWindowDimensions";
import styles from "./Hero.module.scss";
import Logo from "./Logo";

type Props = {};

export default function Nav({}: Props) {
	const [visState, setVisState] = useState(false);
	const br = useBreakpoints();

	useEffect(() => {
		if (visState && br === "desktop") {
			setVisState(false);
		}
	}, [br]);

	useEffect(() => {
		if (visState) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [visState]);

	return (
		<div
			className={`${styles.nav} ${
				visState && br === "mobile" ? styles.cover : ""
			}`}>
			<Logo />
			<div
				className={`${styles.links} ${
					visState ? styles.visible : styles.hidden
				}`}>
				<a href="#about">About</a>
				<a href="#careers">Careers</a>
				<a href="#events">Events</a>
				<a href="#products">Products</a>
				<a href="#support">Support</a>
			</div>
			{!visState ? (
				<svg
					className={styles.hamburger}
					onClick={() => setVisState(!visState)}
					width="24"
					height="16"
					xmlns="http://www.w3.org/2000/svg">
					<g fill="#FFF" fill-rule="evenodd">
						<path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
					</g>
				</svg>
			) : (
				<svg
					width="20"
					height="20"
					className={styles.close}
					onClick={() => setVisState(!visState)}
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
						fill="#FFF"
						fill-rule="evenodd"
					/>
				</svg>
			)}
		</div>
	);
}
