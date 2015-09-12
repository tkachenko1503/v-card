import React from 'react';

class Canvas extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <svg { ...this.props }>
          { this.props.children }
        </svg>
      </div>
    );
  }
}

export default Canvas;
