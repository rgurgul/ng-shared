import { Injectable } from '@angular/core';
import { iif, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { State } from './state';
import { ActionModel } from '../types/store.models';

export type types = 'loading';

@Injectable({ providedIn: 'root' })
export class CoreFacede extends State<boolean> {
  constructor() {
    super(false);
  }

  override dispatch({ payload, type }: ActionModel<types>): void {
    switch (type) {
      case 'loading':
        of(payload)
          .pipe(
            switchMap((val) =>
              iif(() => val, of(true), of(false).pipe(delay(1000)))
            )
          ) //symulacja asynchroniczności kiedy false
          .subscribe((val) => super.setState(val));
        break;
      default:
        break;
    }
  }
}
