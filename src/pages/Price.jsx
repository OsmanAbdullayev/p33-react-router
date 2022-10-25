import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Pricingplan from "./components/Pricingplan";
import Team from "./components/Team";
import Footer from "./components/Footer";

function Price() {
	return (
		<>
			<Pricingplan />
			<Offer />
			<Team />
		</>
	);
}

export default Price;
