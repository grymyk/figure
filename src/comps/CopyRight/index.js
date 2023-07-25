import React from "react";
import "./index.scss";

function CopyRight() {
	const name = 'grymyk@gmail.com';
	const year = '2023';

	return (
		<div className="footer">
			<a href={`mailto:${name}`}>{name}</a>
			<span> &#169;{year}</span>
		</div>
	)
}

export default CopyRight;