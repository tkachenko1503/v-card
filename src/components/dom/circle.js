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

export default Circle;
