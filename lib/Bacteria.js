import LivingThing from './LivingThing.js';

class Bacteria extends LivingThing{
  constructor(name){
    super(name, true, false, false, true, false);
  }
}
export default Bacteria;