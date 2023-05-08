import { GeneralTurnTicket } from './general-turn-ticket';

export interface GeneralTicketDispenser<T> {
  getTurnTicket(): GeneralTurnTicket<T>;
}
