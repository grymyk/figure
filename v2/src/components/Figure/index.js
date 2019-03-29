import React from 'react';

import './index.scss';

import CopyRight from '../CopyRight'
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
        //this.onFigureClean = this.onFigureClean.bind(this);
	}

	onFigureChange(selector, type) {
        this.setState({
            [selector]: type
        });
    }

    /*onFigureClean() {
	    this.setState({});
    }*/

	render() {
	    return (
			<div>
                <div className="container">
                    <h1>Figure</h1>

                    <h2 className="heading">Build Your Figure</h2>

                    <Viewer siluet = {this.state} />
                    <Inputer
                        siluet = {this.state}
                        onFigureChange = {this.onFigureChange}
                        //onFigureClean = {this.onFigureClean}
                    />
                </div>
				<CopyRight />
			</div>
		)
	}
}

export default Figure;
