import React from 'react';

class Circle extends React.Component {
  render() {
    return (
      <circle {...this.props}></circle>
    );
  }
}

export default Circle;
