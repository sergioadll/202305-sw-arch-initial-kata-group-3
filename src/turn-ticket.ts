import { ITurnTicket } from './i-turn-ticket';

export default class TurnTicket implements ITurnTicket {
  private turnNumber: number;

  constructor(turnNumber: number) {
    this.turnNumber = turnNumber;
  }

  public getTurnNumber() {
    return this.turnNumber;
  }
}
