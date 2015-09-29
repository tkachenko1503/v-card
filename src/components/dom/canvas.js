import React from 'react';

import './canvas.scss';

class Canvas extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="canvas-wrapper">
        <svg className="canvas-tag" { ...this.props }>
          { this.props.children }
        </svg>
      </div>
    );
  }
}

export default Canvas;
