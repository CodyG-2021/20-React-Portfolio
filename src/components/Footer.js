import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className="footer pt-1">
			<div className="container text-center">
				<div>
					<a className="iconLink" href='https://github.com/CodyG-2021'>
						<FaGithubSquare size={40} />
					</a>
					<a className="iconLink" href='https://github.com/CodyG-2021'>
						<AiFillLinkedin size={45} />
					</a>
				</div>
				<span >© Cody Gallagher 🎲</span>
			</div>
		</footer>
	);
}
