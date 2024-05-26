import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpResponseModel, ItemModel } from '../types/services.types';
import { ActionModel } from '../types/store.models';
import { Api } from '../utils/api';
import { State } from './state';

@Injectable({ providedIn: 'root' })
export class ItemsFacade extends State<ItemModel[]> {
  http = inject(HttpClient);

  constructor() {
    super([]);
  }

  override dispatch({ payload, type }: ActionModel<any>): void {
    switch (type) {
      case 'fetch':
        this.http
          .get<HttpResponseModel>(Api.ITEMS_END_POINT)
          .pipe(map((resp: HttpResponseModel) => resp.data))
          .subscribe((data: ItemModel[]) => {
            super.setState(data);
          });
        break;
      default:
        break;
    }
  }
}
