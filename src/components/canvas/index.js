import React from 'react';
import Rect from '../rect/';
import Circle from '../circle/';
import Triangle from '../triangle/';


let shapes = {
  rect: <Rect x="50" y="20" rx="20" ry="20" width="150" height="150"
              style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }}/>,

  circle: <Circle cx="120" cy="100" r="80"
                  style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }}/>,

  triangle: <Triangle points="125,20 200,170 50,170"
            style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }}/>
};

class Canvas extends React.Component {
  constructor() {
    super();

    this.state = { shape: false };
  }

  changeShape(e) {
    let shp = e.currentTarget.id;
    this.setState({ shape: shp });
  }

  render() {
    let shape = this.state.shape ? shapes[this.state.shape] : '';

    return (
      <div>
        <section id="controls">
          <span>
            <button id="rect" onClick={ this.changeShape.bind(this) }>rect</button>
          </span>
          <span>
            <button id="circle" onClick={ this.changeShape.bind(this) }>circle</button>
          </span>
          <span>
            <button id="triangle" onClick={ this.changeShape.bind(this) }>triangle</button>
          </span>
        </section>

        <svg { ...this.props }>
          { shape }
        </svg>
      </div>
    );
  }
}

export default Canvas;
