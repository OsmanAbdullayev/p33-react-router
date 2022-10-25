import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Offer from "./components/Offer";
import Pricingplan from "./components/Pricingplan";
import Footer from "./components/Footer";

function Product() {
	return (
		<>
			<Products />
			<Offer />
			<Pricingplan />
		</>
	);
}

export default Product;
