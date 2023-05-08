import { TurnSequence } from './i-turn-sequence';

class TurnNumberSequence implements TurnSequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public getNextTurnNumber() {
    return this.turnNumber++;
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
