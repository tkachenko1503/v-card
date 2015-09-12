import Reflux from 'reflux';
import controlActions from '../actions/controlsActions';

export default Reflux.createStore({
  _shapes: [],

  listenables: [controlActions],

  getShapes () {
    return this._shapes;
  },

  onAddShape(shapeType) {
    this._shapes.push({
      type: shapeType
    });
    this.trigger(this._shapes);
  }
});
