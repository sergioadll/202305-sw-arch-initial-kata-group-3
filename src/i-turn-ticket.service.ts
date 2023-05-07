import { ITurnTicket } from './i-turn-ticket';

export interface ITurnTicketService {
  // eslint-disable-next-line no-unused-vars
  create: (turnNumber: number) => ITurnTicket;
}
