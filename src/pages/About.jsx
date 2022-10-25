import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import AboutComp from "./components/AboutComp";
import Offer from "./components/Offer";
import Team from "./components/Team";
import Footer from "./components/Footer";

function About() {
	return (
		<>
			<AboutComp />
			<Offer />
			<Team />
		</>
	);
}

export default About;
