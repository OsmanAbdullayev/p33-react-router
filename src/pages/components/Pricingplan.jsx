import React from "react";

function Pricingplan() {
	return (
		<div className="container-fluid py-5">
			<div className="container">
				<div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: 600 }}>
					<h6 className="text-primary text-uppercase">Pricing Plan</h6>
					<h1 className="display-5 text-uppercase mb-0">Competitive Pricing For Pet Services</h1>
				</div>
				<div className="row g-5">
					<div className="col-lg-4 h-25">
						<div className="bg-light text-center pt-5 mt-lg-5">
							<h2 className="text-uppercase">Basic</h2>
							<h6 className="text-body mb-5">The Best Choice</h6>
							<div className="text-center bg-primary p-4 mb-2">
								<h1 className="display-4 text-white mb-0">
									<small className="align-top">
										$
									</small>
									49
									<small className="align-bottom">
										/ Mo
									</small>
								</h1>
							</div>
							<div className="text-center p-4">
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>HTML5 &amp; CSS3</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Bootstrap v5</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Responsive Layout</span>
									<i className="bi bi-x fs-4 text-danger" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Browsers Compatibility</span>
									<i className="bi bi-x fs-4 text-danger" />
								</div>
								<a href className="btn btn-primary text-uppercase py-2 px-4 my-3">
									Order Now
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="bg-light text-center pt-5">
							<h2 className="text-uppercase">Standard</h2>
							<h6 className="text-body mb-5">The Best Choice</h6>
							<div className="text-center bg-dark p-4 mb-2">
								<h1 className="display-4 text-white mb-0">
									<small className="align-top">
										$
									</small>
									99
									<small className="align-bottom">
										/ Mo
									</small>
								</h1>
							</div>
							<div className="text-center p-4">
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>HTML5 &amp; CSS3</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Bootstrap v5</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Responsive Layout</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Browsers Compatibility</span>
									<i className="bi bi-x fs-4 text-danger" />
								</div>
								<a href className="btn btn-primary text-uppercase py-2 px-4 my-3">
									Order Now
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="bg-light text-center pt-5 mt-lg-5">
							<h2 className="text-uppercase">Extended</h2>
							<h6 className="text-body mb-5">The Best Choice</h6>
							<div className="text-center bg-primary p-4 mb-2">
								<h1 className="display-4 text-white mb-0">
									<small className="align-top">
										$
									</small>
									149
									<small className="align-bottom">
										/ Mo
									</small>
								</h1>
							</div>
							<div className="text-center p-4">
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>HTML5 &amp; CSS3</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Bootstrap v5</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Responsive Layout</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<div className="d-flex align-items-center justify-content-between mb-1">
									<span>Browsers Compatibility</span>
									<i className="bi bi-check2 fs-4 text-primary" />
								</div>
								<a href className="btn btn-primary text-uppercase py-2 px-4 my-3">
									Order Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Pricingplan;