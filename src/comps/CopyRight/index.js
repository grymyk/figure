import React from "react";
import "./index.scss";

function CopyRight() {
	const name = 'myko@grymyk.com';
	// const year = '2020';

	return (
		<div className="footer">
			<a href={`mailto:${name}`}>{name}</a>
			{/*<span> &#169;{year}</span>*/}
		</div>
	)
}

export default CopyRight;
