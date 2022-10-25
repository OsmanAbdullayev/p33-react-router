import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
			<NavLink to="/home" className="navbar-brand ms-lg-5">
				<h1 className="m-0 text-uppercase text-dark">
					<i className="bi bi-shop fs-1 text-primary me-3" />
					Pet Shop
				</h1>
			</NavLink>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<div className="navbar-nav ms-auto py-0">
					<NavLink to="/home" className="nav-item nav-link">
						Home
					</NavLink>
					<NavLink to="/about" className="nav-item nav-link">
						About
					</NavLink>
					<NavLink to="/service" className="nav-item nav-link">
						Service
					</NavLink>
					<NavLink to="/product" className="nav-item nav-link">
						Product
					</NavLink>
					<div className="nav-item dropdown">
						<NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
							Pages
						</NavLink>
						<div className="dropdown-menu m-0">
							<NavLink to="/price" className="dropdown-item">
								Pricing Plan
							</NavLink>
							<NavLink to="/teams" className="dropdown-item">
								The Team
							</NavLink>
							<NavLink to="/testimonials" className="dropdown-item">
								Testimonial
							</NavLink>
							<NavLink to="/blogs" className="dropdown-item">
								Blog Grid
							</NavLink>
							<NavLink to="/details" className="dropdown-item">
								Blog Detail
							</NavLink>
						</div>
					</div>
					<NavLink to="#" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">
						Contact <i className="bi bi-arrow-right" />
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
