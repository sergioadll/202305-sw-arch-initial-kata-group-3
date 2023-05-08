import NumberTicketDispenser from './ticket-number-dispenser';
import TurnNumberSequence from './turn-number-sequence';
import TurnTicketNumberService from './turn-ticket-number.service';

describe('NumberTicketDispenser', () => {
  let dispenser1: NumberTicketDispenser;
  let dispenser2: NumberTicketDispenser;

  beforeAll(() => {
    const sequence = TurnNumberSequence;
    dispenser1 = new NumberTicketDispenser({
      turnNumberSequence: sequence,
      turnTicketService: new TurnTicketNumberService(),
    });
    dispenser2 = new NumberTicketDispenser({
      turnNumberSequence: sequence,
      turnTicketService: new TurnTicketNumberService(),
    });
  });

  test('getTurnTicket should return 0 for the first call', () => {
    const turnNumber = dispenser1.getTurnTicket();

    expect(turnNumber.getTurnNumber()).toBe(0);
  });

  test('getTurnTicket should return 0 for the first call', () => {
    const turnNumber = dispenser1.getTurnTicket();
    const NextTurnNumber = dispenser1.getTurnTicket();

    expect(NextTurnNumber.getTurnNumber()).toBeGreaterThan(
      turnNumber.getTurnNumber(),
    );
  });

  test('getTurnTicket should return 0 for the first call', () => {
    const turnNumber1 = dispenser1.getTurnTicket();
    const turnNumber2 = dispenser2.getTurnTicket();

    console.log({ turnNumber1, turnNumber2 });

    expect(turnNumber2.getTurnNumber()).toBeGreaterThan(
      turnNumber1.getTurnNumber(),
    );
  });
});
