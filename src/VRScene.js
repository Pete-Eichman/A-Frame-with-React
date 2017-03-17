import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'sphere', radius: 100}} material={{shader: 'flat', color: '#bcbcbc'}} scale="1 1 -1" light={{type: 'ambient', color: "white", intensity:'4'}}/>

        <Entity geometry={{primitive: 'torusKnot', arc: '360', p:'3', q:'8', radius:'.5', radiusTubular:'0.05'}} material="color: #000000" position={[0, 4, -6]}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: #faff00" position={[-.5, 4, -4.5]} light={{type: 'point', color: "#faff00", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: #0000ff" position={[.5, 4, -3.5]} light={{type: 'point', color: "#0000ff", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: #f20202" position={[.5, 4, -4.5]} light={{type: 'point', color: "#f20202", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: #00ff00" position={[-.5, 4, -3.5]} light={{type: 'point', color: "#00ff00", intensity:'4', distance: '50', decay: '2'}}/>

        <Entity geometry={{primitive: 'plane', width: 10, height: 10}} material={{shader: 'flat', color: '#004f00'}}  position={[0, 0, -5]} rotation={[-90, 0, 0]}/>
        <Entity geometry={{primitive: 'box', width: 1, height: 1}} material={{shader: 'standard', color: '#000000'}} position={[0, .5, -4]}/>
        <Entity geometry={{primitive: 'cylinder', height: 2, radius: .125}} material={{shader: 'standard', color: '#000000'}} position={[0, .5, -4]}/>
        <Entity geometry={{primitive: 'cone', height: 1, radiusTop: 0, radiusBottom: 1}} material={{shader: 'standard', color: '#000000', metalness: '1'}} position={[0, 2, -4]}/>
      </Scene>
    );
  }
}


export default VRScene;
