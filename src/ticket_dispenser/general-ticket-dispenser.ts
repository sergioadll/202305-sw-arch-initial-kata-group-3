import { GeneralTurnTicket } from '../turn_ticket/general-turn-ticket';

export interface GeneralTicketDispenser<T> {
  getTurnTicket(): GeneralTurnTicket<T>;
}
