import { GeneralTicketDispenser } from './general-ticket-dispenser';
import { TurnSequence } from '../turn_sequence/general-turn-sequence';
import { GeneralTurnTicketService } from '../turn_ticket/general-turn-ticket.service';

interface TicketDispenserDependencies {
  turnTicketService: GeneralTurnTicketService<number>;
  turnNumberSequence: TurnSequence<number>;
}

export default class NumberTicketDispenser implements GeneralTicketDispenser<number> {
  private turnTicketService: GeneralTurnTicketService<number>;
  private turnNumberSequence: TurnSequence<number>;

  constructor(dependencies: TicketDispenserDependencies) {
    this.turnNumberSequence = dependencies.turnNumberSequence;
    this.turnTicketService = dependencies.turnTicketService;
  }

  public getTurnTicket() {
    const newTurnNumber = this.turnNumberSequence.getNextTurnValue();
    const newTurnTicket = this.turnTicketService.create(newTurnNumber);

    return newTurnTicket;
  }
}
