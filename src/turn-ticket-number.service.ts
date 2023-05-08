import { GeneralTurnTicket } from './general-turn-ticket';
import { GeneralTurnTicketService } from './general-turn-ticket.service';
import TurnTicketNumber from './turn-ticket-number';

export default class TurnTicketNumberService implements GeneralTurnTicketService<number> {
  create(turnNumber: number): GeneralTurnTicket<number> {
    return new TurnTicketNumber(turnNumber);
  }
}
