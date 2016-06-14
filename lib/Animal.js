'use strict';

import Eukaryota from './Eukaryota.js';

class Animal extends Eukaryota {
  constructor( name, symmetry ) {
    super( name, false, false, true, true, symmetry );
    this._name = name;
    this._symmetry = symmetry;
  }
  get symmetry() {
    return this._symmetry;
  }
  set symmetry( value ) {
    this._symmetry = value;
  }

}
export default Animal;