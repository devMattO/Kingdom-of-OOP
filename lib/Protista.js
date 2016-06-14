'use strict';

import Eukaryota from './Eukaryota.js';

class Protista extends Eukaryota{
  constructor( name, uniCellular, mobile, hetertroph ){
    super( name, uniCellular, true, mobile, hetertroph );
  }
}
export default Protista;