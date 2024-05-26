import { BehaviorSubject, Observable } from 'rxjs';
import { ActionModel } from '../types/store.models';

export abstract class State<T> {
  private state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.state$ = new BehaviorSubject(initialState);
  }

  getState(): Observable<T> {
    return this.state$.asObservable();
  }

  protected setState(nextState: T): void {
    this.state$.next(nextState);
  }

  abstract dispatch({ payload, type }: ActionModel<any>): void;
}
