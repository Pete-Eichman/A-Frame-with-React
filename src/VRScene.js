import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'sphere', radius: 100}} material={{shader: 'flat', color: 'blue'}} scale="1 1 -1"/>
        <Entity geometry={{primitive: 'box', width: 1, height: 1}} material="color: red" position={[0, .5, -4]}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: yellow" position={[0, 1.25, -4]}/>
        <Entity geometry={{primitive: 'plane', width: 10, height: 10}} material="color: green" position={[0, 0, -5]} rotation={[-90, 0, 0]}/>
        <Entity geometry={{primitive: 'cone', height: .5}} material="color: red" position={[0, 4, -4]}/>
      </Scene>
    );
  }
}


export default VRScene;
