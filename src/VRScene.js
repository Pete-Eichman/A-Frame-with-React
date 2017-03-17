import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'sphere', radius: 100}} material={{shader: 'flat', color: '#bcbcbc'}} scale="1 1 -1" light={{type: 'ambient', color: "white", intensity:'4'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: yellow" position={[-.5, 4, -4.5]} light={{type: 'point', color: "yellow", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: blue" position={[.5, 4, -3.5]} light={{type: 'point', color: "blue", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: red" position={[.5, 4, -4.5]} light={{type: 'point', color: "red", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: green" position={[-.5, 4, -3.5]} light={{type: 'point', color: "green", intensity:'4', distance: '50', decay: '2'}}/>
        <Entity geometry={{primitive: 'plane', width: 10, height: 10}} material="color: green" position={[0, 0, -5]} rotation={[-90, 0, 0]}/>
        <Entity geometry={{primitive: 'box', width: 1, height: 1}} material="color: red" position={[0, .5, -4]}/>
        <Entity geometry={{primitive: 'cone', height: 1, radiusTop: 0, radiusBottom: 1}} material="color: black" position={[0, 2, -4]}/>
      </Scene>
    );
  }
}


export default VRScene;
