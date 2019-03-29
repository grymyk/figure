import React from 'react';

import Canvas from './Canvas';

class Viewer extends React.Component {
    render() {
        const attr = {
            id: "silhouette",
            width:"180",
            height:"450"
        };

        return (
            <div id="silhouette_holder">
                 <Canvas
                    attr = {attr}
                    siluet = {this.props.siluet}
                />
            </div>
        )
    }

}

export default Viewer;