import React from 'react';
import Controls from '../dom/controls';

import Actions from '../../actions/controlsActions';

export default class ControlsUI extends React.Component {
  constructor() {
    super();
  }

  generateControls() {
    return [
      <span>Generated controls</span>
    ];
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
