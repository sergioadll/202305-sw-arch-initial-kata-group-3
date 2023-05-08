import { TurnTicket } from './i-turn-ticket';

export interface TicketDispenser {
  getTurnTicket(): TurnTicket;
}
