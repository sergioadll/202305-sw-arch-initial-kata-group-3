import { TicketDispenser } from './i-ticket-dispenser';
import { TurnSequence } from './i-turn-sequence';
import { TurnTicketService } from './i-turn-ticket.service';

interface TicketDispenserDependencies {
  turnTicketService: TurnTicketService;
  turnNumberSequence: TurnSequence;
}
export default class NumberTicketDispenser implements TicketDispenser {
  private turnTicketService: TurnTicketService;
  private turnNumberSequence: TurnSequence;

  constructor(dependencies: TicketDispenserDependencies) {
    this.turnNumberSequence = dependencies.turnNumberSequence;
    this.turnTicketService = dependencies.turnTicketService;
  }

  public getTurnTicket() {
    const newTurnNumber = this.turnNumberSequence.getNextTurnNumber();
    const newTurnTicket = this.turnTicketService.create(newTurnNumber);

    return newTurnTicket;
  }
}
