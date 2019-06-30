import React from 'react';

import './index.scss';

import Viewer from './Viewer'
import Inputer from './Inputer'

class Figure extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            face : "heart",
            shoulder : "normal",
            breast : "middle",
            waist : "middle",
            thigh : "middle",
            legs : "normal",
        };

        this.onFigureChange = this.onFigureChange.bind(this);
        this.onFigureClean = this.onFigureClean.bind(this);
        this.onFigureDefault = this.onFigureDefault.bind(this);
	}

	onFigureChange(selector, type) {
        this.setState({
            [selector]: type
        });
    }

    onFigureClean() {
	    //console.log('onFigureClean');

	    this.setState({
            face : "",
            shoulder : "",
            breast : "",
            waist : "",
            thigh : "",
            legs : "",
        });
    }

    onFigureDefault() {
        this.setState(this.state = {
            face : "heart",
            shoulder : "normal",
            breast : "middle",
            waist : "middle",
            thigh : "middle",
            legs : "normal",
        });
    }

	render() {
	    return (
			<div>
                <div className="container">
                    <h1>Figure</h1>

                    <h2 className="heading">Build Your Figure</h2>

                    <Inputer
                        siluet = {this.state}
                        onFigureChange = {this.onFigureChange}
                            onFigureClean = {this.onFigureClean}
                            onFigureDefault = {this.onFigureDefault}

                        />
                    <Viewer siluet = {this.state} />
                </div>
			</div>
		)
	}
}

export default Figure;
