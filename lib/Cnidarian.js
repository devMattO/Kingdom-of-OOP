'use strict';

import Animal from './Animal.js';

class Cnidarian extends Animal{
  constructor( name ){
    super( name, 'radial');
  }
}
export default Cnidarian;
