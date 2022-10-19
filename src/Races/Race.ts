import IRace from './IRace';

abstract class Race implements IRace {
  constructor(private _name: string, private _dexterity: number) { }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;