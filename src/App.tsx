import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Leader from "./components/Leader/Leader";
import "./App.css";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<main>
			<Hero />
			<section className="rest">
				<Leader />
				<Creations />
			</section>
			<Footer />
		</main>
	);
}

export default App;
