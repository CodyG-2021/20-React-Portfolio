import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

export default function Resume() {
	return (
		<div className='mx-5 mt-3 p-3'>
			<h1>Resume Summary</h1>
			<h4>Awards</h4>
			<ul>
				<li>Eagle Scout - Boy Scouts of America 2008</li>
				<li>Best in Computer Graphics - University of Northern Colorado School of Art & Design, April 17, 2013</li>
				<li>Artwork featured in the Mariani Gallery 2012 & 2013 - Computer Graphics – Photography</li>
			</ul>
			<h4>Education</h4>
			<ul>
				<li>University of Denver Code BootCamp February 2021 - August 2021
					<ul>
						<li>Full Stack Web Development</li>
					</ul>
				</li>
				<li> University of Northern Colorado – Greeley, CO 2013| Dean’s Honor Roll
				<ul>
						<li>Bachelor’s Degree in Visual Communication and Design
							<ul>
								<li>Emphases: Computer Graphics and Graphic Design </li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

			<h4>Technical skills</h4>
			<ul>
				<li>Full stack web development
					<ul>
						<li>HTML, CSS, JavaScript, jQuery, APIs, node.js, SQL, express, oop, mysql, orm, mvc, NoSql, PWA, React, MERN</li>
					</ul>
				</li>
			</ul>


			<h5>Download My Full Resume</h5>
			<a className="iconLink" href='./files/Cody Gallagher Resume 2021.pdf' download="Cody Gallagher Resume 2021">
				<FaFileDownload size={85} />
			</a>
		</div>
	);
}
