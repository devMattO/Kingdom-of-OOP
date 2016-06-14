'use strict';

import LivingThing from './LivingThing.js';

class Archaea extends LivingThing{
  constructor( name ) {
    super(name, true, false, true, true, false);
  }
}
export default Archaea;