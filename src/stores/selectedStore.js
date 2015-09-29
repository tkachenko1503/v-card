import Reflux from 'reflux';
import selecteedActions from '../actions/selecteedActions';

import shapesStore from './shapesStore';

export default Reflux.createStore({
  _selected: {
    shape: null,
    layer: null
  },

  listenables: [selecteedActions],

  getSelected () {
    return this._selected;
  },

  onSelectShape (id) {
    this._selected.shape = id;
    this.trigger(this._selected);
  },

  getShape () {
    return shapesStore
      .getById(this._selected.shape);
  }
});
