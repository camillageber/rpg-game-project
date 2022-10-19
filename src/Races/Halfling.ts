import Race from './Race';

class Halfling extends Race {
  private lifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Halfling;