import React from 'react';
import Canvas from '../canvas/';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello V-card</h1>
        <h3>Canvas</h3>

        <Canvas height="500" width="500"></Canvas>

      </div>
    );
  }
}

export default Layout;
