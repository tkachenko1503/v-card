import React from 'react';

export default class ControlsFactory extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <div class="controls-actions">
          <span>{ this.props.shape.type } ({ this.props.shape.id.slice(0, 5) })</span>
          <button onClick={ () => { this.props.removeShape(this.props.shape.id); } }>Remove</button>
        </div>

      </div>
    );
  }
}
