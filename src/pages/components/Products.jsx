import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Products() {
	return (
		<div className="container-fluid py-5">
			<div className="container">
				<div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
					<h6 className="text-primary text-uppercase">Products</h6>
					<h1 className="display-5 text-uppercase mb-0">Products For Your Best Friends</h1>
				</div>
				<OwlCarousel items={3} className="owl-theme owl-carousel product-carousel" loop nav margin={8}>
					<div className="pb-5">
						<div className="product-item position-relative bg-light d-flex flex-column text-center">
							<img className="img-fluid mb-4" src="img/product-1.png" alt />
							<h6 className="text-uppercase">Quality Pet Foods</h6>
							<h5 className="text-primary mb-0">$199.00</h5>
							<div className="btn-action d-flex justify-content-center">
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-cart" />
								</a>
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-eye" />
								</a>
							</div>
						</div>
					</div>
					<div className="pb-5">
						<div className="product-item position-relative bg-light d-flex flex-column text-center">
							<img className="img-fluid mb-4" src="img/product-2.png" alt />
							<h6 className="text-uppercase">Quality Pet Foods</h6>
							<h5 className="text-primary mb-0">$199.00</h5>
							<div className="btn-action d-flex justify-content-center">
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-cart" />
								</a>
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-eye" />
								</a>
							</div>
						</div>
					</div>
					<div className="pb-5">
						<div className="product-item position-relative bg-light d-flex flex-column text-center">
							<img className="img-fluid mb-4" src="img/product-3.png" alt />
							<h6 className="text-uppercase">Quality Pet Foods</h6>
							<h5 className="text-primary mb-0">$199.00</h5>
							<div className="btn-action d-flex justify-content-center">
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-cart" />
								</a>
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-eye" />
								</a>
							</div>
						</div>
					</div>
					<div className="pb-5">
						<div className="product-item position-relative bg-light d-flex flex-column text-center">
							<img className="img-fluid mb-4" src="img/product-4.png" alt />
							<h6 className="text-uppercase">Quality Pet Foods</h6>
							<h5 className="text-primary mb-0">$199.00</h5>
							<div className="btn-action d-flex justify-content-center">
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-cart" />
								</a>
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-eye" />
								</a>
							</div>
						</div>
					</div>
					<div className="pb-5">
						<div className="product-item position-relative bg-light d-flex flex-column text-center">
							<img className="img-fluid mb-4" src="img/product-2.png" alt />
							<h6 className="text-uppercase">Quality Pet Foods</h6>
							<h5 className="text-primary mb-0">$199.00</h5>
							<div className="btn-action d-flex justify-content-center">
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-cart" />
								</a>
								<a className="btn btn-primary py-2 px-3" href>
									<i className="bi bi-eye" />
								</a>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
}

export default Products;
