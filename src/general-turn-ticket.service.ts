import { GeneralTurnTicket } from './general-turn-ticket';

export interface GeneralTurnTicketService<T> {
  create(_turnNumber: T): GeneralTurnTicket<T>;
}
