import { ITurnTicket } from './i-turn-ticket';

export interface ITicketDispenser {
  getTurnTicket: () => ITurnTicket;
}
