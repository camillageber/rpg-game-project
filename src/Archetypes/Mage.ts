import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static archetypeInstances = 0;
  private etype: EnergyType;
  
  constructor(name: string) {
    super(name); 
    this.etype = 'mana';
  }

  static createdArchetypeInstances() {
    this.archetypeInstances += 1;
    return this.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.etype;    
  }
}

export default Mage;