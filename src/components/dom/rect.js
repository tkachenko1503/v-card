import React from 'react';

class Rect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <rect {...this.props}></rect>
    );
  }
}

Rect.defaultProps = {
  x: 50,
  y: 20,
  rx: 20,
  ry: 20,
  width: 150,
  height: 150,
  style: {
    fill: 'red',
    stroke: 'black',
    strokeWidth: 5,
    opacity: 0.5
  }
};

export default Rect;
