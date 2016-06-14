'use strict';

import Bilateral from './Bilateral.js';

class Mollusk extends Bilateral{
  constructor(name){
    super(name, 'soft-bodied');
    this._name = name;
  }
}
export default Mollusk;