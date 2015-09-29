import React from 'react';
import Canvas from '../dom/canvas';
import ShapeUI from './shape';

import Reflux from 'reflux';
import shapesStore from '../../stores/shapesStore';
import selectedStore from '../../stores/selectedStore';
import mixins from 'es6-mixins';


export default class CanvasUI extends React.Component {
  constructor() {
    super();
    
    this.state = {
      shapes: shapesStore.getShapes(),
      selected: selectedStore.getSelected()
    };

    mixins([Reflux.connect(shapesStore, 'shapes')], this);
  }

  renderShape(shape) {
    return <ShapeUI shape={shape} />;
  }

  render() {
    let shapes = this.state.shapes.map(this.renderShape);

    return (
      <Canvas height="200">
        { shapes }
      </Canvas>
    );
  }
}
