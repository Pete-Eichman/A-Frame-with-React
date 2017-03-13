import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'box', width: 2, height: 2}} material="color: red" position={[0, 0, -5]}/>
        <Entity geometry={{primitive: 'sphere', radius: .25}} material="color: blue" position={[1, 2, -3]}/>
        <Entity geometry={{primitive: 'plane', width: 2, height: 2}} material="color: green" position={[0, 0, -1]} rotation={[-90, 0, 0]}/>
      </Scene>
    );
  }
}


export default VRScene;
