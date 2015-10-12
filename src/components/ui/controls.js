import React from 'react';
import Controls from '../dom/controls';
import ControlsFactory from '../dom/controlsFactory';

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
      result.push(<ControlsFactory shape={ shape } removeShape={ this.removeShape } />);
    } else {
      result.push(<span>No shape selected!</span>);
    }

    return result;
  }

  addShape(shape) {
    console.log(`add ${shape}!`);
    Actions.addShape(shape);
  }

  removeShape(id) {
    console.log(`remove ${id}`);
    Actions.removeShape(id);
  }

  render() {
    return (
      <Controls addShape={ this.addShape }>
        { this.generateControls() }
      </Controls>
    );
  }
}
