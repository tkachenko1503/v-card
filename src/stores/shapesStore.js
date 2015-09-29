import Reflux from 'reflux';
import controlActions from '../actions/controlsActions';

import {searchById, generateGuid} from '../utils';

export default Reflux.createStore({
  _shapes: [],

  listenables: [controlActions],

  getShapes () {
    return this._shapes;
  },

  onAddShape (shapeType) {
    this._shapes.push({
      type: shapeType,
      id: generateGuid()
    });
    this.trigger(this._shapes);
  },

  getById (id) {
    if (id && this._shapes.length > 0) {
      return searchById(id, this._shapes);
    }
  }
});
