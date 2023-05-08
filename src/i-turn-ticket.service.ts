import { TurnTicket } from './i-turn-ticket';

export interface TurnTicketService {
  // eslint-disable-next-line no-unused-vars
  create: (turnNumber: number) => TurnTicket;
}
