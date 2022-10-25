import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
			<Link to="/" className="navbar-brand ms-lg-5">
				<h1 className="m-0 text-uppercase text-dark">
					<i className="bi bi-shop fs-1 text-primary me-3" />
					Pet Shop
				</h1>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<div className="navbar-nav ms-auto py-0">
					<Link to="/" className="nav-item nav-Link active">
						Home
					</Link>
					<Link to="/about" className="nav-item nav-Link">
						About
					</Link>
					<Link to="/service" className="nav-item nav-Link">
						Service
					</Link>
					<Link to="/product" className="nav-item nav-Link">
						Product
					</Link>
					<div className="nav-item dropdown">
						<Link to="#" className="nav-Link dropdown-toggle" data-bs-toggle="dropdown">
							Pages
						</Link>
						<div className="dropdown-menu m-0">
							<Link to="/price" className="dropdown-item">
								Pricing Plan
							</Link>
							<Link to="/teams" className="dropdown-item">
								The Team
							</Link>
							<Link to="/testimonials" className="dropdown-item">
								Testimonial
							</Link>
							<Link to="/blogs" className="dropdown-item">
								Blog Grid
							</Link>
							<Link to="/details" className="dropdown-item">
								Blog Detail
							</Link>
						</div>
					</div>
					<Link to="#" className="nav-item nav-Link nav-contact bg-primary text-white px-5 ms-lg-5">
						Contact <i className="bi bi-arrow-right" />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
