'use strict';

import Bilateral from './Bilateral.js';

class Anthropod extends Bilateral{
  constructor(name){
    super(name, 'exoskeleton');
    this._name = name;
  }
}
export default Anthropod;