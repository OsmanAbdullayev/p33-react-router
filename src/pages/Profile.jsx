import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../data/auth";

const Profile = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [keepLogged, setKeepLogged] = useState(false);
	const [alert, setAlert] = useState("");
	const [text, setText] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setAlert("alert alert-warning");
			setText("Please, fill in the empty fields");
		} else {
			setText("");
			if (data.email == email && data.password == password) {
				setAlert("alert alert-success");
				setText("You successfully logged in!");
				navigate("/");
				console.log(keepLogged);
			} else {
				setAlert("alert alert-danger");
				setText("Credentials are wrong.");
			}
		}
	};

	const handleClick = () => {
		setKeepLogged((prevKeepLogged) => !prevKeepLogged);
	};

	return (
		<div className="container py-5">
			<form onSubmit={handleSubmit}>
				<h2 className="text-center pb-5">Please, fill in your credentials</h2>
				<h3 className={`text-center ${alert}`}>{text}</h3>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="inputEmail3"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputPassword3"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="gridCheck1" onClick={handleClick} />
							<label className="form-check-label" htmlFor="gridCheck1">
								Keep me logged in
							</label>
						</div>
					</div>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">
						Sign in
					</button>
				</div>
			</form>
		</div>
	);
};

export default Profile;
