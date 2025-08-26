import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/" class="bob">Home</Link>
							</li>
							<br></br>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects" class="bob">Projects</Link>
							</li>
							<br></br>
							<li
								className={
									active === "teaching-n-coursework"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/teaching-n-coursework" class="bob">Teaching & Coursework</Link>
							</li>
							<br></br>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles" class="bob">TBD</Link>
							</li>
							<br></br>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact" class="bob">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
