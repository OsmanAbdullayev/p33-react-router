import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Topbar from "../pages/components/Topbar";
import Navbar from "../pages/components/Navbar";
import Footer from "../pages/components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Price from "../pages/Price";
import Teams from "../pages/Teams";
import Testimonials from "../pages/Testimonials";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Topbar />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/service" element={<Service />}></Route>
				<Route path="/product" element={<Product />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/price" element={<Price />}></Route>
				<Route path="/teams" element={<Teams />}></Route>
				<Route path="/testimonials" element={<Testimonials />}></Route>
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route path="/details" element={<Details />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
