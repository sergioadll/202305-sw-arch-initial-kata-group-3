import { TurnTicket } from './i-turn-ticket';

export interface TurnTicketService {
  create(_turnNumber: number): TurnTicket;
}
