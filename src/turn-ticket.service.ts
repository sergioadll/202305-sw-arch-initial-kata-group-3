import { TurnTicket } from './i-turn-ticket';
import { TurnTicketService } from './i-turn-ticket.service';
import TurnTicketNumber from './turn-ticket';

export default class TurnTicketNumberService implements TurnTicketService {
  create(turnNumber: number): TurnTicket {
    return new TurnTicketNumber(turnNumber);
  }
}
