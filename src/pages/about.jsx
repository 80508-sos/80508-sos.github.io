import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import TimeTable from "../components/about/timetable";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					
					<div className="about-container">
						<div className="title about-title">
							{INFO.about.title}
						</div>
						<div className="about-subtitle">Teaching:</div>
						<br></br>
						<div>
							<TimeTable />
						</div>
						<div className="teaching_year">CS 61BL, Summer 25</div>
						<div className="coursework_year" align="center">Discussion + Lab TA, Exam + Lab Dev</div>
						<br></br>
						<table>
							<thead>
								<th>Lab</th>
								<th>Slides</th>
							</thead>
							<tbody>
								<td>
									<a>...</a>
								</td>
								<td>
									<a>...</a>
								</td>
							</tbody>
							{/* <tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab01/">Java & Git</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1wbIL8Htwvqm6sXsWq8S_vB0pZP4lSDIdef3ePzV4Bt4/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab02/">Conditionals, Loops, and Arrays</a>
								</td>
								<td>
									<a>N/A</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab03/">Intro to Objects and Primitives</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1srl6HW0_noEjUqR0J3xHQtXir7g9gih3WbIPihosCeM/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab04/">Test Driven Development and Debugging</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1wfCgb0O2PgzoF6E3ExUAOseIHio67EwGTvYZfsM5Z7Y/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab05/">Linked Lists</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1iMQU3D0_I3OMEEORHgGfm49TiGF9H8y-5yRhmUw2QqA/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab06/">Linked Lists Enhancements</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1-AJ8HrHtqcqF1isbVuS3ttsGdUSNxYMmPN5pJfwrCCw/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab07/">ADTs and Inheritance</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1tww5owBFrH_iHL7oBPs696mh_nGM7E5lxkQEYpoluEo/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab08/">Comparison, Exceptions, and Iteration</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1JxqEfPl7Ddk8ihDI3M8Epnv9iaDSS-yxCGDgYoXEs0o/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab09/">Runtime Analysis</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1Sozy7PBKC5IW878D2oWjE4FyeMqwRowDyuBtfLe45zU/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab10/">Trees and Traversals</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1SecLS890uj2TovR7_-uKzO4UrKW69sd1DkSP63j-iNk/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href="https://cs61bl.github.io/su25/labs/lab11/">Binary Search Trees</a>
								</td>
								<td>
									<a href="https://docs.google.com/presentation/d/1Of4ilTnUeSJ29E6I0uiRZmwfWZc1BW_7Z_RxkUy5rpM/edit?usp=drive_link">Slides</a>
								</td>
							</tbody>
							<tbody>
								<td>
									<a href=""></a>
								</td>
								<td>
									<a>...</a>
								</td>
							</tbody> */}
						</table>
						<br></br>
						<br></br>
						<div className="teaching_year">CS 61B, Fall 25</div>
						<div className="coursework_year" align="center">Discussion TA, Exam Dev</div>
						<br></br>
						<br></br>
						<div className="about-subtitle">Coursework:</div>
						<div className="coursework">
						<div className="coursework_year">Fall 2025</div>
						<ul className="coursework_inner">
							{/* <li className="coursework_inner"><span>CS 180: </span></li>
							<li className="coursework_inner"><span>CS 189:</span></li>
							<li className="coursework_inner"><span>Physics 7B:</span></li> */}
						</ul>
						<br></br>
						<div className="coursework_year">Spring 2025</div>
						<ul className="coursework_inner">
							<li className="coursework_inner"><span>CS 161: Computer Security (A+)</span>
								{/* <a>&nbsp; &nbsp; (</a>
								<a href="https://docs.google.com/presentation/d/1Of4ilTnUeSJ29E6I0uiRZmwfWZc1BW_7Z_RxkUy5rpM/edit?usp=drive_link">midterm cheatsheet</a>
								<a>,&nbsp; </a>
								<a href="https://docs.google.com/presentation/d/1Of4ilTnUeSJ29E6I0uiRZmwfWZc1BW_7Z_RxkUy5rpM/edit?usp=drive_link">final cheatsheet</a>
								<a>)</a> */}
							</li>
							<li className="coursework_inner"><span>CS 170: Efficient Algorithms and Intractable Problems (A)</span></li>
							<li className="coursework_inner"><span>CS 186: Database Systems (A+)</span></li>
							<li className="coursework_inner"><span>CS 370: Adaptive Instruction Methods in Computer Science</span></li>
						</ul>
						<br></br>
						<div className="coursework_year">Fall 2024</div>
						<ul className="coursework_inner">
							<li className="coursework_inner"><span>CS 61C: Great Ideas in Computer Architecture (A)</span></li>
							<li className="coursework_inner"><span>CS 70: Discrete Mathematics and Probability Theory (A+)</span></li>
							<li className="coursework_inner"><span>CS 365: Introduction to Instructional Methods in Computer Science for Academic Interns</span></li>
						</ul>
						<br></br>
						<div className="coursework_year">Spring 2024</div>
						<ul className="coursework_inner">
							<li className="coursework_inner"><span>CS 61B: Data Structures (A+)</span></li>
							<li className="coursework_inner"><span>DATA C100: Principles and Techniques of Data Science (A+)</span></li>
							<li className="coursework_inner"><span>EECS 16B: Designing Information Devices and Systems II (A+)</span></li>
						</ul>
						<br></br>
						<div className="coursework_year">Fall 2023</div>
						<ul className="coursework_inner">
							<li className="coursework_inner"><span>CS 61A: Structure and Interpretation of Computer Programs (A)</span></li>
							<li className="coursework_inner"><span>DATA C8: Foundations of Data Science (A+)</span></li>
							<li className="coursework_inner"><span>EECS 16A: Designing Information Devices and Systems I (A+)</span></li>
						</ul>
						<br></br>
						<div className="coursework_year">some other courses :)</div>
						<ul className="coursework_inner">
							<li className="coursework_inner"><span>UGBA 102A: Financial Accounting (A+)</span></li>
							<li className="coursework_inner"><span>MUSIC 141: University Symphony Orchestra (first violin)</span></li>
							<li className="coursework_inner"><span>MUSIC 158A: Sound and Music Computing with CNMAT Technologies (A+)</span></li>
							<li className="coursework_inner"><span>Cubstart DeCal: Introduction to Building Apps (iOS track)</span></li>
							<li className="coursework_inner"><span>Origami DeCal</span></li>
						</ul>
					</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
