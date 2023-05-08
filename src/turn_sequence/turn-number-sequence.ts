import { TurnSequence } from './general-turn-sequence';

class TurnNumberSequence implements TurnSequence<number> {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public getNextTurnValue() {
    return this.turnNumber++;
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
