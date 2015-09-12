import React from 'react';

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <circle {...this.props}></circle>
    );
  }
}

Circle.defaultProps = {
  cx: 125,
  cy: 95,
  r: 80,
  style: {
    fill: 'red',
    stroke: 'black',
    strokeWidth: 5,
    opacity: 0.5
  }
};

export default Circle;
