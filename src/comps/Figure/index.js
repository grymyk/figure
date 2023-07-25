import React from "react";

import "./index.scss";

import Viewer from "./Viewer"
import Inputer from "./Inputer"
import Heading from "./Heading";

const default_state = {
    face : "heart",
    shoulder : "normal",
    breast : "middle",
    waist : "middle",
    thigh : "middle",
    legs : "normal",
};

const clean_state = {
    face : "",
    shoulder : "",
    breast : "",
    waist : "",
    thigh : "",
    legs : "",
}

class Figure extends React.Component {
    state = default_state;

	onFigureChange = (selector, type) => {
        this.setState({
            [selector]: type
        });
    }

    onFigureClean = () => {
	    this.setState(clean_state);
    }

    onFigureDefault = () => {
        this.setState(default_state);
    }

	render() {
        // console.log(this.state);

	    return (
			<>
                <div className="container">
                    <Heading />
                    <Inputer
                        siluet = { this.state }
                        onFigureChange = { this.onFigureChange }
                        onFigureClean = { this.onFigureClean }
                        onFigureDefault = { this.onFigureDefault }
                    />
                    <Viewer siluet = { this.state } />
                </div>
			</>
		)
	}
}

export default Figure;
