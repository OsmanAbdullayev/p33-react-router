import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Videomodal from "./components/Videomodal";
import AboutComp from "./components/AboutComp";
import Services from "./components/Services";
import Products from "./components/Products";
import Offer from "./components/Offer";
import Pricingplan from "./components/Pricingplan";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function Home() {
	return (
		<>
			<Hero />
			<Videomodal />
			<AboutComp />
			<Services />
			<Products />
			<Offer />
			<Pricingplan />
			<Team />
			<Testimonial />
			<Blog />
		</>
	);
}

export default Home;
