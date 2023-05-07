import { ITurnTicket } from './i-turn-ticket';
import { ITurnTicketService } from './i-turn-ticket.service';
import TurnTicket from './turn-ticket';

export default class TurnTicketService implements ITurnTicketService {
  create(turnNumber: number): ITurnTicket {
    return new TurnTicket(turnNumber);
  }
}
