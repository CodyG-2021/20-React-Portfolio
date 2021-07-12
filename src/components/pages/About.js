import React from 'react';

export default function About() {
	return (
		<div className="container">
			<div className='mx-5 mt-3 p-3 aboutMe'>
				<h1 className="text-center">About Cody Gallagher</h1>
				<img className="profilePic" src="./images/prof-pic.jpg" alt="Cody Gallagher" />
				<p className="paraTop">
					Born and raised in Colorado and spun around the sun 30 times, I've
					found passion in fantasy and all that it creates. I have a degree in
					graphic design and computer graphics from the University of Northern
					Colorado.
				</p>
				<br />
				<p>
					I Currently work for PramsPlus as a support specialist for many oil
					and gas companies that use our production program. With lots of
					patience I hope to learn a skill I have never fully been able to
					grasp, coding. With this knowledge I hope to be able to improve
					myself in my job and one day launch Prams via the web.
				</p>
				<br />
				<p>
					I enjoy a game of magic whenever I can get it and in my spare time
					I've picked up tabletop war-gaming. I like to paint models and find
					it very satisfying to see all the work that slowly progresses on
					them. I have two cats Dex and Bow who are way too cute! I live with
					my fiancee and we enjoy eating sushi.
				</p>
				<br />
				<p className="bottomPara text-center">
					Thank you for taking the time to read about me. I hope you enjoy
					looking at my work and projects soon to come!
				</p>
			</div>
		</div>

	);
}
