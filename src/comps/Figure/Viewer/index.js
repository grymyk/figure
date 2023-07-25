import React from 'react';

import Canvas from './Canvas';

function Viewer(props) {
    const { siluet } = props;

    const attr = {
        id: "silhouette",
        height: "450",
        width: "180"
    };

    return (
        <div id="silhouette_holder">
             <Canvas
                 attr = { attr }
                 siluet = { siluet }
             />
        </div>
    )
}

export default Viewer;
