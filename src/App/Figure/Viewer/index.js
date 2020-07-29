import React from 'react';

import Canvas from './Canvas';

function Viewer(props) {
    const attr = {
        id: "silhouette",
        width:"180",
        height:"450"
    };

    return (
        <div id="silhouette_holder">
             <Canvas
                attr = {attr}
                siluet = {props.siluet}
            />
        </div>
    )
}

export default Viewer;
