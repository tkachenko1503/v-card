import React from 'react';

class Controls extends React.Component {
  constructor() {
    super();
    this.handleAdd = (e) => {
      this.props.addShape(e.target.dataset.shape);
    };
  }

  render() {
    return (
      <div className="controls">
        <section className="controls__adds">
          <button onClick={ this.handleAdd } data-shape="rect">Rect</button>
          <button onClick={ this.handleAdd } data-shape="circle">Circle</button>
          <button onClick={ this.handleAdd } data-shape="triangle">Triangle</button>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default Controls;
