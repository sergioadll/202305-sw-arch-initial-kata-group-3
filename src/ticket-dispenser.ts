import { ITicketDispenser } from './i-ticket-dispenser';
import { ITurnNumberSequence } from './i-turn-number-sequence';
import TurnNumberSequence from './turn-number-sequence';
import { ITurnTicketService } from './i-turn-ticket.service';
import TurnTicketService from './turn-ticket.service';

interface TicketDispenserDependencies {
  turnTicketService: ITurnTicketService;
  turnNumberSequence: ITurnNumberSequence;
}
export default class TicketDispenser implements ITicketDispenser {
  private turnTicketService: ITurnTicketService;
  private turnNumberSequence: ITurnNumberSequence;

  constructor(dependencies?: TicketDispenserDependencies) {
    this.turnNumberSequence =
      dependencies?.turnNumberSequence || TurnNumberSequence;
    this.turnTicketService =
      dependencies?.turnTicketService || new TurnTicketService();
  }

  public getTurnTicket() {
    const newTurnNumber = this.turnNumberSequence.getNextTurnNumber();
    const newTurnTicket = this.turnTicketService.create(newTurnNumber);

    return newTurnTicket;
  }
}
