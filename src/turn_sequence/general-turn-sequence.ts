export interface TurnSequence<T extends string | number> {
  getNextTurnValue(): T;
}
