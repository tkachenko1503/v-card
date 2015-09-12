import React from 'react';
import CanvasUI from './ui/canvas';
import ControlsUI from './ui/controls';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <h1>Hello V-card</h1>
        <div className="layout__coll">
          <h3>Canvas</h3>
          <CanvasUI></CanvasUI>
        </div>
        <div className="layout__coll">
          <h3>Controls</h3>
          <ControlsUI></ControlsUI>
        </div>
      </div>
    );
  }
}

export default Layout;
