import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export interface StateAction<T, K> {
  type?: T;
  payload?: K;
}

export abstract class State<T> {
  private _state: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state = new BehaviorSubject(initialState);
  }

  get state$(): Observable<T> {
    return this._state.asObservable();
  }

  get value(): T {
    return this._state.getValue();
  }

  select<K>(selectorFn: (state: T) => K): Observable<K> {
    return this._state.pipe(map(selectorFn), distinctUntilChanged());
  }

  protected setState(nextState: T): void {
    this._state.next(nextState);
  }

  protected updateState<K extends keyof T, E extends Partial<Pick<T, K>>>(state: E): void {
    this._state.next({ ...this.value, ...state });
  }

  abstract dispatch({ payload, type }: StateAction<unknown, unknown>): void;
}
