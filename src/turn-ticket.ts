import { TurnTicket } from './i-turn-ticket';

export default class TurnTicketNumber implements TurnTicket {
  private turnNumber: number;

  constructor(turnNumber: number) {
    this.turnNumber = turnNumber;
  }

  public getTurnNumber() {
    return this.turnNumber;
  }
}
