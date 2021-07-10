import React from "react"

export default function Cards() {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img src="./images/movieGrab.png" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="https://github.com/CodyG-2021" className="btn btn-primary">Go somewhere</a>
				</div>
</div>
			);
}