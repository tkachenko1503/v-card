import React from 'react';
import Controls from '../dom/controls';

import Actions from '../../actions/controlsActions';

import Reflux from 'reflux';
import selectedStore from '../../stores/selectedStore';
import mixins from 'es6-mixins';

export default class ControlsUI extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: selectedStore.getSelected()
    };

    mixins([Reflux.connect(selectedStore, 'selected')], this);
  }

  generateControls() {
    let shape = selectedStore.getShape();
    let result = [];

    if (shape) {
      result.push(<span>Current shape: { shape.type }({ shape.id }) </span>);
    } else {
      result.push(<span>No shape selected!</span>);
    }

    return result;
  }

  addShape(shape) {
    console.log(`add ${shape}!`);
    Actions.addShape(shape);
  }

  render() {
    return (
      <Controls addShape={ this.addShape }>
        { this.generateControls() }
      </Controls>
    );
  }
}
