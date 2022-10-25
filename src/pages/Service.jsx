import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricingplan from "./components/Pricingplan";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function Service() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Testimonial />
		</>
	);
}

export default Service;
