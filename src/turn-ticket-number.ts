import { GeneralTurnTicket } from './general-turn-ticket';

export default class TurnTicketNumber implements GeneralTurnTicket<number> {
  private turnNumber: number;

  constructor(turnNumber: number) {
    this.turnNumber = turnNumber;
  }

  public getTurnNumber() {
    return this.turnNumber;
  }
}
